const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema({

    size:{
        type:String,
        enum:["XS","S","M","L","XL","XXL"]
    },

    colorName:String,

    colorHex:String,

    additionalPrice:{
        type:Number,
        default:0
    },

    stock:{
        type:Number,
        default:10
    }

});

const productSchema =
new mongoose.Schema({

title:{
    type:String,
    required:true
},

description:{
    type:String,
    required:true
},

basePrice:{
    type:Number,
    required:true
},

category:{
    type:String,
    enum:[
        "Men",
        "Women",
        "Footwear",
        "Accessories"
    ]
},

images:[String],

tags:[String],

variants:[variantSchema]

},{timestamps:true});

module.exports =
mongoose.model("Product",productSchema);