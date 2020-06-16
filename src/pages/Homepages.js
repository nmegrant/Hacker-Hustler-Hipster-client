import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomepagesThunkCreator } from "../store/homepages/actions";
import { selectHomepages } from "../store/homepages/selectors";
import HomepageCard from "../components/HomepageCard";

import Container from "react-bootstrap/Container";

export default function Homepages() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomepagesThunkCreator());
  }, [dispatch]);

  const homepages = useSelector(selectHomepages());

  return (
    <Container>
      {homepages.map((homepage) => {
        return (
          <HomepageCard
            key={homepage.id}
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
