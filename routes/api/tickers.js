const express = require('express');
const router = express.Router();
const tickerCtrl = require('../../controllers/tickers');

router.get('/tickers', tickerCtrl.getTicker)
router.get('/watchlist', tickerCtrl.index )
router.post('/watchlistCreate', tickerCtrl.addToWatchlist)
router.delete('/watchlist/delete/:id', tickerCtrl.removeFromWatchlist)

module.exports = router;