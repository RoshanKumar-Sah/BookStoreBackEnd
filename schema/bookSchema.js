const Joi = require('joi');

const BookSchema = Joi.object({
    title: Joi.string()
        .max(100)
        .required(),
    author: Joi.string()
        .max(100)
        .required(),
    isbn: Joi.string()
        .required(),
    status: Joi.string()
        .lowercase()
        .valid("available", "out of stock")
        .required(),
    price: Joi.number()
        .required()
})

module.exports = {
    BookSchema
}