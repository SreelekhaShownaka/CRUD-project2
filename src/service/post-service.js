const PostDAO = require("../DAO/post-dao");
const PostService = {
  create: (payload) => {
    console.log("Data inside service",payload);

    return new Promise((resolve, reject) => {
      PostDAO.create(payload)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  getPostByUserId: (payload) => {
    console.log("Data inside service",payload);

    return new Promise((resolve, reject) => {
      PostDAO.getPostByUserId(payload)
        .then((result) => {
            console.log('result from database in service page',result);
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

//   updateUser: (condition,payload) => {
//     console.log("Data inside service",payload);

//     return new Promise((resolve, reject) => {
//       PostDAO.updateUser(condition,payload)
//         .then((result) => {
//             console.log('result from database in service page',result);
//           resolve(result);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   },

deletePost: (condition) => {
    console.log("Data inside service",condition);

    return new Promise((resolve, reject) => {
      PostDAO.deletePost(condition)
        .then((result) => {
            console.log('result from database in service page',result);
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

};
module.exports = PostService;
