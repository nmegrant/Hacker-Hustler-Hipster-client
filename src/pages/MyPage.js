import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditHomepage from "../components/EditHomepage";
import MyHomepage from "../components/MyHomepage";
import Ideas from "../components/Ideas";
import MyPageBanner from "../components/MyPageBanner";

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
        <MyPageBanner name={myPage.user ? myPage.user.name : null} />
        <MyHomepage myInfo={myPage} />
      </Tab>
      <Tab eventKey="edit" title="Edit Homepage">
        <MyPageBanner name={myPage.user ? myPage.user.name : null} />
        <EditHomepage />
      </Tab>
      <Tab eventKey="ideas" title="Ideas">
        <MyPageBanner name={myPage.user ? myPage.user.name : null} />
        <Ideas />
      </Tab>
    </Tabs>
  );
}
