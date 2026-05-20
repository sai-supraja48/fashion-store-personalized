import {
  Link,
  useNavigate
} from "react-router-dom";


function Navbar() {

  const navigate =
    useNavigate();

  const token =
    localStorage.getItem("token");


  const handleLogout = () => {

    localStorage.removeItem("token");

    alert("Logged Out");

    navigate("/login");

  };


  return (

    <nav
      style={{

        backgroundColor: "black",

        padding: "15px",

        display: "flex",

        gap: "20px",

        alignItems: "center"

      }}
    >

      <Link
        to="/"
        style={{
          color: "white"
        }}
      >
        Home
      </Link>


      <Link
        to="/products"
        style={{
          color: "white"
        }}
      >
        Products
      </Link>


      <Link
        to="/cart"
        style={{
          color: "white"
        }}
      >
        Cart
      </Link>


      <Link
        to="/wishlist"
        style={{
          color: "white"
        }}
      >
        Wishlist
      </Link>


      <Link
        to="/checkout"
        style={{
          color: "white"
        }}
      >
        Checkout
      </Link>


      {

        !token ? (

          <>

            <Link
              to="/login"
              style={{
                color: "white"
              }}
            >
              Login
            </Link>

            <Link
              to="/register"
              style={{
                color: "white"
              }}
            >
              Register
            </Link>
            
            <Link to="/orders">

  Orders

</Link>

          </>

        ) : (

          <button

            onClick={handleLogout}

            style={{

              backgroundColor: "red",

              color: "white",

              border: "none",

              padding: "8px 12px",

              cursor: "pointer"

            }}
          >
            Logout
          </button>

        )

      }

    </nav>

  );
}

export default Navbar;