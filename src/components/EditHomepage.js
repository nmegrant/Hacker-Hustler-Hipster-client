import React, { useState } from "react";
// import Geocode from "react-geocode";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";

export default function EditHomepage() {
  const [byline, setByline] = useState("");
  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");
  const [idea, setIdea] = useState(false);
  const [location, setLocation] = useState("");

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

  function submitForm(event) {
    event.preventDefault();
    console.log({ byline, experience, location, bio, idea });
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
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
                    console.log("test");
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
        <Button type="submit" onClick={submitForm}>
          Update Information
        </Button>
      </Form>
    </Container>
  );
}
