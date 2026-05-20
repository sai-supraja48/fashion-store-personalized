import {
  useEffect,
  useState
} from "react";

import API
from "../services/api";


const Orders = () => {

  const [orders, setOrders] =
    useState([]);


  const user =
    JSON.parse(
      localStorage.getItem(
        "userInfo"
      )
    );


  useEffect(() => {

    fetchOrders();

  }, []);


  const fetchOrders =
  async () => {

    try {

      const { data } =
        await API.get(

          `/orders/${user._id}`

        );

      setOrders(data);

    } catch (error) {

      console.log(error);

    }

  };


  return (

    <div className="p-5">

      <h1 className="text-3xl font-bold mb-5">

        My Orders

      </h1>


      {

        orders.length === 0 ?

        (

          <h2>
            No Orders Yet
          </h2>

        ) :

        (

          orders.map((order) => (

            <div

              key={order._id}

              className="border p-4 mb-4 rounded"

            >

              <h2 className="font-bold">

                Order ID:
                {order._id}

              </h2>

              <p>

                Total:
                ₹{order.totalAmount}

              </p>

              <p>

                Address:
                {order.address}

              </p>

              <p>

                Date:
                {

                  new Date(
                    order.createdAt
                  ).toLocaleDateString()

                }

              </p>


              <div className="mt-3">

                {

                  order.items.map(

                    (item, index) => (

                      <div

                        key={index}

                        className="flex items-center gap-4 mb-2"

                      >

                        <img

                          src={item.image}

                          alt=""

                          className="w-20 h-20 object-cover"

                        />

                        <div>

                          <h3>
                            {item.title}
                          </h3>

                          <p>
                            Qty:
                            {item.quantity}
                          </p>

                          <p>
                            ₹{item.price}
                          </p>

                        </div>

                      </div>

                    )

                  )

                }

              </div>

            </div>

          ))

        )

      }

    </div>

  );

};

export default Orders;