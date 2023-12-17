import mongoose from 'mongoose';
import 'dotenv/config.js';

const URI = process.env.DB_CONNECTION;

const connectDB = () => {
    return mongoose
        .connect(URI)
        .then(() => {
            console.log("Successfully Connected to Database ✅");
        });
}

export default connectDB