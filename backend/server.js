const app = require("./app")
const env =require("dotenv")
const connectDB = require("./config/database")
//config
env.config({path:"backend/config/config.env"})

//connect database
connectDB()

app.listen(process.env.PORT,()=>{
    console.log(`Server start at ${process.env.PORT}`);
})