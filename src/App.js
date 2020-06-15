import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepages from "./pages/Homepages";
import HomepageDetails from "./pages/HomepageDetails ";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import User from "./pages/User";
import NavBanner from "./components/NavBanner";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBanner />
      <Switch>
        <Route exact path="/" component={Homepages} />
        <Route path="/homepages/:homepageId" component={HomepageDetails} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/user" component={User} />
      </Switch>
    </div>
  );
}

export default App;
