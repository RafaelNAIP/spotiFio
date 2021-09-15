import { Router } from 'express'
import AuthenticateUserService from '../services/AuthenticateUserService'

const sessionRouter = Router()

sessionRouter.post('/sessions', async (request, response) => {
  try {
    const { email, password } = request.body

    const authenticateUser = new AuthenticateUserService()

    const { user, token } = await authenticateUser.execute({
      email,
      password
    })


    return response.json({ user, token })
  } catch (err: any){
    return response.status(err.statusCode).json({ error: err.message })
  }
})

export default sessionRouter