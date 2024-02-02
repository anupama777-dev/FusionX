import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage/homepage'
import AddProducts from './Components/AddProducts/addproducts';
import Categories from './Components/Categories/categories';
import ChooseTheme from './Components/ChooseTheme/choosetheme';
import CustomizeTheme from './Components/CustomizeTheme/customizetheme';
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
            <Route path="/addproducts" exact element={<AddProducts/>}></Route>
            <Route path="/categories" exact element={<Categories/>}></Route>
            <Route path="/choosetheme" exact element={<ChooseTheme/>}></Route>
            <Route path="/customizetheme" exact element={<CustomizeTheme/>}></Route>
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
