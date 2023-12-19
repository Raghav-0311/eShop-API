import express from "express";
import product_routes from "./routes/products.js";
import 'dotenv/config.js';
import connectDB from "./db/connect.js";
import cors from 'cors';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5002;

app.get('/', (req, res) => {
    return res.status(200).send('Hi, I am live...');
});

app.use("/api/products", product_routes);

// app.use(
//     cors({
//         origin: 'http://localhost:5173',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );
app.use(cors());

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is live on ${PORT} ✅`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();

export default app;