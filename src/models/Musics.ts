import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import Artist from './Artist'

@Entity('musics')
class Musics {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  gender: string

  @Column()
  artistId: string

  @ManyToOne(() => Artist)
  @JoinColumn({ name: 'artistId' })
  artist: Artist

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

}

export default Musics