import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
class User {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column('timestamp')
  birthDate: Date

  @Column()
  password: string

}

export default User