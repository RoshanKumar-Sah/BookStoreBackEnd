const Book = require("../model/Book")


const fetchBook = async (req, res, next) => {
    let search_term = req.query.search_term || ""
    try {
        let book = await Book.find({ $or: [{ title: RegExp(search_term, "i") }, { author: RegExp(search_term, "i") }] });
        return res.send(book)
    } catch (err) {
        // console.log(err);
        next(err);
    }
}


const fetchSingleBook = async (req, res, next) => {
    try {
        let book = await Book.findById(req.params.id)
        // console.log(book);
        if (book) {
            return res.send(book)
        }
        return res.status(404).send({ msg: "resource not found" })
    } catch (err) {
        // console.log(err);
        next(err)
    }

}


const createBook = async (req, res, next) => {
    try {
        let book = await Book.create(req.body)
        res.send(book)
    } catch (err) {
        next(err)
    }
}


const updateBook = async (req, res, next) => {
    // console.log(req.body);
    try {
        // console.log(req.params.id);
        let book = await Book.findById(req.params.id)
        if (book) {
            let updated_book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
            return res.send(updated_book)
        }
        return res.status(404).send({ msg: "Resource not found" })
    } catch (err) {
        next(err)
    }
}


const deleteBook = async (req, res, next) => {
    try {
        let book = await Book.findById(req.params.id)
        if (book) {
            await Book.findByIdAndDelete(req.params.id)
            return res.status(204).end()
        }
        return res.status(404).send({ msg: "Resouce not found" })
    } catch (err) {
        next(err)
    }
}


module.exports = {
    fetchBook,
    fetchSingleBook,
    createBook,
    updateBook,
    deleteBook
}