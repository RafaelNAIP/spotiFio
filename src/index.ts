import 'reflect-metadata'
import express from 'express'

import './database'
import userRouter from './routes/users'
import artistRouter from './routes/artists'
import musicRouter from './routes/musics'

const app = express()

app.use(express.json())

app.listen(3333, () => {
  console.log("👌 application started")
})

app.use(userRouter)
app.use(artistRouter)
app.use(musicRouter)