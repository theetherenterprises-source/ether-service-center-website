const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['keyboard', 'mouse', 'screen', 'toner', 'battery', 'charger', 'ram', 'ssd'],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
    },
    compatibility: {
        type: String,
    },
    warranty: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);