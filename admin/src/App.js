import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { useEffect, useMemo, useState } from "react";
import axios from 'axios';

function App() {

  const MONTHS = useMemo(()=>
  [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ]
  )

  const [userStats,setUserStats] = useState([]); 

  useEffect(()=>{
    const getStats = async () =>{
      try {
        const res = await axios.get("/users/stats", {
          headers:{
            token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjM3N2FmOTVmNzRkZTkzYjVlZTI1YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDI4MTE2NCwiZXhwIjoxNjk0NzEzMTY0fQ.fvqqv4I-3N8SOGB4gJ87V4FTB6LyHDfTYK9ydziG78A"
          },
        });
        setUserStats(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getStats();
  },[])

  console.log(userStats);

  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
