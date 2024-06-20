import express from 'express'

const store_router = express.Router()

store_router.get('/', (req, res) => {
  res.send('Hello From Store Router')
})

export default store_router