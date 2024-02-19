import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage/homepage'

import ClothingAddProducts from './Components/ClothingAddProducts/clothingaddproducts';
import ElectronicsAddProducts from './Components/ElectronicsAddProducts/electronicsaddproducts';
import GroceryAddProducts from './Components/GroceryAddProducts/groceryaddproducts';
import FoodAddProducts from './Components/FoodAddProducts/foodaddproducts';
import HealthAddProducts from './Components/HealthAddProducts/healthaddproducts';
import OthersAddProducts from './Components/OthersAddProducts/othersaddproducts';

import Categories from './Components/Categories/categories';

import ElectronicsTheme from './Components/ElectronicsTheme/elctronicstheme';
import ClothingTheme from './Components/ClothingTheme/clothingtheme';
import GroceryTheme from './Components/GroceryTheme/grocerytheme';
import FoodTheme from './Components/FoodTheme/foodtheme';
import HealthTheme from './Components/HealthTheme/healththeme';
import OthersTheme from './Components/OthersTheme/otherstheme';

import ChooseTheme from './Components/ChooseTheme/choosetheme';

import Login from './Components/LogIn/login';
import Profile from './Components/Profile/profile';
import Signup from './Components/Signup/signup';
import StoreDetails from './Components/StoreDetails/storedetails';
import UserHome from './Components/UserHome/userhome';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<HomePage/>}></Route>
            <Route path="/clothingaddproducts" exact element={<ClothingAddProducts/>}></Route>
            <Route path="/electronicsaddproducts" exact element={<ElectronicsAddProducts/>}></Route>
            <Route path="/groceryaddproducts" exact element={<GroceryAddProducts/>}></Route>
            <Route path="/foodaddproducts" exact element={<FoodAddProducts/>}></Route>
            <Route path="/healthaddproducts" exact element={<HealthAddProducts/>}></Route>
            <Route path="/othersaddproducts" exact element={<OthersAddProducts/>}></Route>
            <Route path="/categories" exact element={<Categories/>}></Route>

            <Route path="/choosetheme" exact element={<ChooseTheme/>}></Route>
            <Route path="/electronicstheme" exact element={<ElectronicsTheme/>}></Route>
            <Route path="/clothingtheme" exact element={<ClothingTheme/>}></Route>
            <Route path="/grocerytheme" exact element={<GroceryTheme/>}></Route> 
            <Route path="/foodtheme" exact element={<FoodTheme/>}></Route> 
            <Route path="/healththeme" exact element={<HealthTheme/>}></Route>
            <Route path="/otherstheme" exact element={<OthersTheme/>}></Route>

            <Route path="/login" exact element={<Login/>}></Route>
            <Route path="/profile" exact element={<Profile/>}></Route>
            <Route path="/signup" exact element={<Signup/>}></Route>
            <Route path="/storedetails" exact element={<StoreDetails/>}></Route>
            <Route path="/userhome" exact element={<UserHome/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
