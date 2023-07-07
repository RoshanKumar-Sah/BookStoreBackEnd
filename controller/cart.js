const Cart = require("../model/Cart")
const mongoose = require("mongoose")

const fetchCart = async (req, res, next) => {

    try {
        let userId = new mongoose.Types.ObjectId(req.user._id)
        // let cart = await Cart.find({ userId: req.user._id });

        let cart = await Cart.aggregate([
            { $match: { userId: userId } },
            {
                $lookup: {
                    from: "books",
                    localField: "bookId",
                    foreignField: "_id",
                    as: "bookDetails"
                }
            },
            {
                $unwind: "$bookDetails"
            },
            {
                $project: {
                    _id: "$_id",
                    userId: "$userId",
                    quantity: "$quantity",
                    bookTitle: "$bookDetails.title",
                    bookId: "$bookDetails._id",
                    bookAuthor: "$bookDetails.author",
                    bookStatus: "$bookDetails.status"
                }
            }
        ])

        return res.send(cart)
    } catch (err) {
        // console.log(err);
        next(err);
    }
}

const createCart = async (req, res, next) => {

    try {
        let bookId = req.params.id
        let userId = req.user._id
        let pre = await Cart.find({ $and: [{ bookId: bookId }, { userId: userId }] });
        // console.log(pre);
        
        if (pre?.length == 0) {
            let cart = await Cart.create({ bookId, userId, quantity: 1 });
            return res.send(cart)
        }
        return res.status(204).end()
    } catch (err) {
        // console.log(err);
        next(err);
    }
}

const updateCart = async (req, res, next) => {
// console.log(req.params.id);
// console.log(req.body);
    try {
        let pre = await Cart.findById(req.params.id);
        if (pre) {
            let cart = await Cart.findByIdAndUpdate(req.params.id, { ...pre[0], quantity: req.body.quantity }, { new: true });
            return res.send(cart)
        }
        return res.status(204).end()
    } catch (err) {
        console.log(err);
        next(err);
    }
}

const deleteCart = async (req, res, next) => {
    try {
        let pre = await Cart.findById(req.params.id);
        if (pre) {
            await Cart.findByIdAndDelete(req.params.id);
            return res.status(204).end()
        }
        return res.status(404).send({ msg: "resource not found" })
    } catch (err) {
        // console.log(err);
        next(err);
    }

}



module.exports = {
    fetchCart,
    createCart,
    updateCart,
    deleteCart
}