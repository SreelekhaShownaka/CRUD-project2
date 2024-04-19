const express = require("express");
const UserService = require("../service/user-sevice");
const router = express.Router();

router.post("/registr", (req, res) => {
  let bodyData = req.body;
  console.log("Data inside controller", bodyData);
  UserService.registr(bodyData)
    .then((result) => {
      res.send({ data: "User registered successfully", result });
    })
    .catch((error) => {
      res.send({ data: error });
    });
});
router.post("/login", (req, res) => {
  let bodyData = req.body;
  console.log("Data inside controller", bodyData);
  UserService.login(bodyData)
    .then((result) => {
      console.log("result from service page", result);

      res.send({ message: "User loggedin successfully", data: result });
    })
    .catch((error) => {
      res.send({ data: error });
    });
});

router.put("/updateUser/:email", (req, res) => {
  let bodyData = req.body;
  let paramsData = req.params;
  console.log("Data inside controller", bodyData);
  UserService.updateUser(paramsData, bodyData)
    .then((result) => {
      console.log("result from service page", result);

      res.send({ message: "User Updated successfully", data: result });
    })
    .catch((error) => {
      res.send({ data: error });
    });
});

router.delete("/deleteUser/:email", (req, res) => {
  let paramsData = req.params;
  console.log("Data inside controller", paramsData);
  UserService.deleteUser(paramsData)
    .then((result) => {
      console.log("result from service page", result);

      res.send({ message: "User deleted successfully", data: result });
    })
    .catch((error) => {
      res.send({ data: error });
    });
});

module.exports = router;
