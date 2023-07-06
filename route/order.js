const express = require("express")
const { fetchOrder, createOrder} = require("../controller/order")
const { authentication } = require("../middleware/authentication")
const router = express.Router()




router.get("/order", authentication(process.env.JWT_SECRET_KEY), fetchOrder)
router.post("/order", authentication(process.env.JWT_SECRET_KEY), createOrder)


module.exports = router