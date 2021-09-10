import 'reflect-metadata'
import express from 'express'

import './database'
import userRouter from './routes/users'

const app = express()

app.use(express.json())

app.listen(3333, () => {
  console.log("👌 application started")
})

app.use(userRouter)