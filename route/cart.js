const express = require("express")
const { fetchCart, createCart, updateCart, deleteCart} = require("../controller/cart")
const { authentication } = require("../middleware/authentication")
const router = express.Router()




router.get("/cart", authentication(process.env.JWT_SECRET_KEY), fetchCart)
router.post("/cart/:id", authentication(process.env.JWT_SECRET_KEY), createCart)
router.put("/cart/:id", authentication(process.env.JWT_SECRET_KEY), updateCart)
router.delete("/cart/:id", authentication(process.env.JWT_SECRET_KEY), deleteCart)


module.exports = router