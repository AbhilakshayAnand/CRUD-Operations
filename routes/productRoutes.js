import express from "express";
import Product from "../models/productModel.js";
import {addProduct, deleteProduct, getProducts , getProductsById, updateProduct } from "../controller/productController.js";

const router = express.Router();

// Add Product
router.post("/", addProduct);

// Get All Products
router.get("/", getProducts);

// Get Product by ID
router.get("/:id", getProductsById);

// Update Product
router.put("/:id", updateProduct);

// Delete Product
router.delete("/:id", deleteProduct);

export default router;
