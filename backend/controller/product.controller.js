import Product from '../models/product.model.js'; // Import the Product model

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find(); // Fetch all products from the database
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: 'Server error' });
    }
};
// Endpoint to get all products

export const createProduct = async (req, res) => {
    const product = req.body;
    // Here you would typically save the product to the database

    if (!product.name || !product.price || !product.description || !product.image) {
        return res.status(400).json({ message: 'Product name and price are required' });
    } 
    // must have name, price, description, and image
    // Assuming Product is imported from the models directory
    
    const newProduct = new Product(product); // Create a new product instance

    try { // Save the product to the database
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    } catch (error) { // Handle any errors that occur during the save operation
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: 'Server error' });
    }
};
// Endpoint to create a new product

export const updateProduct = async (req, res) => {
    const { id } = req.params; // Extract the product ID from the request parameters
    const productUpdates = req.body; // Get the updated product data from the request body

    try {
        const product = await Product.findByIdAndUpdate(id, productUpdates, {
            new: true}); // Find the product by ID and update it, returning the updated document

        res.status(200).json({ success: true, data: product }); // Respond with the updated product

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return res.status(500).json({ message: 'Server error' });
    }
};
// Endpoint to update a product by ID

export const deleteProduct = async (req, res) => {
    const { id } = req.params; // Extract the product ID from the request parameters

    try {
        const product = await Product.findByIdAndDelete(id); // Find and delete the product by ID
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: 'Server error' });
    }
};
// Endpoint to delete a product by ID