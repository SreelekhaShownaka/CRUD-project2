const mongoose = require("../../database");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["ADMIN", "CUSTOMER"],
    default: "CUSTOMER",
  },
  token: {
    type: String,
  },
});
module.exports = mongoose.model("userss", UserSchema);
