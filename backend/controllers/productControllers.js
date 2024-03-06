//recheck\
const catchAsyncError = require("../middleware/catchAsyncError")
const Product = require("../models/productModel")
const ErrorHandler = require("../utils/errorHandler")
const apiFeatures  = require("../utils/apiFeatures")

//Create Prouct -- admin
exports.createProduct = catchAsyncError(async(req,res,next)=>{
    const product= await Product.create(req.body)
    res.status(201).json({
        success: true,
        product
    })
})

//Get all products
exports.getAllProducts =catchAsyncError(async (req,res)=>{
    const products = await Product.find()
    res.status(200).json({
        success: true,
        products
    })
})

// Get Product details
exports.getProductDetails= catchAsyncError(async(req,res,next)=>{
    const product = await Product.findById(req.params._id)
    if(!product){
        return next(new ErrorHandler("Product not found,404"))
    }
    res.status(200).json({
        success:true,
        product
    })
})
// update products

exports.updateProduct = catchAsyncError(async(req,res,next)=>{
    let product =await Product.findById(req.params._id)
    if(!product){
        return next(new ErrorHandler("Product not found,404"))
    }
    product =await Product.findByIdAndUpdate(req.params._id,req.body,{new:true,runValidators:true,useFindAndMoify:false})
    res.status(200).json({
        success:true,
        product
    })
})

exports.deleteProduct = catchAsyncError(async(req,res,next)=>{
    const product = await Product.findById(req.params._id)
    if(!product){
        return next(new ErrorHandler("Product not found,404"))
    }
    await product.deleteOne()
    res.status(200).json({
        success:true,
        message:"Product deleted successfully"
    })
})