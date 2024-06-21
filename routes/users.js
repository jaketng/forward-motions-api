import express from "express";
import {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/usersController.js";

const users_router = express.Router();

users_router.post("/", createUser);
users_router.get("/:id", getUser);
users_router.get("/", getAllUsers);
users_router.put("/:id", updateUser);
users_router.delete("/:id", deleteUser);

export default users_router;
