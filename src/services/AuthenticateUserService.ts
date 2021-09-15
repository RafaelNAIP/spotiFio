import { compare } from "bcryptjs"
import { getCustomRepository, getRepository } from "typeorm"
import User from "../models/Users"
import UserRepository from "../repositories/UsersRepository"
import { sign } from 'jsonwebtoken'
import authConfig from '../config/auth'
import AppError from "../errors/AppError"

interface Request {
  email: string
  password: string
}

interface Response {
  user: User,
  token: string
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getCustomRepository(UserRepository)

  
    const user = await usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401)
    }

    const passwordMatched = await compare(password, user.password)

    if(!passwordMatched){
      throw new AppError('Incorrect email/password combination.', 401)
    }

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn
    })

    return {
      user,
      token
    }

  }
}

export default AuthenticateUserService