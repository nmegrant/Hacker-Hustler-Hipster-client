import React from "react";
import { selectHomepageDetails } from "../store/homepageDetails/selectors";

import { Tabs, Tab } from "react-bootstrap/";

export default function MyPage() {
  return (
    <Tabs defaultActiveKey="homepage" id="uncontrolled-tab-example">
      <Tab eventKey="homepage" title="My Homepage">
        <h1>Homepage stuff</h1>
      </Tab>
      <Tab eventKey="edit" title="Edit Homepage">
        <h1>Form to edit homepage</h1>
      </Tab>
      <Tab eventKey="ideas" title="Ideas">
        <h1>Ideas and a form to add ideas</h1>
      </Tab>
    </Tabs>
  );
}
