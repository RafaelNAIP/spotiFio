import { Router } from 'express'
import CreateArtistService from '../services/createArtistService'

const artistRouter = Router()

artistRouter.post('/artists',async (request, response) => {
  try {
    
    const { email, name, musicalGender, password } = request.body
    
    const createArtist = new CreateArtistService()

    const artist = await createArtist.execute({
      name,
      email,
      musicalGender,
      password
    })

    return response.json(artist)
  } catch (err: any) {
    return response.status(400).json({ error: err.message })
  }
})

export default artistRouter