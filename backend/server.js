const app = require("./app")
const env =require("dotenv")

const connectDB = require("./config/database")

// Handling uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1)
})
//config
env.config({path:"backend/config/config.env"})

//connect database
connectDB()

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server start at http://localhost:${process.env.PORT}`);
})


// Unhandled promise rejection
process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled Promise Rejection`);
    server.close(()=>{
        process.exit(1)
    })
})