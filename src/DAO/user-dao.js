const UserModel = require("../model/user-model");
const UserDAO = {
  registr: (payload) => {
    console.log("Data inside DAO", payload);

    return new UserModel({
      name: payload.name,
      email: payload.email,
      age: payload.age,
      password: payload.password,
      role: payload.role,
    }).save();
  },
  login: (payload) => {
    console.log("Data inside DAO", payload);

    return UserModel.findOne(payload);
  },

  isUserExist: (email) => {
    console.log("Data inside DAO", email);

    return UserModel.findOne({email: email });
  },

  updateUser: (condition, payload) => {
    console.log(
      "condition for update DAO",
      condition,
      "data to be updated as",
      payload
    );

    return UserModel.updateOne(condition, { $set: payload });
  },

  deleteUser: (condition) => {
    console.log("condition for update DAO", condition);
    return UserModel.deleteOne(condition);
  },
};
module.exports = UserDAO;
