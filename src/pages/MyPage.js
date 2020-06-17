import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import EditHomepage from "../components/EditHomepage";
import { fetchHomepageDetailsThunkCreator } from "../store/mypage/actions";

import { Tabs, Tab } from "react-bootstrap/";

export default function MyPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomepageDetailsThunkCreator());
  });

  return (
    <Tabs defaultActiveKey="homepage" id="uncontrolled-tab-example">
      <Tab eventKey="homepage" title="My Homepage">
        <h1>Homepage stuff</h1>
      </Tab>
      <Tab eventKey="edit" title="Edit Homepage">
        <EditHomepage />
      </Tab>
      <Tab eventKey="ideas" title="Ideas">
        <h1>Ideas and a form to add ideas</h1>
      </Tab>
    </Tabs>
  );
}
