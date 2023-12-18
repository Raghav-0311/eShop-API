import Product from "../models/product.js";

const getAllProducts = async (req, res) => {
    const { brand, name, category, featured, sort, _id } = req.query;
    const queryObject = {};

    if (_id) {
        queryObject._id = _id;
    }

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

    let apiData = Product.find(queryObject);

    if (sort) {
        let sortFix = sort.replace(",", " ");
        apiData = apiData.sort(sortFix);
    }

    const myData = await apiData;
    res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "This is getAllProductsTesting" });
};

export { getAllProducts, getAllProductsTesting };