const express = require("express");
const app = express();
const { loginUser, registerUser, seeUser} = require("../controllers/loginControllers");


app.post("/register", registerUser);
app.post("/login", loginUser);
app.get("/userName", seeUser);

module.exports = app;