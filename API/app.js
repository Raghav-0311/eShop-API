import express from "express";
import product_routes from "./routes/products.js";

const app = express();

const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
    return res.status(200).send('Hi, I am live...');
});

app.use("/api/products", product_routes);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is live on ${PORT} ✅`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();