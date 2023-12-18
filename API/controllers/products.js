import Product from "../models/product.js";

const getAllProducts = async (req, res) => {
    const myData = await Product.find({});
    res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "This is getAllProductsTesting" });
};

export { getAllProducts, getAllProductsTesting };