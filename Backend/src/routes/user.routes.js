const express = require("express")
const { SIGNUP, LOGIN, USERNAME, GETALLUSER, UPDATEPROFILE } = require("../controllers/user.controllers")
const authMiddleware = require("../middlewares/auth.middleware")
const app = express.Router()
app.post("/signup", SIGNUP)
app.post("/login", LOGIN)
app.post("/username", USERNAME)
app.get("/alluser", GETALLUSER)
app.post("/profile/:userid", authMiddleware, UPDATEPROFILE)


module.exports = app 