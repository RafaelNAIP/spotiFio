import { Router } from 'express'
import { getCustomRepository } from 'typeorm'
import ensureAuthenticated from '../middleware/ensureAuthenticated'
import MusicsRepository from '../repositories/MusicRepository'
import CreateMusicService from '../services/createMusicService'

const musicRouter = Router()

musicRouter.use(ensureAuthenticated)

musicRouter.get("/musics", async (request, response) => {
  
    const musicRepository = getCustomRepository(MusicsRepository)

    const musics = await musicRepository.find()

    response.json(musics)

})

musicRouter.post('/musics', async (request, response) => {
  try {
    const { name, gender, artistId } = request.body

    const createMusic = new CreateMusicService()


    const music = await createMusic.execute({
      name,
      gender,
      artistId
    })
    return response.json(music)

  } catch (err: any){
    return response.status(400).json({ error: err.message })
  }
})

export default musicRouter