import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Homepages from "./pages/Homepages/Homepages";
import HomepageDetails from "./pages/HomepageDetails/HomepageDetails ";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import NavBanner from "./components/NavBanner";
import AlertBox from "./components/AlertBox";
import Loading from "./components/Loading";
import "./App.css";
import { getLoggedInUserThunkCreator } from "./store/user/actions";
import { selectLoadingStatus } from "./store/appState/selectors";
import { selectMode } from "./store/user/selectors";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus());
  const mode = useSelector(selectMode());

  useEffect(() => {
    dispatch(getLoggedInUserThunkCreator());
  }, [dispatch]);

  const colorScheme = mode ? ["#222", "#FFF"] : ["#FFF", "#222"];

  return (
    <div
      className="App"
      style={{
        backgroundColor: colorScheme[0],
        color: colorScheme[1],
        height: "2000px",
      }}
    >
      <NavBanner />
      {loading ? <Loading /> : null}
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
