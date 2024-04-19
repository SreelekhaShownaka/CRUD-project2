const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/new-db", () => {
  console.log("connected to database-new-db");
});
module.exports = mongoose;
