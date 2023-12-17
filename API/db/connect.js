import mongoose from 'mongoose';
import 'dotenv/config.js';

const URI = process.env.DB_CONNECTION;

const connectDB = () => {
    return mongoose.connect(URI);
}

export default connectDB