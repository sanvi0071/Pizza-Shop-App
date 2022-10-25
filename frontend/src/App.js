import "./App.css";

import {BrowserRouter, Route, Switch}from 'react-router-dom';
import TopBar from'./components/TopBar';
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import cartScreen from "./screens/cartScreen";
import register from "./screens/register";
import login from "./screens/login";
import orderScreen from "./screens/orderScreen";
import AdminScreen from "./screens/AdminScreen";
function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <NavBar />
      <Switch>
      <Route path="/admin" component={AdminScreen}/>
        <Route path="/orders" component={orderScreen} exact/>
        <Route path="/login" component={login} exact/>
        <Route path="/register" component={register} exact/>
        <Route path="/cart" component={cartScreen} exact/>
        <Route path="/about" component={About} exact/>
        <Route path="/contact" component={Contact} exact/>
        <Route path="/policy" component={Policy} exact/>
        <Route path="/" component={HomeScreen} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
