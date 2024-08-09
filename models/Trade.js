const mongoose = require('mongoose');

const TradeSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    pair: {
        type: String,
        required: true,
    },
    strategy: {
        type: String,
        required: true,
    },
    marketStructure: {
        type: String,
        required: true,
        enum: ['ranging', 'uptrend', 'downtrend'], // Only allow these values
    },
    action: {
        type: String,
        required: true,
        enum: ['buy', 'sell'], // Only allow these values
    },
    rr: {
        type: String,
        required: true,
    },
    exit: {
        type: String,
        required: true,
        enum: ['TP', 'SL', 'Manual'], // Only allow these values
    },
    pips: {
        type: Number,
        required: true,
    },
    tradeLink: {
        type: String,
        required: false, // Optional field
    },
    result: {
        type: String,
        required: true,
        enum: ['winning', 'losing'], // Only allow these values
    }
}, { timestamps: true });

module.exports = mongoose.model('Trade', TradeSchema);
