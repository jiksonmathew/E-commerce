const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"please"]
    },
    price:{
        type:Number,
        required:[true,"please"],
        maxLength:[10,"price not exed"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    category:{
        type:String,
        required:[true,"please"]
    },
    stock:{
        type:Number,
        required:[true,"Please"],
        maxLength:[4,"Stock "],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:{
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
        }

    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})


module.exports= mongoose.model("Product",productSchema)