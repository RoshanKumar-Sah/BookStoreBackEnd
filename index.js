const express = require("express")
const app = express()
const cors = require('cors')



require("./config/database")
require('dotenv').config()


app.use(cors())
app.use(express.json())
const fileUpload = require("express-fileupload")


app.use(fileUpload());

const authRoute = require("./route/auth")
const bookRoute = require("./route/book")
const cartRoute = require("./route/cart")
const orderRoute = require("./route/order")

// console.log(process.env.JWT_SECRET_KEY);
// app.get("/api/", function(req,res){
// res.send("connected")
// })

app.use("/api", authRoute)
app.use("/api", bookRoute)
app.use("/api", cartRoute)
app.use("/api", orderRoute)



app.use((req, res) => {
    res.status(404).send({
        msg: "Resource not found"
    })
})

app.use((err, req, res, next) => {
    let status = 500
    let message = "Server Error"
    console.log(err.name);
    let errors = []
    if (err.name == "ValidationError") {
        status = 400
        message = "Bad Request"

        let arr = Object.entries(err.errors)
        // console.log(arr);

        let temp = []

        arr.forEach(el => {
            let obj = {}
            obj.params = el[0]
            obj.msg = el[1].message
            temp.push(obj)
        })

        console.log(temp);
        errors = temp
    }

    if (err.name == "CastError") {
        status = 400
        message = "Bad Request"
    }

    res.status(status).send({
        msg: message,
        errors: errors
    })
})


app.listen(5000, () => {
    console.log("Server Started");
})