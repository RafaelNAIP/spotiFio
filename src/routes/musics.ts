import { Router } from 'express'
import CreateMusicService from '../services/createMusicService'

const musicRouter = Router()

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