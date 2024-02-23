import React from "react";
import "./mystore.css";
import { Image, Text } from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function MyStore() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const storeID = searchParams.get("store");
  const [storeData, setStoreData] = useState({ stores: [], products: [] });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/mystore/${storeID}`
        );
        console.log("Response data:", response.data);

        setStoreData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stores:", error);
        setStoreData({ stores: [], products: [] });
        setLoading(false);
      }
    };
    fetchStoreData();
  }, [storeID]);
  if (loading) {
    return <div>Loading...</div>;
  }
  const { stores, products } = storeData;
  const category = stores[0].storeCategory;
  const theme = stores[0].storeTheme;

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
            <Link className="dash_txt" to={"/"}>
              Log Out
            </Link>
          </div>
        </div>
        <div className="categories_container">
          <div className="store-details">
            <div className="edit-store-details-box">
              <div className="edit_option">
                <Text className="storetxt">Store Details</Text>
                <Link to={`/editstore?store=${storeID}`}>
                  <Image className="edit_icon" src="/images/edit_button.svg" />
                </Link>
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
                    </div>
                  ))}
                </div>
              )}
            </div>
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
              {products &&
                products.map((product, index) => {
                  let imagePath = product.productImage.image;
                  if (typeof imagePath === "string") {
                    imagePath = imagePath.replace(/\\/g, "/");
                    imagePath = `http://localhost:3001/${imagePath}`;
                  }
                  return (
                    <div key={index} className="product-card">
                      <Card bg="#1A202C">
                        <CardBody>
                          <Image
                            className="edit-product-image"
                            src={imagePath}
                            alt={product.productName}
                            style={{ width: "150px", height: "120px" }}
                          />
                          <div className="edit-prdct-icon-txt">
                            <Text className="edit-product-txt">
                              {product.productName}
                            </Text>
                          </div>
                        </CardBody>
                        <CardFooter className="footer">
                          <Link
                            to={`/editproduct?store=${storeID}&category=${category}&theme=${theme}`}
                            className="edit-product-link"
                          >
                            Edit
                          </Link>
                        </CardFooter>
                      </Card>
                    </div>
                  );
                })}
            </div>
            <div className="products-container1">
              {products &&
                products.map((product, index) => {
                  let imagePath = product.productImage.image;
                  if (typeof imagePath === "string") {
                    imagePath = imagePath.replace(/\\/g, "/");
                    imagePath = `http://localhost:3001/${imagePath}`;
                  }
                  return (
                    <div key={index} className="product-card">
                      <Card bg="#1A202C">
                        <CardBody>
                          <Image
                            className="edit-product-image"
                            src={imagePath}
                            alt={product.productName}
                            style={{ width: "150px", height: "120px" }}
                          />
                          <div className="edit-prdct-icon-txt">
                            <Text className="edit-product-txt">
                              {product.productName}
                            </Text>
                          </div>
                        </CardBody>
                        <CardFooter className="footer">
                          <Link
                            to={`/${category}addproducts?store=${storeID}&category=${category}&theme=${theme}&add=0&edit=1`}
                            className="edit-product-link"
                          >
                            Edit
                          </Link>
                        </CardFooter>
                      </Card>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyStore;
