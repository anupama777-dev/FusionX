import React from "react";
import "./mystore.css";
import { Image, Text, Button } from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { IoTrash } from "react-icons/io5";
import { useState, useEffect } from "react";
import Iframe from "react-iframe";

function MyStore() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const storeID = searchParams.get("store");
  const [storeData, setStoreData] = useState({ stores: [], products: [] });
  const [ordersData, setOrdersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chatboxOpen, setChatboxOpen] = useState(false);
  const toggleChatbox = () => {
    setChatboxOpen(!chatboxOpen);
  };
  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/mystore/${storeID}`
        );
        setStoreData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stores:", error);
        setStoreData({ stores: [], products: [] });
        setLoading(false);
      }
    };
    const fetchOrdersData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/mystore/orders/${storeID}`
        );
        setOrdersData(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setOrdersData([]);
      }
    };
    fetchStoreData();
    fetchOrdersData();
  }, [storeID]);
  if (loading) {
    return <div>Loading...</div>;
  }
  const { stores, products } = storeData;
  const orders = ordersData;
  const category = stores[0].storeCategory;
  const theme = stores[0].storeTheme;
  const handleDelete = async () => {
    try {
      if (products && products.length > 0) {
        await axios.delete(
          `http://localhost:3001/${category}addproducts?store=${storeID}&category=${category}&theme=${theme}`
        );
      }
      await axios.delete(`http://localhost:3001/storedetails/${storeID}`);
      console.log("Item deleted successfully");
      navigate(`/userhome`);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(
        `http://localhost:3001/${category}addproducts?store=${storeID}&category=${category}&theme=${theme}&add=1`
      );
      console.log("Item deleted successfully");
      setStoreData((prevStoreData) => ({
        ...prevStoreData,
        products: prevStoreData.products.filter(
          (product) => product._id !== productId
        ),
      }));
      navigate(`/mystore/?store=${storeID}`);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  const handleEdit = () => {
    navigate(`/editstore?store=${storeID}`);
  };
  const handleEditProduct = (productId) => {
    navigate(
      `/editproduct?store=${storeID}&category=${category}&product=${productId}`
    );
  };
  return (
    <div className="store-details-page">
      <div className="header1">
        <Image className="header_logo" src="\images\logo.svg" />
        <div className="header_categories">
          <Text className="edit_store_txt">My Stores</Text>
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
            <div className="edit-store-details-box">
              <div className="edit_option">
                <Text className="store-txt">Store Details</Text>
                <div className="btns-div">
                  <Button
                    className="edit_icon"
                    colorScheme="white"
                    variant="ghost"
                    _hover={{ backgroundColor: "#222b3b" }}
                    onClick={handleEdit}
                  >
                    <Image src="/images/edit_button.svg" />
                  </Button>
                  <Button
                    className="edit_icon1"
                    colorScheme="white"
                    variant="ghost"
                    _hover={{ backgroundColor: "#222b3b" }}
                    onClick={handleDelete}
                  >
                    <IoTrash fontSize="1.4em" />
                  </Button>
                </div>
              </div>
              {stores.length > 0 && (
                <div>
                  {stores.map((store, index) => (
                    <div key={index}>
                      <div className="store-name-desc">
                        <Text className="sub-txt-left">Store Name :</Text>
                        <Text className="sub-txt-right">{store.storeName}</Text>
                      </div>
                      <div className="store-name-desc">
                        <Text className="sub-txt-left">
                          Store Description :
                        </Text>
                        <Text className="sub-txt-right">
                          {store.storeDescription}
                        </Text>
                      </div>
                      <div className="store-name-desc">
                        <Text className="sub-txt-left">Store Address :</Text>
                        <Text className="sub-txt-right">
                          {store.storeAddress}
                        </Text>
                      </div>
                      <div className="store-name-desc">
                        <Text className="sub-txt-left">
                          Store Contact Number :
                        </Text>
                        <Text className="sub-txt-right">
                          {store.storeContact}
                        </Text>
                      </div>
                      <div
                        className="store-name-desc"
                        style={{ marginBottom: "40px" }}
                      >
                        <Text className="sub-txt-left">Store Link :</Text>
                        <Text className="sub-txt-right">{store.storeLink}</Text>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
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
          </div>
          <div className="edit-products-container">
            <div className="products-heading">
              <Text className="storetxt">Products</Text>
              <Link
                to={`/${category}addproducts?store=${storeID}&category=${category}&theme=${theme}&add=1`}
                className="add-product-btn"
              >
                + Add Product
              </Link>
            </div>
            <div className="products-container">
              <div className="products-list">
                {products &&
                  products.slice(0, 9).map((product, index) => {
                    let imagePath = product.productImage.image;
                    if (typeof imagePath === "string") {
                      imagePath = imagePath.replace(/\\/g, "/");
                      imagePath = `http://localhost:3001/${imagePath}`;
                    }
                    return (
                      <div key={index} className="product-card ">
                        <Card bg="#1A202C">
                          <CardBody>
                            <Image
                              className="edit-product-image"
                              src={imagePath}
                              alt={product.productName}
                              style={{ width: "180px", height: "120px" }}
                            />
                            <div className="edit-prdct-icon-txt">
                              <Text className="edit-product-txt">
                                {product.productName}
                              </Text>
                            </div>
                          </CardBody>
                          <CardFooter className="footer">
                            <Button
                              className="edit_icon2"
                              colorScheme="white"
                              variant="ghost"
                              _hover={{ backgroundColor: "#222b3b" }}
                              onClick={() => handleEditProduct(product._id)}
                            >
                              <Image src="/images/edit_button.svg" />
                            </Button>
                            <Button
                              className="edit_icon3"
                              colorScheme="white"
                              _hover={{ backgroundColor: "#222b3b" }}
                              onClick={() => handleDeleteProduct(product._id)}
                            >
                              <IoTrash fontSize="1.4em" />
                            </Button>
                          </CardFooter>
                        </Card>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="orders-container">
            <div className="orders-heading">
              <Text className="storetxt">Orders</Text>
            </div>
            <div className="orders-list">
              {orders.length === 0 ? (
                <Text>No orders</Text>
              ) : (
                orders.map((order, index) => (
                  <div className="order-item" key={index}>
                    <Text className="order-user">
                      Username: {order.username}
                    </Text>
                    <Text className="order-product">
                      Order ID: {order._id}
                    </Text>
                    <Link className="view-btn" to={`/manageorders?store=${storeID}&order=${order._id}`}>
                      View
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
export default MyStore;
