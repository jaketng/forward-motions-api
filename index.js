import express from 'express'
import path from 'path'
import pets_router from './routes/pets.js'
import users_router from './routes/users.js'
import store_router from './routes/store.js'
import { errorHandler } from './middleware/error.js'

const app = express()

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.send("Home Page!!")
})

app.use('/api/pets', pets_router)

app.use('/api/users', users_router)

app.use('/api/store', store_router)

app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))