import { useEffect, useState } from "react";

function Cart() {

  const [cartItems, setCartItems] =
    useState([]);

  // Load Cart Items
  useEffect(() => {

    const cart =
      JSON.parse(
        localStorage.getItem("cart")
      ) || [];

    setCartItems(cart);

  }, []);

  // Remove Item
  const removeItem = (id) => {

    const updatedCart =
      cartItems.filter(
        (item) => item._id !== id
      );

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  // Increase Quantity
  const increaseQuantity = (id) => {

    const updatedCart =
      cartItems.map((item) =>

        item._id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      );

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {

    const updatedCart =
      cartItems.map((item) =>

        item._id === id
          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      );

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  // Total Price
  const totalPrice =
    cartItems.reduce(
      (total, item) =>
        total +
        item.price * item.quantity,
      0
    );

  return (

    <div
      style={{
        padding: "30px",
      }}
    >

      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Cart Page
      </h1>

      {
        cartItems.length === 0 ? (

          <h2
            style={{
              textAlign: "center",
            }}
          >
            Cart is Empty
          </h2>

        ) : (

          <div>

            {
              cartItems.map((item) => (

                <div
                  key={item._id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent:
                      "space-between",
                    border: "1px solid #ddd",
                    padding: "20px",
                    marginBottom: "20px",
                    borderRadius: "10px",
                  }}
                >

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />

                    <div>

                      <h2>
                        {item.name}
                      </h2>

                      <p>
                        ₹ {item.price}
                      </p>

                      {/* Quantity Buttons */}

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          marginTop: "10px",
                        }}
                      >

                        <button
                          onClick={() =>
                            decreaseQuantity(
                              item._id
                            )
                          }
                          style={{
                            padding:
                              "5px 10px",
                            backgroundColor:
                              "black",
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          -
                        </button>

                        <span>
                          Quantity:
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(
                              item._id
                            )
                          }
                          style={{
                            padding:
                              "5px 10px",
                            backgroundColor:
                              "black",
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          +
                        </button>

                      </div>

                      {
                        item.size && (
                          <p>
                            Size:
                            {item.size}
                          </p>
                        )
                      }

                      {
                        item.color && (
                          <p>
                            Color:
                            {item.color}
                          </p>
                        )
                      }

                    </div>

                  </div>

                  <button
                    onClick={() =>
                      removeItem(item._id)
                    }
                    style={{
                      backgroundColor:
                        "red",
                      color: "white",
                      border: "none",
                      padding:
                        "10px 15px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >

                    Remove

                  </button>

                </div>
              ))
            }

            <h2
              style={{
                textAlign: "right",
                marginTop: "20px",
              }}
            >
              Total: ₹ {totalPrice}
            </h2>

          </div>
        )
      }

    </div>
  );
}

export default Cart;