const mongoose = require("mongoose");

const orderSchema =
new mongoose.Schema({

user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
},

items:[
{
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },

    quantity:Number,

    size:String,

    color:String,

    price:Number
}
],

shippingAddress:{
    street:String,
    city:String,
    state:String,
    pincode:String
},

subtotal:Number,

discount:{
    type:Number,
    default:0
},

totalPrice:Number,

status:{
    type:String,
    enum:[
        "Pending",
        "Processing",
        "Shipped",
        "Delivered"
    ],
    default:"Pending"
}

},{timestamps:true});

module.exports =
mongoose.model("Order",orderSchema);