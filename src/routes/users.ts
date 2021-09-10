import { Request, Response, Router } from "express"
import { getCustomRepository } from "typeorm"
import UserRepository from "../repositories/UsersRepository"
import createUserService from "../services/createUserService"

const userRouter = Router()

userRouter.get('/user', async (request, response) => {
  const userRepository = getCustomRepository(UserRepository)
  const users = await userRepository.find()

  return response.json(users)
})

userRouter.post("/user", async (request, response) => {
  try{
  const { name, birthDate, email, password } = request.body

  const createUser = new createUserService()

  const user = await createUser.execute({
    name,
    birthDate,
    email,
    password
  })

  return response.json(user)
} catch (err: any){
  return response.status(400).json({ error: err.message })
}
})

export default userRouter