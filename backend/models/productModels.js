const mopngoose = require("mongoose");

const productDatabase= mongoose.Schema({

    name:{
        required:[true, "Please enter product name"],
        trim:true
    },

    decsription:{
        type:String,
        required:[true,"Please enter product Description"]
    },
    price:{
        type:Number,
        required:[true,"Please enter product price"],
        maxlength:[8,"Price cannot exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[{
        publice_id:{
            type:String,
            required : true
        },
        url:{
            type:String,
            required : true
        }
     }
    ],
    category:{
        type:String,
        required:[true,"Please enter Product Category"],
    },
    Stock:{
        type:Number,
        required:[true,"Please enter Product Stock"],
        maxlength:[4,"Stock connot exceed 4 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
       default:0
     },
     reviews:[{
        name:{
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            required:true,
        },
        comment:{
            type:String,
            required:true
        }
     }
     ],
     CreatedAt:{
        type:Date,
    default:Date.now
     }
    
})
module.exports = mongoose.model("Product", productSchema);
