import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Homepages from "./pages/Homepages";
import HomepageDetails from "./pages/HomepageDetails ";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import NavBanner from "./components/NavBanner";
import AlertBox from "./components/AlertBox";
import Loading from "./components/Loading";
import "./App.css";
import { getLoggedInUserThunkCreator } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoggedInUserThunkCreator());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBanner />
      {/* <Loading /> */}
      <AlertBox />
      <Switch>
        <Route exact path="/" component={Homepages} />
        <Route path="/homepages/:homepageId" component={HomepageDetails} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/mypage" component={MyPage} />
      </Switch>
    </div>
  );
}

export default App;
