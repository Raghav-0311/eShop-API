import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    colors: {
        type: [String],
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean,
        required: true,
    },
    shipping: {
        type: Boolean,
        required: true,
    },
    features: {
        type: [String],
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    specifications: {
        processor: String,
        cpu: String,
        gpu: String,
        ram: String,
        storage: String,
        display: String,
    },
    productImages: {
        pi_1: String,
        pi_2: String,
        pi_3: String,
        pi_4: String,
    },
});

const Product = mongoose.model('Product', productSchema);

export default Product