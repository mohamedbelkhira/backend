const Trade = require('../models/Trade');

// Get all trades
exports.getTrades = async (req, res) => {
    try {
        const trades = await Trade.find();
        res.json(trades);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Create a new trade
exports.createTrade = async (req, res) => {
    try {
        const trade = new Trade(req.body);
        await trade.save();
        res.status(201).json(trade);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create trade' });
    }
};

// Update an existing trade
exports.updateTrade = async (req, res) => {
    try {
        const trade = await Trade.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!trade) {
            return res.status(404).json({ error: 'Trade not found' });
        }
        res.json(trade);
    } catch (err) {
        res.status(400).json({ error: 'Failed to update trade' });
    }
};

// Delete a trade
exports.deleteTrade = async (req, res) => {
    try {
        const trade = await Trade.findByIdAndDelete(req.params.id);
        if (!trade) {
            return res.status(404).json({ error: 'Trade not found' });
        }
        res.json({ message: 'Trade deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};
