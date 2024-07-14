import mongoose from 'mongoose';

// Creating the Product Schema
const productSchema = new mongoose.Schema({
    _id: { type: Number },
    name: String,
    quantity: Number
}, {
    versionKey: false
});

// Creating a Model for the Product Schema
const Product = mongoose.model('Product', productSchema);

export default Product;
