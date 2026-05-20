const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const connectDB = require("./config/db");

const authRoutes =
require("./routes/authRoutes");

const productRoutes =
require("./routes/productRoutes");

const cartRoutes =
require("./routes/cartRoutes");

const recommendationRoutes =
require("./routes/recommendationRoutes");

const orderRoutes =
require("./routes/orderRoutes");

const adminRoutes =
require("./routes/adminRoutes");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(
"/api/auth",
authRoutes
);

app.use(
"/api/products",
productRoutes
);

app.use(
"/api/cart",
cartRoutes
);

app.use(
"/api/recommendations",
recommendationRoutes
);

app.use(
"/api/orders",
orderRoutes
);

app.use(
"/api/admin",
adminRoutes
);

app.get(
"/",
(req,res)=>{

res.send(
"Fashion Store API Running"
);

}
);

const PORT =
process.env.PORT || 5000;

app.listen(
PORT,
()=>{

console.log(
`Server running on port ${PORT}`
);

}
);