import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomepagesThunkCreator } from "../store/homepages/actions";
import { selectHomepages } from "../store/homepages/selectors";
import HomepageCard from "../components/HomepageCard";

// import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";

export default function Homepages() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomepagesThunkCreator());
  }, [dispatch]);

  const homepages = useSelector(selectHomepages());

  return (
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
  );
}
