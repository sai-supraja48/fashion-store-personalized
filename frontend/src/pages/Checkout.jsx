import { useState } from "react";
import jsPDF from "jspdf";
import API from "../services/api";

function Checkout() {

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [coupon, setCoupon] = useState("");

  // Cart Items from localStorage
  const cartItems =
    JSON.parse(localStorage.getItem("cart")) || [];

  // Calculate Total
  const initialTotal = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  const [total, setTotal] =
    useState(initialTotal);

  // Apply Coupon
  const applyCoupon = () => {

    if (coupon === "SAVE10") {

      setTotal(total - 500);

      alert("Coupon Applied");

    } else {

      alert("Invalid Coupon");
    }
  };

  // Place Order
  const placeOrder = async () => {

    try {

      const user =
        JSON.parse(localStorage.getItem("userInfo"));

      const order = {
        user: user?._id,
        items: cartItems,
        totalAmount: total,
        address,
      };

      // Save Order Backend
      await API.post("/orders", order);

      // Save Local Orders
      const existingOrders =
        JSON.parse(localStorage.getItem("orders")) || [];

      existingOrders.push(order);

      localStorage.setItem(
        "orders",
        JSON.stringify(existingOrders)
      );

      // Clear Cart
      localStorage.removeItem("cart");

      alert("Order Placed Successfully");

    } catch (error) {

      console.log(error);

      alert("Order Failed");
    }
  };

  // Download Invoice
  const downloadInvoice = () => {

    const doc = new jsPDF();

    doc.text("Fashion Store Invoice", 20, 20);

    doc.text(`Customer Name: ${name}`, 20, 40);

    doc.text(`Address: ${address}`, 20, 60);

    doc.text(`Total Amount: ₹ ${total}`, 20, 80);

    // Product List
    let y = 110;

    cartItems.forEach((item, index) => {

      doc.text(
        `${index + 1}. ${item.name} - Qty: ${item.quantity} - ₹ ${item.price}`,
        20,
        y
      );

      y += 20;
    });

    doc.save("invoice.pdf");
  };

  return (

    <div
      style={{
        padding: "30px",
        textAlign: "center",
      }}
    >

      <h1>Checkout Page</h1>

      {/* Cart Products */}
      <div
        style={{
          marginBottom: "20px",
        }}
      >

        <h2>Cart Items</h2>

        {
          cartItems.length === 0 ? (

            <p>No Items in Cart</p>

          ) : (

            cartItems.map((item, index) => (

              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  margin: "10px auto",
                  width: "300px",
                  borderRadius: "10px",
                }}
              >

                <h3>{item.name}</h3>

                <p>Price: ₹ {item.price}</p>

                <p>Quantity: {item.quantity}</p>

              </div>
            ))
          )
        }

      </div>

      {/* Name */}
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        style={{
          padding: "10px",
          width: "300px",
          margin: "10px",
        }}
      />

      <br />

      {/* Address */}
      <textarea
        placeholder="Enter Address"
        value={address}
        onChange={(e) =>
          setAddress(e.target.value)
        }
        style={{
          padding: "10px",
          width: "300px",
          height: "100px",
          margin: "10px",
        }}
      />

      <br />

      {/* Coupon */}
      <input
        type="text"
        placeholder="Coupon Code"
        value={coupon}
        onChange={(e) =>
          setCoupon(e.target.value)
        }
        style={{
          padding: "10px",
          width: "300px",
          margin: "10px",
        }}
      />

      <br />

      {/* Apply Coupon */}
      <button
        onClick={applyCoupon}
        style={{
          padding: "10px",
          backgroundColor: "orange",
          color: "white",
          border: "none",
          margin: "10px",
          cursor: "pointer",
        }}
      >
        Apply Coupon
      </button>

      <h2>Total: ₹ {total}</h2>

      {/* Place Order */}
      <button
        onClick={placeOrder}
        style={{
          padding: "10px 20px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          margin: "10px",
          cursor: "pointer",
        }}
      >
        Place Order
      </button>

      <br />

      {/* Download Invoice */}
      <button
        onClick={downloadInvoice}
        style={{
          padding: "10px 20px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        Download Invoice
      </button>

    </div>
  );
}

export default Checkout;