const mongoose = require('mongoose');
const uri = process.env.DATABASE || 'mongodb://localhost/chart-generator';

mongoose.connect(uri,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

module.exports = db;

