import express from 'express'
import path from 'path'
import pets_router from './routes/pets'
import users_router from './routes/users'
import store_router from './routes/store'

const PORT = process.env.PORT || 3000

app.use('/api/pets', pets_router)


app.use('/api/users', users_router)


app.use('/api/store', store_router)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))