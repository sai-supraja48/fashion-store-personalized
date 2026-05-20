import { useEffect, useState } from "react";
import API from "../services/api";
import ProductCard from "../components/ProductCard";

function Products() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchProducts();

  }, []);

  const fetchProducts = async () => {

    try {

      const response = await API.get("/products");

      setProducts(response.data);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

    }

  };

  const filteredProducts = products.filter((product) => {

    const productName =
      (product.name || "").toLowerCase();

    const productCategory =
      (product.category || "").toLowerCase();

    return (
      productName.includes(
        search.toLowerCase()
      ) ||

      productCategory.includes(
        search.toLowerCase()
      )
    );

  });

  return (

    <div
      style={{
        padding: "30px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px"
        }}
      >
        Fashion Products
      </h1>

      <div
        style={{
          textAlign: "center",
          marginBottom: "30px"
        }}
      >

        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          style={{
            padding: "12px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid gray"
          }}
        />

      </div>

      {loading ? (

        <h2
          style={{
            textAlign: "center"
          }}
        >
          Loading...
        </h2>

      ) : (

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "25px"
          }}
        >

          {filteredProducts.length > 0 ? (

            filteredProducts.map((product) => (

              <ProductCard
                key={product._id}
                product={product}
              />

            ))

          ) : (

            <h2>No Products Found</h2>

          )}

        </div>

      )}

    </div>

  );

}

export default Products;