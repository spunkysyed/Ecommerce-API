import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Connecting mongoose to its default server and ecommerceDB
const connectToDatabase=()=>{
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to Database using Mongodb")
}

export default connectToDatabase;

