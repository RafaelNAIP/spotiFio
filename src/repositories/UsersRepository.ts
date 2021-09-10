import User from '../models/Users'

import { EntityRepository, Repository } from 'typeorm'


@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async findByEmail(email: string): Promise<User | null> {
    
    const findUser = await this.findOne({
      where: { email }
    })

    return findUser || null
  }
}

export default UserRepository