import { Route, Switch } from "react-router-dom";
import Register from "../pages/Register";
import Register2 from "../pages/Register/Register2";

const RouterComponent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <div>Home</div>
      </Route>

      <Route exact path="/login">
        <div>Login</div>
      </Route>

      <Route exact path="/register">
        <Register />
      </Route>

      <Route exact path="/register-2">
        <Register2 />
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
