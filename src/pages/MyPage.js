import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditHomepage from "../components/EditHomepage";
import { fetchHomepageDetailsThunkCreator } from "../store/mypage/actions";
import { selectMyPageDetails } from "../store/mypage/selector";

import { Tabs, Tab } from "react-bootstrap/";

export default function MyPage() {
  const dispatch = useDispatch();
  const myPage = useSelector(selectMyPageDetails());

  useEffect(() => {
    dispatch(fetchHomepageDetailsThunkCreator());
  }, [dispatch]);

  console.log(myPage);

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
