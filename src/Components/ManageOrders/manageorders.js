import React from "react";
import moment from 'moment';
import "./manageorders.css";
import { Image, TableContainer, Text, Thead,Th,Table,Tr, Tbody, Td, Button} from "@chakra-ui/react";
import { Link,useLocation} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


function ManageOrders() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const orderID = searchParams.get("order");
    console.log(orderID)
    const [ordersData, setOrdersData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [Order,setOrder] = useState({orderStatus:'Placed'})
  
    useEffect(() => {
      const fetchOrderData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3001/manageorders/orders?orderid=${orderID}`
          );
          console.log(response.data);
          setOrdersData(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching orders:", error);
          setOrdersData([]);
          setLoading(false);
        }
      };
      fetchOrderData();
    }, [orderID]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
    
    const updateOrderStatus = async () => {
        try {
          const response = await axios.put(`http://localhost:3001/manageorders/orders?orderid=${orderID}`, { orderStatus: 'Shipped' });
          setOrder({...Order, orderStatus: response.data.orderStatus });
          alert('Order status updated successfully');
        } catch (error) {
          console.error('Error updating order status:', error);
          alert('Failed to update order status');
        }
      };
  
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  const order = ordersData;

    return (
    <div className="store-details-page">
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
                        <Text className="sub-txt-right">{moment(order.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</Text>
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
                                    <Th className="heading">Size</Th>
                                    <Th className="heading">Color</Th>
                                    <Th className="heading">Status</Th>   
                                </Tr>
                            </Thead>
                            <Tbody>
                            {ordersData.map((orders, index) => (
                                <Tr key={index}>
                                    <Td className='product-data'>{orders.productID}</Td>
                                    <Td className='product-data'>{orders.productName}</Td>
                                    <Td className='product-data'>{orders.quantity}</Td>
                                    <Td className='product-data'>{orders.productSize}</Td>
                                    <Td className='product-data'>{orders.productColor}</Td>
                                    <Td className='product-data'><Button className="ship-btn" onClick={() => updateOrderStatus()}>{orders.orderStatus}</Button></Td>
                                </Tr> 
                            ))}
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