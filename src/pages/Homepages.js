import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomepagesThunkCreator } from "../store/homepages/actions";
import { selectHomepages } from "../store/homepages/selectors";
import HomepageCard from "../components/HomepageCard";

export default function Homepages() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomepagesThunkCreator());
  }, [dispatch]);

  const homepages = useSelector(selectHomepages());

  return (
    <div>
      {homepages.map((homepage) => {
        return (
          <HomepageCard
            key={homepage.id}
            userId={homepage.user.id}
            name={homepage.user.name}
            byline={homepage.byline}
            tags={homepage.user.tags}
          />
        );
      })}
    </div>
  );
}
