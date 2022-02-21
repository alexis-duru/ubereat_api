import express from "express";

import { 
    getOrders, 
    createOneOrder,
    getOneOrderById,
    updateOneOrderById,
    deleteOneOrderById,
    
} from "../controllers/orders.controller.js";

export const router = express.Router();


router
    .route("/") // Base path of my project
    .get(getOrders) // Get all orders
    .post(createOneOrder); // Create an order

router
    .route("/:id")
    .get(getOneOrderById) // Get one order by ID
    .put(updateOneOrderById) // Update one order by ID
    .delete(deleteOneOrderById) // Delete one order by ID


