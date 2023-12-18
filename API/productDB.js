import 'dotenv/config.js';
import connectDB from "./db/connect.js";
import Product from "./models/product.js";
import ProductJSON from "./products.json" assert { type: 'json'};

const start = async () => {
    try {
        await connectDB(process.env.DB_CONNECTION);
        await Product.create(ProductJSON);
        console.log("Data Successfully Created ✅");
    } catch (error) {
        console.log(error);
    }
}

start();