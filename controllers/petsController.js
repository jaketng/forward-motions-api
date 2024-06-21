import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const filePath = path.join(__dirname, '../sample-data/pets.json')

const readPetsData = () => {
    const data = fs.readFileSync(filePath)
return JSON.parse(data)
}

const writePetsData = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}

export const getAllPets = (req, res, next) => {
    try {
        const pets = readPetsData()
        res.send(pets)
    } catch (error) {
        next({ message: 'Failed to fetch pets', status: 500 })
    }
}

export const getPetById = (req, res, next) => {
    try {
        const pets = readPetsData()
        const pet = pets.find(pet => pet.id === parseInt(req.params.id))
        if (pet) {
            res.send(pet)
        } else {
            next({ message: 'Pet not found', status: 404 })
        }
    } catch (error) {
        next({ message: 'Failed to fetch pet', status: 500 })
    }
}

export const createPet = (req, res, next) => {
    try {
        const pets = readPetsData()
        const newPet = req.body
        pets.push(newPet)
        writePetsData(pets)
        res.status(201).send(newPet)
    } catch (error) {
        next({ message: 'Failed to create pet', status: 500 })
    }
}

export const updatePet = (req, res, next) => {
    try {
        const pets = readPetsData()
        const index = pets.findIndex(pet => pet.id === parseInt(req.params.id))
        if (index !== -1) {
            pets[index] = { ...pets[index], ...req.body }
            writePetsData(pets)
            res.send(pets[index])
        } else {
            next({ message: 'Pet not found', status: 404 })
        }
    } catch (error) {
        next({ message: 'Failed to update pet', status: 500 })
    }
}

export const deletePet = (req, res, next) => {
    try {
        let pets = readPetsData()
        const index = pets.findIndex(pet => pet.id === parseInt(req.params.id))
        if (index !== -1) {
            pets = pets.filter(pet => pet.id !== parseInt(req.params.id))
            writePetsData(pets)
            res.sendStatus(204)
        } else {
            next({ message: 'Pet not found', status: 404 })
        }
    } catch (error) {
        next({ message: 'Failed to delete pet', status: 500 })
    }
}
