import { Route, Switch } from "react-router-dom";
import Register from "../pages/Register";
import Register2 from "../pages/Register/Register2";
import Register3 from "../pages/Register/Register3";
import TestsPage from "../pages/testsPage";
import LoginPage from "../pages/login/mobile";
import Home from "../pages/Home";
import ProductPage from "../pages/productPage";
import MenuMobile from "../Components/Menu/mobile";
import MenuDesktop from "../Components/Menu/desktop";
import { useWindow } from "../Providers/window";
import { useLocation } from "react-router";
import { WINDOW_SIZE_DESKTOP } from "../utils";

const RouterComponent = () => {
  const { pageWidth } = useWindow();
  const { pathname } = useLocation();
  return (
    <Switch>
      <Route exact path="/" component={TestsPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/product/:id" component={ProductPage} />

      <Route exact path="/register">
        <Register />
      </Route>

      <Route exact path="/register-second">
        <Register2 />
      </Route>

      <Route exact path="/register-third">
        <Register3 />
      </Route>

      <Route path="/myCart">
        <div>My Cart</div>
      </Route>

      <Route path="/checkout">
        <div>Checkout</div>
      </Route>

      <Route exact path="/myAccount">
        <div>My Account</div>
      </Route>

      <Route exact path="/myAccount/profile">
        <div>My Profile</div>
      </Route>

      <Route path="/myAccount/edit">
        <div>Edit Profile</div>
      </Route>

      <Route path="/myAccount/history">
        <div>My Purchase History</div>
      </Route>

      <Route path="/myAccount/products">
        <div>Register Products</div>
      </Route>

      <Route path="/myAccount/profile/product">
        <div>Update Product</div>
      </Route>

      <Route path="/product">
        <div>Product</div>
      </Route>

      <Route path="/ownerProfile/:id">
        <div>Owner Profile</div>
      </Route>
    </Switch>
  );
};

export default RouterComponent;
