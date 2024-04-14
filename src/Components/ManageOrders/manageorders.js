import React from "react";
import moment from "moment";
import "./manageorders.css";
import {
  Image,
  TableContainer,
  Text,
  Thead,
  Th,
  Table,
  Tr,
  Tbody,
  Td,
  Button,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Iframe from "react-iframe";
import { useState, useEffect } from "react";

function ManageOrders() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const storeID = searchParams.get("store");
  const orderID = searchParams.get("order");
  const [store, setStore] = useState({});
  const [ordersData, setOrdersData] = useState([]);
  const [orderStatus, setOrderStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chatboxOpen, setChatboxOpen] = useState(false);
  const toggleChatbox = () => {
    setChatboxOpen(!chatboxOpen);
  };
  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const orderResponse = await axios.get(
          `http://localhost:3001/manageorders/orders?orderid=${orderID}`
        );
        console.log(orderResponse.data);
        setOrdersData(orderResponse.data);
        setOrderStatus(orderResponse.data[0].orderStatus);
        const storeResponse = await axios.get(
          `http://localhost:3001/manageorders/store?store=${storeID}`
        );
        console.log(storeResponse.data);
        setStore(storeResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setOrdersData([]);
        setStore({});
        setLoading(false);
      }
    };
    fetchOrderData();
  }, [orderID, storeID]);
  if (loading) {
    return <div>Loading...</div>;
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  const order = ordersData;
  const updateorder = async () => {
    try {
      await axios.put(
        `http://localhost:3001/manageorders/orders?orderid=${orderID}`,
        { orderStatus: "Shipped" }
      );
      alert("Order status updated successfully");
      setOrderStatus("Shipped");
    } catch (error) {
      console.error("Error updating order status:", error);
      alert("Failed to update order status");
    }
  };
  return (
    <div className="manage-orders-page" style={{ overflow: "hidden" }}>
      <div className="header1">
        <Image className="header_logo" src="\images\logo.svg" />
        <div className="header_categories">
          <Text className="edit_store_txt">Manage Orders</Text>
        </div>
      </div>
      <div className="line_div1">
        <Image className="line" src="/images/line_1.svg" />
      </div>
      <div className="categories_body">
        <div className="dashboard1">
          <div className="dash_items">
            <Link to={"/userhome"}>
              <Image className="dashboard_home" src="/images/home.svg" />
            </Link>
            <Link className="home_txt" to={"/userhome"}>
              Home
            </Link>
          </div>
          <div className="dash_items">
            <Link to={"/profile"}>
              <Image className="dashboard_profile" src="/images/profile.svg" />
            </Link>
            <Link className="profile_txt" to={"/profile"}>
              Profile
            </Link>
          </div>
          <div className="dash_items">
            <Link to={"/help"}>
              <Image className="dashboard_help" src="/images/help.svg" />
            </Link>
            <Link className="help_txt" to={"/help"}>
              How to Create?
            </Link>
          </div>
          <div className="dash_items">
            <Link to={"/"}>
              <Image className="back_dash" src="/images/logout.svg" />
            </Link>
            <Link className="dash_txt" to={"/"} onClick={handleLogout}>
              Log Out
            </Link>
          </div>
        </div>
        <div className="categories_container">
          <div className="store-details-userhome">
            <div className="chatbox">
              {chatboxOpen && (
                <div>
                  <Iframe
                    url="http://127.0.0.1:5501/standalone-frontend/base.html"
                    width="400px"
                    height="600px"
                  />
                </div>
              )}
            </div>
            <button onClick={toggleChatbox} className="chatbox__button">
              <Image src="/images/chatbox-icon.svg" />
            </button>
            {order.length > 0 && (
              <div>
                {order.map((order, index) => (
                  <div key={index} className="order-details-box">
                    <div className="store-name-desc">
                      <Text className="sub-txt-left">Order ID :</Text>
                      <Text className="sub-txt-right">{order._id}</Text>
                    </div>
                    <div className="store-name-desc">
                      <Text className="sub-txt-left">Buyer Name :</Text>
                      <Text className="sub-txt-right">{order.username}</Text>
                    </div>
                    <div className="store-name-desc">
                      <Text className="sub-txt-left">Order Date :</Text>
                      <Text className="sub-txt-right">
                        {moment(order.createdAt).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </Text>
                    </div>
                    <div className="store-name-desc">
                      <Text className="store-txt">Products</Text>
                    </div>
                    <TableContainer className="order-table">
                      <Table>
                        <Thead>
                          <Tr>
                            <Th className="heading">Product ID</Th>
                            <Th className="heading">Product Name</Th>
                            <Th className="heading">Quantity</Th>
                            {store.storeCategory === "clothing" ||
                            store.storeCategory === "others" ? (
                              <Th className="heading">Size</Th>
                            ) : null}
                            {store.storeCategory === "clothing" ||
                            store.storeCategory === "others" ||
                            store.storeCategory === "electronics" ? (
                              <Th className="heading">Color</Th>
                            ) : null}
                            <Th className="heading">Status</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td className="product-data">{order.productID}</Td>
                            <Td className="product-data">
                              {order.productName}
                            </Td>
                            <Td className="product-data">{order.quantity}</Td>
                            {store.storeCategory === "clothing" ||
                            store.storeCategory === "others" ? (
                              <Td className="product-data">
                                {order.productSize}
                              </Td>
                            ) : null}
                            {store.storeCategory === "clothing" ||
                            store.storeCategory === "others" ||
                            store.storeCategory === "electronics" ? (
                              <Td className="product-data">
                                {order.productColor}
                              </Td>
                            ) : null}
                            <Td className="product-data">
                              <Button
                                className={`ship-btn ${
                                  orderStatus === "Shipped" ? "disabled" : ""
                                }`}
                                onClick={
                                  orderStatus === "Placed" ? updateorder : null
                                }
                              >
                                {orderStatus}
                              </Button>
                            </Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ManageOrders;
