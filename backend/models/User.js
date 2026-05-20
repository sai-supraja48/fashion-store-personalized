const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    type:{
        type:String,
        enum:["Home","Work","Other"],
        default:"Home"
    },
    street:String,
    city:String,
    state:String,
    pincode:String
});

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },

    addresses:[addressSchema],

    recentlyViewedCategories:[String],

    purchasedProducts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        }
    ]

},{timestamps:true});

module.exports =
mongoose.model("User",userSchema);