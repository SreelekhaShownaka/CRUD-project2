const UserDAO = require("../DAO/user-dao");
const jwt = require("jsonwebtoken");
const UserService = {
  registr: (payload) => {
    console.log("Data inside service", payload);

    return new Promise((resolve, reject) => {
      UserDAO.registr(payload)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  login: (payload) => {
    // console.log("Data inside service", payload);

    return new Promise(async (resolve, reject) => {
      let result = await UserDAO.isUserExist(payload.email);
      // console.log("User data", result);
      if (!result) return reject({ error: "user not registered with email" });
      if (payload.password != result.password) {
        return reject({ error: "Invalid password" });
      } else {
        const token = jwt.sign(
          { name: result.name, role: result.role },
          "asdf@sree"
        );
        console.log("token for loggedin user", token);
        result["token"] = token;
        return resolve(result);
      }
    });
  },

  updateUser: (condition, payload) => {
    console.log("Data inside service", payload);

    return new Promise((resolve, reject) => {
      UserDAO.updateUser(condition, payload)
        .then((result) => {
          console.log("result from database in service page", result);
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  deleteUser: (condition) => {
    console.log("Data inside service", condition);

    return new Promise((resolve, reject) => {
      UserDAO.deleteUser(condition)
        .then((result) => {
          console.log("result from database in service page", result);
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
module.exports = UserService;
