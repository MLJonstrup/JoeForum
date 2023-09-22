const express = require("express");
const cors = require("cors");
const path = require("path");


const app = express();

//const customerRoute = require("./routes/customer");

app.use(cors());
app.use(express.json());

//app.use("/customer", customerRoute);

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/pages/home.html"));
});

app.listen(3000, () => {
  console.log("Server open on port 3000");
});
