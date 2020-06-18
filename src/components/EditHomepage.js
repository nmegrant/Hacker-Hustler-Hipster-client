import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Geocode from "react-geocode";
import { Typeahead } from "react-bootstrap-typeahead";

import { sendHomepageInfoThunkCreator } from "../store/mypage/actions";
import { selectSkills } from "../store/skills/selectors";
import { fetchSkillsThunkCreator } from "../store/skills/actions";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";

export default function EditHomepage() {
  // const [tag, setTag] = useState("");
  // const [tags, setTags] = useState([]);
  // navigator.geolocation.getCurrentPosition(function (position) {
  //   let latitude = position.coords.latitude;
  //   let longitude = position.coords.longitude;
  //   Geocode.fromLatLng(latitude, longitude).then(
  //     (response) => {
  //       const address = response.results[0].formatted_address;
  //       console.log(address);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // });

  const dispatch = useDispatch();
  const [byline, setByline] = useState("");
  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");
  const [idea, setIdea] = useState(false);
  const [location, setLocation] = useState("");

  const [website, setWebsite] = useState("");
  const [websites, setWebsites] = useState([]);

  const [skill, setSkill] = useState([]);
  const [skills, setSkills] = useState([]);
  const skillList = useSelector(selectSkills()).map((skill) => skill.skill);

  useEffect(() => {
    dispatch(fetchSkillsThunkCreator());
  }, [dispatch]);

  function submitForm(event) {
    event.preventDefault();
    dispatch(
      sendHomepageInfoThunkCreator(
        byline,
        experience,
        bio,
        idea,
        location,
        websites,
        skills
      )
    );
    setBio("");
    setByline("");
    setExperience("");
    setLocation("");
    setWebsites([]);
    setSkills([]);
  }

  function submitWebsite(event) {
    event.preventDefault();
    setWebsites([...websites, website]);
    setWebsite("");
  }

  function submitSkill(event) {
    event.preventDefault();
    setSkills([...skills, ...skill]);
    setSkill([]);
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <Button
          variant="success"
          type="submit"
          onClick={submitForm}
          style={{ margin: "10px" }}
        >
          Update Information
        </Button>
        <Form.Group>
          <Form.Label>What are you looking for?</Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                name="lookingFor"
                label="A team to work on"
                type={type}
                id={`inline-${type}-1`}
                onChange={() => {
                  if (idea === true) {
                    setIdea(false);
                  }
                }}
              />
              <Form.Check
                name="lookingFor"
                inline
                label="People to work on my idea"
                type={type}
                id={`inline-${type}-2`}
                onChange={() => {
                  if (idea === false) {
                    setIdea(true);
                  }
                }}
              />
            </div>
          ))}
        </Form.Group>
        <Form.Group controlId="formGroupBylocation">
          <Form.Label>Where are you located?</Form.Label>
          <Form.Control
            type="text"
            placeholder="Location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formGroupByline">
          <Form.Label>Catchy Byline</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a phrase to catch people's attention!"
            value={byline}
            onChange={(event) => setByline(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formGroupSkills">
          <Form.Label>Add Skills</Form.Label>
          {/* SKILL DROP DOWN */}
          <Typeahead
            id="Add skill dropdown"
            onChange={(selected) => setSkill(selected)}
            options={skillList}
            selected={skill}
          />
          {/* SKILL DROP DOWN */}
          <Button
            type="submit"
            onClick={submitSkill}
            style={{ margin: "10px" }}
          >
            Add Skill
          </Button>{" "}
        </Form.Group>
        <Form.Group controlId="formGroupProjectsandExpereince">
          <Form.Label>Projects and Expereince</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Tell everyone about past projects and professional successes"
            value={experience}
            onChange={(event) => setExperience(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formGroupBio">
          <Form.Label>More about you</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="More about you! What makes you a great teammate?"
            value={bio}
            onChange={(event) => setBio(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formGroupWebsites" className="mt-5">
          <Form.Label>What are some websites that show your skills?</Form.Label>
          <Form.Control
            type="text"
            placeholder="Press enter to add the url your page"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button
          type="submit"
          onClick={submitWebsite}
          style={{ margin: "10px" }}
        >
          Enter Website
        </Button>
      </Form>
    </Container>
  );
}
