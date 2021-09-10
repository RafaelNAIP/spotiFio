import { getCustomRepository } from "typeorm";
import User from "../models/Users";
import UserRepository from "../repositories/UsersRepository";

interface Request {
  name?: string
  email: string
  birthDate: Date,
  password: string
}

class createUserService {
  public  async execute({ name, email, birthDate, password }: Request): Promise<User> {
    const usersRepository = getCustomRepository(UserRepository)

    const findExistentEmail = await usersRepository.findByEmail(
      email
    ) 

    if(findExistentEmail){
      throw Error('This email already exists')
    }

    const user = usersRepository.create({
      name,
      email,
      birthDate,
      password
    })

    await usersRepository.save(user)

    return user

  }
}

export default createUserService