import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Homepages from "./pages/Homepages";
import HomepageDetails from "./pages/HomepageDetails ";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import "./App.css";

//Need to organize this
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "./store/user/selectors";
import { loggedOut } from "./store/user/actions";

function App() {
  //organize this
  const token = useSelector(selectToken());
  const dispatch = useDispatch();

  return (
    <div className="App">
      {token ? (
        <button onClick={() => dispatch(loggedOut())}>Log Out</button>
      ) : (
        <button>
          <Link to="/login">Log In</Link>
        </button>
      )}

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
