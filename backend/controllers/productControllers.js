const Product = require("../models/productModel")


//Create Prouct

exports.getAllProducts = (req,res)=>{
    res.status(200).json({message: "routes ok"})
}