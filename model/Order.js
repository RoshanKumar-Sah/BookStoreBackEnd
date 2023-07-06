const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OrderSchema = new Schema({
  cart:{
    type: Array,
    required: true
  },
  userId:{
    type: ObjectId,
    ref: "User",
    required: true,
  },
  shippingDetails:{
    type: String,
    required: true
  }
},
{
  timestamps: true
});

module.exports = mongoose.model("Order", OrderSchema)