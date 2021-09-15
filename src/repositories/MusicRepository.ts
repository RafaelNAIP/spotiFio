
import { EntityRepository, Repository } from 'typeorm'
import Musics from '../models/Musics'


@EntityRepository(Musics)
class MusicsRepository extends Repository<Musics> {
  public async findByMusicName( name: string ): Promise<Musics | null> {
    
    const findMusic = await this.findOne({
      where: { name }
    })
    return findMusic || null
  }
}

export default MusicsRepository