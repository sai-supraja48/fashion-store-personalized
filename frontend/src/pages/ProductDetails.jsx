import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import API from "../services/api";

import Recommendations from "../components/Recommendations";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] =
    useState(null);

  const [selectedSize, setSelectedSize] =
    useState("");

  const [selectedColor, setSelectedColor] =
    useState("Black");

  useEffect(() => {

    fetchProduct();

  }, []);

  // Fetch Product
  const fetchProduct = async () => {

    try {

      const response =
        await API.get(`/products/${id}`);

      setProduct(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  // Add To Cart
  const addToCart = () => {

    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct =
      cart.find(
        (item) => item._id === product._id
      );

    if (existingProduct) {

      existingProduct.quantity += 1;

    } else {

      const newProduct = {

        _id: product._id,

        name: product.title,

        price: product.basePrice,

        image: product.image,

        category: product.category,

        quantity: 1,

        size: selectedSize,

        color: selectedColor,

      };

      cart.push(newProduct);
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    console.log(cart);

    alert("Product Added To Cart");
  };

  // Add To Wishlist
  const addToWishlist = () => {

    const wishlist =
      JSON.parse(
        localStorage.getItem("wishlist")
      ) || [];

    wishlist.push(product);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

    alert("Added To Wishlist");
  };

  if (!product) {

    return <h1>Loading...</h1>;
  }

  return (

    <div
      style={{
        padding: "30px",
        textAlign: "center",
      }}
    >

      {/* Product Image */}

      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "300px",
          height: "350px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      {/* Product Details */}

      <h1>{product.title}</h1>

      <p>{product.description}</p>

      <h2>₹ {product.basePrice}</h2>

      <h3>{product.category}</h3>

      {/* Women Sizes */}

      {
        product.category === "Women" && (

          <div
            style={{
              marginTop: "20px",
            }}
          >

            <select
              value={selectedSize}
              onChange={(e) =>
                setSelectedSize(
                  e.target.value
                )
              }
              style={{
                padding: "10px",
                marginRight: "10px",
              }}
            >

              <option value="">
                Select Size
              </option>

              <option value="S">
                S
              </option>

              <option value="M">
                M
              </option>

              <option value="L">
                L
              </option>

              <option value="XL">
                XL
              </option>

            </select>

            <select
              value={selectedColor}
              onChange={(e) =>
                setSelectedColor(
                  e.target.value
                )
              }
              style={{
                padding: "10px",
              }}
            >

              <option value="Black">
                Black
              </option>

              <option value="Red">
                Red
              </option>

              <option value="Blue">
                Blue
              </option>

              <option value="White">
                White
              </option>

            </select>

          </div>
        )
      }

      {/* Footwear Sizes */}

      {
        product.category === "Footwear" && (

          <div
            style={{
              marginTop: "20px",
            }}
          >

            <select
              value={selectedSize}
              onChange={(e) =>
                setSelectedSize(
                  e.target.value
                )
              }
              style={{
                padding: "10px",
              }}
            >

              <option value="">
                Select Size
              </option>

              <option value="6">
                6
              </option>

              <option value="7">
                7
              </option>

              <option value="8">
                8
              </option>

              <option value="9">
                9
              </option>

              <option value="10">
                10
              </option>

            </select>

          </div>
        )
      }

      {/* Buttons */}

      <div
        style={{
          marginTop: "20px",
        }}
      >

        <button
          onClick={addToCart}
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >

          Add To Cart

        </button>

        <button
          onClick={addToWishlist}
          style={{
            backgroundColor: "purple",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >

          Add To Wishlist

        </button>

      </div>

      {/* Recommendations */}

      <Recommendations
        category={product.category}
      />

    </div>
  );
}

export default ProductDetails;