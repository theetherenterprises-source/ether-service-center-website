const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { 
        type: String, 
        enum: ['onsite', 'oncall', 'remote', 'parts_replacement', 'data_recovery', 'toner_refilling'], 
        required: true
    },
    price: { type: Number, required: true },
    estimatedTime: { type: String, required: true },
    icon: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Service', ServiceSchema);