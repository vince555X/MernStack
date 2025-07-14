import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: Number,
        required: true,
        default: 0.0
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    image:{
        type: String,
        required: true
    },
},
    {
        timestamps: true // Automatically adds createdAt and updatedAt fields
    }
);

const Product = mongoose.model('Product', productSchema);

export default Product;