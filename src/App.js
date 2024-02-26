import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/homepage";
import Login from "./Components/LogIn/login";
import Signup from "./Components/Signup/signup";
import UserHome from "./Components/UserHome/userhome";
import Profile from "./Components/Profile/profile";
import StoreDetails from "./Components/StoreDetails/storedetails";
import Categories from "./Components/Categories/categories";
import ChooseTheme from "./Components/ChooseTheme/choosetheme";
import CustomizeTheme from "./Components/CustomizeTheme/customizetheme";
import ClothingAddProducts from "./Components/ClothingAddProducts/clothingaddproducts";
import ElectronicsAddProducts from "./Components/ElectronicsAddProducts/electronicsaddproducts";
import GroceryAddProducts from "./Components/GroceryAddProducts/groceryaddproducts";
import FoodAddProducts from "./Components/FoodAddProducts/foodaddproducts";
import HealthAddProducts from "./Components/HealthAddProducts/healthaddproducts";
import OthersAddProducts from "./Components/OthersAddProducts/othersaddproducts";
import EditStore from './Components/EditStore/editstore';
import MyStore from './Components/MyStore/mystore';
import EditProduct from "./Components/EditProduct/editproduct";

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<HomePage />}></Route>
            <Route
              path="/clothingaddproducts"
              exact
              element={<ClothingAddProducts />}
            ></Route>
            <Route
              path="/electronicsaddproducts"
              exact
              element={<ElectronicsAddProducts />}
            ></Route>
            <Route
              path="/groceryaddproducts"
              exact
              element={<GroceryAddProducts />}
            ></Route>
            <Route
              path="/foodaddproducts"
              exact
              element={<FoodAddProducts />}
            ></Route>
            <Route
              path="/healthaddproducts"
              exact
              element={<HealthAddProducts />}
            ></Route>
            <Route
              path="/othersaddproducts"
              exact
              element={<OthersAddProducts />}
            ></Route>
            <Route path="/categories" exact element={<Categories />}></Route>
            <Route path="/choosetheme" exact element={<ChooseTheme />}></Route>
            <Route
              path="/customizetheme"
              exact
              element={<CustomizeTheme />}
            ></Route>

            <Route path="/login" exact element={<Login />}></Route>
            <Route path="/profile" exact element={<Profile />}></Route>
            <Route path="/signup" exact element={<Signup />}></Route>
            <Route
              path="/storedetails"
              exact
              element={<StoreDetails />}
            ></Route>
            <Route path="/editstore" exact element={<EditStore/>}></Route>

            <Route path="/mystore" exact element={<MyStore/>}></Route>
            <Route path="/editproduct" exact element={<EditProduct/>}></Route>
            <Route path="/userhome" exact element={<UserHome />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
