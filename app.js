// Importing required packages
import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/products.js';
import connectToDatabase from './config/mongoose.js';

// Initializing express
const app = express();

// Using body parser to parse over the request body
app.use(bodyParser.json());

// Using routes
app.use('/products', productRoutes);

// Starting the server
app.listen(3000, () => {
    console.log("Server is Live at port 3000");
    connectToDatabase();
});
