
const Order = require("../model/Order")

const fetchOrder = async (req, res, next) => {
    try {
        let order = await Order.find({ userId: req.user._id })
        res.send(order)
    } catch (err) {
        // console.log(err);
        next(err)
    }

}

const createOrder = async (req, res, next) => {


    try {
        let order = await Order.create({ ...req.body, userId: req.user._id })
        return res.send(order)

    } catch (err) {
        // console.log(err);
        next(err)
    }

}


module.exports = {
    fetchOrder,
    createOrder
}