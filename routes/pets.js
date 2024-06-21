import { Router } from 'express';
import { getAllPets, getPetById, createPet, updatePet, deletePet } from '../controllers/petsController.js';

const pets_router = Router();

pets_router.get('/', getAllPets);
pets_router.get('/:id', getPetById);
pets_router.post('/', createPet);
pets_router.put('/:id', updatePet);
pets_router.delete('/:id', deletePet);

export default pets_router;