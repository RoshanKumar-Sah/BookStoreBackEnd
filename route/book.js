const express = require("express")
const validateSchema = require("../middleware/validateSchema")
const { BookSchema } = require("../schema/bookSchema")
const { fetchBook, fetchSingleBook, createBook, updateBook, deleteBook} = require("../controller/book")
const { authentication } = require("../middleware/authentication")
const router = express.Router()




router.get("/book", fetchBook)
router.get("/book/:id", fetchSingleBook)
router.post("/book", validateSchema(BookSchema), createBook)
router.put("/book/:id", validateSchema(BookSchema), updateBook)
router.delete("/book/:id", deleteBook)


module.exports = router