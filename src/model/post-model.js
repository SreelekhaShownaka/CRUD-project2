const mongoose = require("../../database");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {     
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId ,
    ref:'userss',
    required: true,
  },
  image: {
    type: String,
    required: true,
  },

  postedOn: {
    type: Date,
    default:Date.now()
  }
});
module.exports = mongoose.model("posts", PostSchema);
