import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const filePath = path.join(__dirname, '../sample-data/users.json')

const readUsersData = () => {
    const data = fs.readFileSync(filePath)
    return JSON.parse(data)
}

const writeUsersData = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}

export const getAllUsers = (req, res, next) => {
    try {
        const users = readUsersData()
        res.send(users)
    } catch (error) {
        next({ message: 'Failed to fetch users', status: 500 })
    }
}

export const getUser = (req, res, next) => {
    try {
        const users = readUsersData()
        const index = users.findIndex( user => user.id === parseInt(req.params.id))
        if (index !== -1) {
            res.send(users[index])
        } else {
            next({ message: 'User not found', status: 404 })
        }
    } catch (error) {
        next({ message: 'Failed to fetch user', status: 500 });
    }
}

export const createUser = (req, res, next) =>{
    try {
        const users = readUsersData()
        const newUser = req.body
        users.push(newUser)
        writeUsersData(users)
        res.status(201).send(newUser)
    } catch (error) {
        next({ message: 'Failed to create user', status: 500 })
    }
}

export const deleteUser = (req, res, next) => {
    try {
        let users = readUsersData()
        const index = users.findIndex( user => user.id === parseInt(req.params.id))
        if (index !== -1) {
            users = users.filter( user => user.id !== parseInt(req.params.id))
            writeUsersData(users)
            res.sendStatus(204);
          } else {
            next({ message: 'User not found', status: 404 });
          }
        } catch (error) {
          next({ message: 'Failed to delete user', status: 500 });
        }
    }

export const updateUser = (req, res, next) => {
    try {
        let users = readUsersData()
        const index = users.findIndex( user => user.id === parseInt(req.params.id))
        if (index !== -1) {
            users[index] = { ...users[index], ...req.body }
            writeUsersData(users)
            res.send(users[index])
        } else {
            next({ message: 'User not found', status: 404 })
        }
    } catch (error) {
        next({ message: 'Failed to update user', status: 500 });
    }
}