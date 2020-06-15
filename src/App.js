import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Homepages from "./pages/Homepages";
import HomepageDetails from "./pages/HomepageDetails ";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepages} />
        <Route
          exact
          path="/homepages/:homepageId"
          component={HomepageDetails}
        />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
