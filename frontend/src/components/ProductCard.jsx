import { Link } from "react-router-dom";

function ProductCard({ product }) {

  return (

    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "10px",
        textAlign: "center",
        backgroundColor: "white"
      }}
    >

      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
          borderRadius: "10px"
        }}
      />

      <h2
        style={{
          marginTop: "15px"
        }}
      >
        {product.title}
      </h2>

      <p>
        {product.description}
      </p>

      <h3>
        ₹ {product.basePrice}
      </h3>

      <p>
        {product.category}
      </p>

      <Link to={`/products/${product._id}`}>

        <button
          style={{
            backgroundColor: "black",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            borderRadius: "5px"
          }}
        >
          View Details
        </button>

      </Link>

    </div>

  );
}

export default ProductCard;