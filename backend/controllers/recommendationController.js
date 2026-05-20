const User =
require("../models/User");

const Product =
require("../models/Product");

exports.getRecommendations =
async(req,res)=>{

try{

const user =
await User.findById(
req.params.userId
);

const products =
await Product.find({

category:{
$in:
user.recentlyViewedCategories
}

}).limit(6);

res.json(products);

}
catch(error){

res.status(500).json({
message:error.message
});

}
};