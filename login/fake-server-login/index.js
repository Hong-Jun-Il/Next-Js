const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { onLogin, signUp } = require("./controller");

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

app.post("/api/signup", signUp);
app.post("/api/login", onLogin);

app.listen(process.env.PORT, () => {
  console.log(`server is on ${process.env.PORT}`);
});
