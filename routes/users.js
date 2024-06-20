import express from 'express'

const users_router = express.Router()

users_router.get('/', (req, res) => {
  res.send('Hello From Users Router')
})

export default users_router