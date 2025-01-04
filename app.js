require("dotenv").config();
const express = require("express");
const { sequelize } = require("./models");
const app = express();
const PORT = 8080;



(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connect successfully");
  } catch (error) {
    console.log("Unable to connect to the database", error);
  }
})();

app.get("/user", (req, res) => {
  res.send("Hy Users");
});

app.listen(PORT, () => {
  console.log(`app listen on port ${PORT}`);
});
