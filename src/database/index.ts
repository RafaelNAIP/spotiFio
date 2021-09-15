import { createConnection } from 'typeorm'
import Artist from '../models/Artist'
import Musics from '../models/Musics'
import User from '../models/Users'

createConnection({
  entities: [
    Artist,
    Musics,
    User
  ],
  
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "docker",
    "database": "spoto_fio",
    "migrations": [
      "./src/database/migrations/*.ts"
    ],
    "cli": {
      "migrationsDir": "./src/database/migrations"
    }
})