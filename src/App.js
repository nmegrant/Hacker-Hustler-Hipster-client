import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepages from "./pages/Homepages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepages} />
        {/* <Route exact path="/scheduleviewing" component={ScheduleViewing} />
        <Route exact path="/listings" component={Listings} />
        <Route exact path="/" component={Home} /> */}
      </Switch>
    </div>
  );
}

export default App;
