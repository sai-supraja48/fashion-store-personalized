const Product = require("../models/Product");
const Order = require("../models/Order");
const User = require("../models/User");

exports.getDashboard = async (req, res) => {

try {

const totalUsers =
await User.countDocuments();

const totalProducts =
await Product.countDocuments();

const totalOrders =
await Order.countDocuments();

const deliveredOrders =
await Order.countDocuments({
status: "Delivered"
});

res.json({
totalUsers,
totalProducts,
totalOrders,
deliveredOrders
});

}

catch (error) {

res.status(500).json({
message: error.message
});

}

};

exports.deleteProduct = async (req, res) => {

try {

await Product.findByIdAndDelete(
req.params.productId
);

res.json({
message:
"Product Deleted Successfully"
});

}

catch (error) {

res.status(500).json({
message: error.message
});

}

};

exports.getAllProducts = async (req,res)=>{

try{

const products =
await Product.find();

res.json(products);

}

catch(error){

res.status(500).json({
message:error.message
});

}

};

exports.createProduct = async (req,res)=>{

try{

const product =
await Product.create(req.body);

res.status(201).json(product);

}

catch(error){

res.status(500).json({
message:error.message
});

}

};

exports.updateProduct = async (req,res)=>{

try{

const product =
await Product.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
);

res.json(product);

}

catch(error){

res.status(500).json({
message:error.message
});

}

};

exports.getAllProducts = async (req,res)=>{

try{

const products =
await Product.find();

res.json(products);

}

catch(error){

res.status(500).json({
message:error.message
});

}

};

exports.updateProduct =
async(req,res)=>{

try{

const product =
await Product.findByIdAndUpdate(

req.params.id,

req.body,

{
new:true
}

);

res.json(product);

}

catch(error){

res.status(500).json({
message:error.message
});

}

};

exports.getSingleProduct =
async(req,res)=>{

try{

const product =
await Product.findById(
req.params.id
);

res.json(product);

}

catch(error){

res.status(500).json({
message:error.message
});

}

};

exports.getAllOrders =
async(req,res)=>{

try{

const orders =
await Order.find()
.populate("user");

res.json(orders);

}

catch(error){

res.status(500).json({
message:error.message
});

}

};