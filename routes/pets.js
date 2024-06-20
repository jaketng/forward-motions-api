import express from 'express'

const pets_router = express.Router()

pets_router.get('/', (req, res) => {
  res.send('Hello From Pets Router')
})

export default pets_router