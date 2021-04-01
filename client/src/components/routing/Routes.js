import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import Login from "../auth/Login";
import Register from "../auth/Register";
import Profile from "../profile/Profile";
import PrivateRoute from "../routing/PrivateRoute";
import CreateProfile from "../profile/CreateProfile";
import EditProfile from "../profile/EditProfile";
import CreateItem from "../items/CreateItem";
import EditItem from "../items/EditItem";
import ItemDisplay from "../items/ItemDisplay";
import Shop from "../shop/Shop";
import MainForm from "../market/MainForm";
import DisplayResults from "../market/DisplayResults";
import Alert from "../layout/Alert";
import NotFound from "../layout/NotFound";

const Routes = (props) => {
  return (
    <section className="container my-5 py-5">
      <Alert />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/market" component={MainForm} />
        <Route exact path="/market/results" component={DisplayResults} />
        <PrivateRoute exact path="/profile/:name/:id" component={Profile} />
        <PrivateRoute exact path="/shop" component={Shop} />
        <PrivateRoute exact path="/create-item" component={CreateItem} />
        <PrivateRoute exact path="/edit-item/:id" component={EditItem} />
        <PrivateRoute exact path="/item/:id" component={ItemDisplay} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

Routes.propTypes = {};

export default Routes;
