import { useEffect, useState } from "react";

function Wishlist() {

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {

    const data =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(data);

  }, []);

  const removeWishlist = (id) => {

    const updatedWishlist =
      wishlist.filter((item) => item._id !== id);

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
  };

  return (

    <div
      style={{
        padding: "20px",
        textAlign: "center"
      }}
    >

      <h1>Wishlist Page</h1>

      {
        wishlist.map((item) => (

          <div
            key={item._id}
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              margin: "20px auto",
              width: "300px",
              borderRadius: "10px"
            }}
          >

            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />

            <h2>{item.title}</h2>

            <p>{item.description}</p>

            <p>₹ {item.basePrice}</p>

            <button
              onClick={() => removeWishlist(item._id)}
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "10px",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px"
              }}
            >
              Remove
            </button>

          </div>

        ))
      }

    </div>
  );
}

export default Wishlist;