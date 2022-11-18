const express = require("express");
const router = express.Router();
const { register, updatePassword } = require("../controllers/authController");

//Add your routes here
router.post("/signup", register);
router.post("/updatePassword", updatePassword);

module.exports = router;
