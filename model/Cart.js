const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CartSchema = new Schema({
  bookId:{
    type: ObjectId,
    ref: "Book",
    required: true
  },
  userId:{
    type: ObjectId,
    ref: "User",
    required: true,
  },
  quantity:{
    type: Number,
    min:1,
    required: true
  }
});

module.exports = mongoose.model("Cart", CartSchema)