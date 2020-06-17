import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditHomepage from "../components/EditHomepage";
import MyHomepage from "../components/MyHomepage";
import Ideas from "../components/Ideas";
import { fetchHomepageDetailsThunkCreator } from "../store/mypage/actions";
import { selectMyPageDetails } from "../store/mypage/selector";

import { Tabs, Tab } from "react-bootstrap/";

export default function MyPage() {
  const dispatch = useDispatch();
  const myPage = useSelector(selectMyPageDetails());

  useEffect(() => {
    dispatch(fetchHomepageDetailsThunkCreator());
  }, [dispatch]);

  return (
    <Tabs defaultActiveKey="homepage" id="uncontrolled-tab-example">
      <Tab eventKey="homepage" title="My Homepage">
        <MyHomepage myInfo={myPage} />
      </Tab>
      <Tab eventKey="edit" title="Edit Homepage">
        <EditHomepage />
      </Tab>
      <Tab eventKey="ideas" title="Ideas">
        <Ideas />
      </Tab>
    </Tabs>
  );
}
