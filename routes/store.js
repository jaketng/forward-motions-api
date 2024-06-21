import express from "express";

import {
  placeOrder,
  getOrder,
  deleteOrder,
} from "../controllers/storeController.js";

const store_router = express.Router();

store_router.post("/order", placeOrder);
store_router.get("/order/:id", getOrder);
store_router.delete("/order/:id", deleteOrder);

export default store_router;
