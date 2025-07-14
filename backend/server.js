import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
// import Product  from './models/product.model.js'; // Assuming you have a product model
// import mongoose from 'mongoose';
import productRoute from './route/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(express.json()); // Middleware to parse JSON bodies
app.use("/api/products", productRoute); // Import product routes


app.listen(PORT, () => {
    connectDB();
    console.log('Server is running on port 5000');
});