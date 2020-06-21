import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";

import HomepageCard from "../../components/HomepageCard";
import Badge from "react-bootstrap/Badge";

import "./Homepages.css";

import {
  fetchHomepagesThunkCreator,
  fetchFilteredHomepageThunkCreator,
} from "../../store/homepages/actions";
import { fetchSkillsThunkCreator } from "../../store/skills/actions";
import { selectHomepages } from "../../store/homepages/selectors";
import { selectSkills } from "../../store/skills/selectors";

import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Homepages() {
  const dispatch = useDispatch();
  const homepages = useSelector(selectHomepages());

  const [searchSkill, setSearchSkill] = useState([]);
  const [searchSkills, setSearchSkills] = useState([]);
  const skillList = useSelector(selectSkills()).map((skill) => skill.skill);

  const [role, setRole] = useState("");
  const [idea, setIdea] = useState(null);

  useEffect(() => {
    dispatch(fetchHomepagesThunkCreator());
    dispatch(fetchSkillsThunkCreator());
  }, [dispatch]);

  function submitSearchSkill(event) {
    event.preventDefault();
    setSearchSkills([...searchSkills, ...searchSkill]);
    setSearchSkill([]);
  }

  function submitSearch(event) {
    event.preventDefault();
    dispatch(fetchFilteredHomepageThunkCreator(searchSkills, role, idea));
    setSearchSkills([]);
    setRole("");
    setIdea(null);
  }

  function submitSeeAll(event) {
    event.preventDefault();
    dispatch(fetchHomepagesThunkCreator());
    setSearchSkills([]);
    setRole("");
    setIdea(null);
  }

  return (
    <Container>
      {/* <Row> */}
      <Form as={Row}>
        <Form.Group controlId="formGroupSkills" style={{ margin: "10px" }}>
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
            variant="info"
          >
            Filter By Skills
          </Button>
        </Form.Group>
        <Form.Group controlId="formBasicRole" style={{ margin: "10px" }}>
          <Form.Label>Looking for a Hacker, Hipster, or Hustler?</Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                name="Role"
                label="Hacker"
                type={type}
                id={`inline-${type}-1`}
                value="Hacker"
                onChange={(event) => setRole(event.target.value)}
              />
              <Form.Check
                name="Role"
                inline
                label="Hustler"
                type={type}
                id={`inline-${type}-2`}
                value="Hustler"
                onChange={(event) => setRole(event.target.value)}
              />
              <Form.Check
                name="Role"
                inline
                label="Hipster"
                type={type}
                id={`inline-${type}-3`}
                value="Hipster"
                onChange={(event) => setRole(event.target.value)}
              />
            </div>
          ))}
        </Form.Group>
        <Form.Group controlId="formBasicIdea" style={{ margin: "10px" }}>
          <Form.Label>
            Have an idea and need skilled people? Or skilled person looking for
            a team?
          </Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                name="Idea"
                label="I have an idea"
                type={type}
                id={`inline-${type}-1`}
                value={true}
                onChange={(event) => setIdea(event.target.value)}
              />
              <Form.Check
                name="Idea"
                inline
                label="I don't have an idea"
                type={type}
                id={`inline-${type}-2`}
                value={false}
                onChange={(event) => setIdea(event.target.value)}
              />
            </div>
          ))}
        </Form.Group>
      </Form>
      <Col>
        {searchSkills
          ? searchSkills.map((skill, index) => (
              <Badge
                as={Button}
                onClick={() =>
                  setSearchSkills([...searchSkills.filter((s) => s !== skill)])
                }
                pill
                variant="info"
                style={{ marginLeft: "5px", marginRight: "5px" }}
                key={index}
                className="skillsBadges"
              >
                {skill}
              </Badge>
            ))
          : null}
        {searchSkills.length > 0 ? (
          <p>Click on a skill to remove it from the search</p>
        ) : null}
      </Col>
      <Button onClick={submitSearch} className="filter">
        Filter
      </Button>
      <Button onClick={submitSeeAll} className="seeAll">
        See All
      </Button>
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
