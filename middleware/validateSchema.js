const Joi = require('joi');

const validateSchema = (schema) => {
    return (req, res, next) => {
      let {value, error} =   schema.validate(req.body, {abortEarly: false, stripUnknown: true})
      if(error){

       let errors =  error.details.map(er =>{
            return {
                params: er.context.key,
                msg: er.message
            }
        })
        return res.status(400).send({ msg: "Bad Request", errors })
      }else{
        next()
      }
    }
}

module.exports = validateSchema