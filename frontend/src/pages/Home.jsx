import { Link } from "react-router-dom";

function Home() {

  return (

    <div>

      {/* HERO SECTION */}

      <div
        style={{
          height: "90vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >

        <div
          style={{
            backgroundColor:
              "rgba(0,0,0,0.5)",
            padding: "40px",
            borderRadius: "10px",
          }}
        >

          <h1
            style={{
              fontSize: "60px",
              marginBottom: "20px",
            }}
          >
            Fashion Store
          </h1>

          <p
            style={{
              fontSize: "22px",
              marginBottom: "30px",
            }}
          >
            Discover Trending Fashion
            Styles For Men & Women
          </p>

          <Link to="/products">

            <button
              style={{
                padding:
                  "15px 30px",
                backgroundColor:
                  "orange",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Shop Now
            </button>

          </Link>

        </div>

      </div>

      {/* CATEGORY SECTION */}

      <div
        style={{
          padding: "50px 30px",
          textAlign: "center",
        }}
      >

        <h1
          style={{
            marginBottom: "40px",
          }}
        >
          Shop By Category
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >

          {/* MEN */}

          <div
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow:
                "0 2px 10px rgba(0,0,0,0.2)",
            }}
          >

            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
              alt="Men"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                padding: "20px",
              }}
            >

              <h2>Men Fashion</h2>

              <p>
                Trending outfits for men
              </p>

            </div>

          </div>

          {/* WOMEN */}

          <div
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow:
                "0 2px 10px rgba(0,0,0,0.2)",
            }}
          >

            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
              alt="Women"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                padding: "20px",
              }}
            >

              <h2>Women Fashion</h2>

              <p>
                Stylish collections for women
              </p>

            </div>

          </div>

          {/* FOOTWEAR */}

          <div
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow:
                "0 2px 10px rgba(0,0,0,0.2)",
            }}
          >

            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
              alt="Footwear"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                padding: "20px",
              }}
            >

              <h2>Footwear</h2>

              <p>
                Comfortable & trendy shoes
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* FEATURES */}

      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "60px 30px",
        }}
      >

        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Why Choose Us?
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            textAlign: "center",
          }}
        >

          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "10px",
            }}
          >

            <h2>🚚 Free Delivery</h2>

            <p>
              Fast and secure delivery
              service
            </p>

          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "10px",
            }}
          >

            <h2>💳 Secure Payment</h2>

            <p>
              100% secure payment system
            </p>

          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "10px",
            }}
          >

            <h2>⭐ Best Quality</h2>

            <p>
              Premium quality fashion
              products
            </p>

          </div>

        </div>

      </div>

      {/* FOOTER */}

      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >

        <h3>
          Fashion Store © 2026
        </h3>

        <p>
          Designed with ❤️ using MERN
          Stack
        </p>

      </div>

    </div>
  );
}

export default Home;