export const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: "This is getAllProducts" });
};

export const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "This is getAllProductsTesting" });
};

// export { getAllProducts, getAllProductsTesting };