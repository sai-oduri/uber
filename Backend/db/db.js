const mongoose = require('mongoose');

function connectToDb() {
  mongoose.connect(process.env.MONGO)
    .then(() => {
      console.log('Connected to DB')
    }).catch(e => console.log(e));
}

module.exports = connectToDb;