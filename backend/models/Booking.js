const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    serviceType: { type: String, enum: ['onsite', 'oncall', 'remote'], required: true },
    serviceCategory: { type: String, enum: ['repair', 'parts_replacement', 'data_recovery', 'toner_refilling'], required: true },
    deviceType: { type: String, enum: ['laptop', 'desktop', 'printer'], required: true },
    description: { type: String, required: true },
    preferredDate: { type: Date, required: true },
    preferredTime: { type: String, required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'completed', 'cancelled'], default: 'pending' },
    estimatedCost: { type: Number },
    actualCost: { type: Number },
    notes: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', BookingSchema);