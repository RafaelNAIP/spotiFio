import { getRepository } from "typeorm";
import Artist from "../models/Artist";

import { hash } from 'bcryptjs' 

interface Request {
  name: string,
  email: string,
  musicalGender: string,
  password: string
}

class CreateArtistService {
  public async execute({ name, email, musicalGender, password }: Request): Promise<Artist> {
    const artistRepository = getRepository(Artist)

    const checkUsersExists = await artistRepository.findOne({
      where: { email }
    })

    if (checkUsersExists) {
      throw new Error('Email adress already used')
    }

    const hashesPassword = await hash(password, 8)

    const artist = artistRepository.create({
      name,
      email,
      password: hashesPassword,
      musicalGender
    })

    await artistRepository.save(artist)

    return artist
  }

}

export default CreateArtistService