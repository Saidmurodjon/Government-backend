
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const appRouter = require("./router");
const cors = require("cors");
const { MONGODB, TOKEN, BaseURL, PORT } = require("./config");
app.use(express.json());
app.use(cors());
// console.log(PORT);
const connectionParams = {
  useNewUrlParser: true,

  useUnifiedTopology: true,
};
mongoose
  .connect(MONGODB, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

app.use("/", appRouter);


app.listen(PORT, () => {
  console.log(`${PORT}'s port is working`);
});
