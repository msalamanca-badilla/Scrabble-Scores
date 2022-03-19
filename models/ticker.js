const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tickerSchema = new Schema({
  ticker: [{ticker: String}],
  user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: true,
});

module.exports= mongoose.model('Ticker', tickerSchema); 
 