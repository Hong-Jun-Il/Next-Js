const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { getPosts, getSchools } = require("./controller");

const app = express();
dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/posts", getPosts);
app.get("/schools", getSchools);

app.listen(process.env.PORT, () => {
  console.log(`server is on ${process.env.PORT}`);
});
