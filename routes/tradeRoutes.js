const express = require('express');
const { getTrades, createTrade, updateTrade, deleteTrade } = require('../controllers/tradeController');
const router = express.Router();

// Route to get all trades
router.get('/trades', getTrades);

// Route to create a new trade
router.post('/trades', createTrade);

// Route to update a trade by ID
router.put('/trades/:id', updateTrade);

// Route to delete a trade by ID
router.delete('/trades/:id', deleteTrade);

module.exports = router;
