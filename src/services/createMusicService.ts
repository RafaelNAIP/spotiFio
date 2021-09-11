import { getCustomRepository } from "typeorm";
import Musics from "../models/Musics";
import MusicsRepository from "../repositories/MusicRepository";

interface Request {
  artistId: string,
  gender: string,
  name: string
}

class CreateMusicService {
  public async execute ({ artistId, gender, name }: Request) : Promise<Musics> {
    
    const musicRepository = getCustomRepository(MusicsRepository)
    
    const findMusicWithSameName = await musicRepository.findByMusicName(
      name
    )

    if (findMusicWithSameName) {
      throw Error('This music already exists')
    }
    
    const music = musicRepository.create({
      artistId,
      gender,
      name
    })

    await musicRepository.save(music)

    return music
  }
}

export default CreateMusicService