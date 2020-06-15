import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchHomepageDetailsThunkCreator } from "../store/homepageDetails/actions";
import { selectHomepageDetails } from "../store/homepageDetails/selectors";

export default function HomepageDetails() {
  const parameters = useParams();
  const dispatch = useDispatch();
  const homepageDetail = useSelector(selectHomepageDetails());

  useEffect(() => {
    dispatch(fetchHomepageDetailsThunkCreator(parameters.homepageId));
  }, [dispatch, parameters.homepageId]);

  console.log(homepageDetail);

  return (
    <div>
      <h1>Details!!!!!</h1>
    </div>
  );
}
