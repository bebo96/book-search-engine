const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/module-21-challenge-database',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
module.exports = mongoose.connection;
