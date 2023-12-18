import Product from "../models/product.js";

const getAllProducts = async (req, res) => {
    const { brand, name, category, featured } = req.query;
    const queryObject = {};

    if (brand) {
        queryObject.brand = { $regex: brand, $options : "i" };
    }

    if (name) {
        queryObject.name = { $regex : name, $options : "i" };
    }

    if (category) {
        queryObject.category = { $regex : category, $options : "i" };
    }

    if (featured) {
        queryObject.featured = featured;
    }

    const myData = await Product.find(queryObject);
    res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "This is getAllProductsTesting" });
};

export { getAllProducts, getAllProductsTesting };