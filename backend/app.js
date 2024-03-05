const express= require("express")
const app= express()
const errorMiddleware = require("./middleware/error")
const cookiParser =require("cookie-parser")

app.use(express.json())
app.use(cookiParser())
//route import

const product = require("./routes/productRoute")
const user= require("./routes/userRoute")

app.use("/api/v1",product)
app.use("/api/v1",user)
//Middleare for errors
app.use(errorMiddleware)

module.exports = app