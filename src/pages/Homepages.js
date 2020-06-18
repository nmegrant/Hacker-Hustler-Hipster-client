import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";

import HomepageCard from "../components/HomepageCard";

import { fetchHomepagesThunkCreator } from "../store/homepages/actions";
import { fetchSkillsThunkCreator } from "../store/skills/actions";
import { selectHomepages } from "../store/homepages/selectors";
import { selectSkills } from "../store/skills/selectors";

import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Homepages() {
  const dispatch = useDispatch();

  const [searchSkill, setSearchSkill] = useState([]);
  const [searchSkills, setSearchSkills] = useState([]);

  const skillList = useSelector(selectSkills()).map((skill) => skill.skill);

  useEffect(() => {
    dispatch(fetchHomepagesThunkCreator(searchSkills));
    dispatch(fetchSkillsThunkCreator());
  }, [dispatch, searchSkills]);

  const homepages = useSelector(selectHomepages());

  function submitSearchSkill(event) {
    event.preventDefault();
    setSearchSkills([...searchSkills, ...searchSkill]);
    setSearchSkill([]);
  }

  function submitSearch(event) {
    event.preventDefault();
  }

  return (
    <Container>
      {/* <Row> */}
      <Form as={Row}>
        <Form.Group controlId="formGroupSkills">
          <Form.Label>Add Skills</Form.Label>
          <Typeahead
            id="Add skill dropdown for search"
            onChange={(selected) => setSearchSkill(selected)}
            options={skillList}
            selected={searchSkill}
          />
          <Button
            type="submit"
            onClick={submitSearchSkill}
            style={{ margin: "10px" }}
          >
            Filter By Skills
          </Button>{" "}
        </Form.Group>
      </Form>
      <Button type="submit" onClick={submitSearch} style={{ margin: "10px" }}>
        Search
      </Button>{" "}
      {/* </Row> */}
      <Container as={Row} fluid style={{ justifyContent: "center" }}>
        {homepages.map((homepage) => {
          return (
            <HomepageCard
              key={homepage.id}
              homepageId={homepage.id}
              role={homepage.user.role}
              userId={homepage.user.id}
              name={homepage.user.name}
              byline={homepage.byline}
              tags={homepage.user.tags}
            />
          );
        })}
      </Container>
    </Container>
  );
}
