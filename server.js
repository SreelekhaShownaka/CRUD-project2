const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

require("./database");

app.use("/userss", require("./src/controller/user-controller"));
app.use("/posts", require("./src/controller/post-controller"));

app.listen(3030, () => {
  console.log("Server started on port 3000");
});
