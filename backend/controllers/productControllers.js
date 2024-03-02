const { addListener } = require("process")
const Product = require("../models/productModel")

//Create Prouct -- admin
exports.createProduct = async(req,res,next)=>{
    const product= await Product.create(req.body)
    res.status(201).json({
        success: true,
        products
    })
}


//Get all products
exports.getAllProducts =async (req,res)=>{
    const products = await Product.find()
    res.status(200).json({
        success: true,
        products
    })
}

// Get Product details
exports.getProductDetails= async(req,res,next)=>{
    const product = await Product.findById(req.params._id)
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }
    res.status(200).json({
        success:true,
        products
    })
}

// update products

exports.updateProduct = async(req,res,next)=>{
    let product =await Product.findById(req.params._id)
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }
    product =await Product.findByIdAndUpdate(req.params._id,req.body,{new:true,runValidators:true,useFindAndMoify:false})
    res.status(200).json({
        success:true,
        products
    })
}

exports.deleteProduct = async(req,res,next)=>{
    const product = await Product.findOne(req.params._id)
    if (!product){
        return res.status(500).json({
        success:false,
        message:"Prodct not found"
        })
    }
    await product.deleteOne()
    res.status(200).json({
        success:true,
        message:"Product deleted successfully"
    })
}