const mongoose = require("mongoose");

mongoose.set('debug', true);
const uri = "mongodb+srv://willmccudden:Q15JPtHgZUoQcQir@willwebsite.1favnqb.mongodb.net/?retryWrites=true&w=majority&appName=willwebsite";

async function connectToDb() {
    try {
        await mongoose.connect(uri, {
            dbName: 'willwebsite',
          });
        console.log("Connected to database");
      } catch (err) {
        console.log(err);
      }
}

module.exports = connectToDb