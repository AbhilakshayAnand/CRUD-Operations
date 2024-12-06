import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";  

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Home Route
app.get("/", (req, res) => {
    res.send("Hello there!");
});

// Product Routes
app.use("/api/products", productRoutes);

// Connect to MongoDB
mongoose
    .connect(
        "mongodb+srv://anandabhilakshay:Sukh%402711@cluster0.xmgdo.mongodb.net/CRUD-API?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB:", error.message);
    });
