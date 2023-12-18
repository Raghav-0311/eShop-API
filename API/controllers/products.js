import Product from "../models/product.js";

const getAllProducts = async (req, res) => {
    const { brand, name, category, featured, sort, _id, select } = req.query;
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
        // let sortFix = sort.replace(",", " ");
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }

    if (select) {
        // let selectFix = select.replace(",", " ");
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    // PAGINATION
    // Getting query parameters && change it to number
    let page = Number(req.query.page) || 1; // default page is 1st page
    let limit = Number(req.query.limit) || 27 // default limit is 27 documents

    // Pagination Formula
    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    const Products = await apiData;
    res.status(200).json({ count: Products.length, limit: limit, page: page, Products });
};

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "This is getAllProductsTesting" });
};

export { getAllProducts, getAllProductsTesting };