const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/module-21-challenge-database',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

// To run locally, uncomment the below and comment the above
//
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });


module.exports = mongoose.connection;
