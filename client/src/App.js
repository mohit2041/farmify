import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/profile/Profile";
import PrivateRoute from "./components/routing/PrivateRoute";
import CreateProfile from "./components/profile/CreateProfile";
import EditProfile from "./components/profile/EditProfile";
import CreateItem from "./components/items/CreateItem";
import EditItem from "./components/items/EditItem";
import ItemDisplay from "./components/items/ItemDisplay";
import Shop from "./components/shop/Shop";
import Alert from "./components/layout/Alert";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

//for redux setup
import { Provider } from "react-redux";
import store from "./store";

//setting token first time
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container my-5 py-5">
            <Alert />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <PrivateRoute
                exact
                path="/profile/:name/:id"
                component={Profile}
              />
              <PrivateRoute exact path="/shop" component={Shop} />
              <PrivateRoute exact path="/create-item" component={CreateItem} />
              <PrivateRoute exact path="/edit-item/:id" component={EditItem} />
              <PrivateRoute exact path="/item/:id" component={ItemDisplay} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
