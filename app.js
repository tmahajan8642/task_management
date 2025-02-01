require("dotenv").config();
const express = require("express");
const { sequelize } = require("./models");
const app = express();
const PORT = 8080;
const { roleRoutes } = require("./routes");

app.use(express.json());
// app.use(express.urlencoded({ extended: true }))


// database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connect successfully");
  } catch (error) {
    console.log("Unable to connect to the database", error);
  }
})();



//role routes
app.use("/api/v1/roles", roleRoutes);

app.listen(PORT, () => {
  console.log(`app listen on port ${PORT}`);
});

module.exports = app;
