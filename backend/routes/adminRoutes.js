const express =
require("express");

const router =
express.Router();

const {

getDashboard,
deleteProduct,
createProduct,
updateProduct,
getAllProducts,
getSingleProduct,
getAllOrders

}
=
require("../controllers/adminController");

router.get(
"/dashboard",
getDashboard
);

router.post(
"/product",
createProduct
);

router.delete(
"/product/:id",
deleteProduct
);

router.put(
"/product/:id",
updateProduct
);

router.get(
"/products",
getAllProducts
);

router.get(
"/product/:id",
getSingleProduct
);

router.get(
"/orders",
getAllOrders
);

module.exports =
router;