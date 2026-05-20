import { useEffect, useState } from "react";
import axios from "axios";

const Recommendations = ({ category }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetchRecommendations();

  }, [category]);

  const fetchRecommendations = async () => {

    try {

      const response = await axios.get(
        `http://localhost:5000/api/recommendations?category=${category}`
      );

      setProducts(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ marginTop: "40px" }}>

      <h2>Recommended Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(200px,1fr))",
          gap: "20px",
          marginTop: "20px"
        }}
      >

        {products.map((item) => (

          <div
            key={item._id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "10px"
            }}
          >

            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover"
              }}
            />

            <h3>{item.title}</h3>

            <p>₹ {item.basePrice}</p>

            <p>{item.category}</p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Recommendations;