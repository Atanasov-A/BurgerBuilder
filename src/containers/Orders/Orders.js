import { useEffect, useState } from "react";
import { Order } from "../../components/Order/Order";
import { axiosInstance } from "../../axios-orders";
import { WithAxiosErrorHandler } from "../../hoc/WithAxiosErrorHandler";

export const _Orders = (props) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("/orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        setOrders(fetchedOrders);
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  }, []);

  return (
    <>
      {orders.map((order) => {
        return (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={+order.price}
          />
        );
      })}
    </>
  );
};

export const Orders = WithAxiosErrorHandler(_Orders, axiosInstance);
