const PostModel = require("../model/post-model");
const PostDAO = {
  create: (payload) => {
    console.log("Data inside DAO", payload);

    return new PostModel({
      title: payload.title,
      description: payload.description,
      image: payload.image,
      userId: payload.userId,
    }).save();
  },
  getPostByUserId: (payload) => {
    console.log("Data inside DAO", payload);

    return PostModel.find(payload).populate({path:'userId',select:{name:1,_id:0}})
  },

//   updateUser: (condition,payload) => {
//     console.log("condition for update DAO",condition,'data to be updated as', payload);

//     return UserModel.updateOne(condition,{$set:payload});

    
//   },

deletePost: (condition) => {
    console.log("condition for update DAO",condition)
    return PostModel.deleteOne(condition);

    
  },


};
module.exports = PostDAO;

