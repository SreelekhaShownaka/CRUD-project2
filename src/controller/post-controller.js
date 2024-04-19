const express = require("express");
const PostService = require("../service/post-service");
const router = express.Router();
const jwt = require("jsonwebtoken");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/create", upload.single("file"), (req, res) => {
  res.json(req.file);
  let bodyData = req.body;
  console.log("Data inside controller", bodyData);
  PostService.create(bodyData)
    .then((result) => {
      res.send({ data: result });
    })
    .catch((error) => {
      res.send({ data: error });
    });
});
router.get("/getPostByUserId/:userId", (req, res) => {
  let bodyData = req.params;
  console.log("Data inside controller", bodyData);
  PostService.getPostByUserId(bodyData)
    .then((result) => {
      console.log("result from service page", result);

      res.send({ message: "Posts by user id", result });
    })
    .catch((error) => {
      res.send({ data: error });
    });
});

// router.put("/updateUser/:email", (req, res) => {
//     let bodyData = req.body;
//     let paramsData=req.params;
//     console.log("Data inside controller", bodyData);
//     PostService.updateUser(paramsData,bodyData)
//       .then((result) => {
//           console.log('result from service page',result);

//         res.send({ message: "User Updated successfully", data: result });
//       })
//       .catch((error) => {
//         res.send({ data: error });
//       });
//   });

router.delete(
  "/deletePost/:userId",
  (req, res, next) => {
    let headerToken = req.headers.authorization;
    console.log("token found", headerToken);
    var decodedpayload = jwt.verify(headerToken, "asdf@sree");
    console.log("user after token found", decodedpayload);
    if (decodedpayload.role == "ADMIN") {
      next();
    } else
      return res.send({ message: "You are not authorised to use this API " });
  },
  (req, res) => {
    let paramsData = req.params;
    console.log("Data inside controller", paramsData);
    PostService.deletePost(paramsData)
      .then((result) => {
        console.log("result from service page", result);

        res.send({ message: "post deleted successfully", data: result });
      })
      .catch((error) => {
        res.send({ data: error });
      });
  }
);

module.exports = router;
