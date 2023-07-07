const express = require("express")
const { signup, login, getUser } = require("../controller/auth")
const validateSchema = require("../middleware/validateSchema")
const { SignupSchema, LoginSchema } = require("../schema/authSchema")
const { authentication } = require("../middleware/authentication")
const router = express.Router()




router.post("/signup", validateSchema(SignupSchema), signup)
router.post("/login", validateSchema(LoginSchema), login)
router.get("/user", authentication(process.env.JWT_SECRET_KEY), getUser)

module.exports = router