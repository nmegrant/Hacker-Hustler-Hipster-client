import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchHomepageDetailsThunkCreator } from "../store/homepageDetails/actions";

export default function HomepageDetails() {
  const parameters = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomepageDetailsThunkCreator(parameters.homepageId));
  }, [dispatch, parameters.homepageId]);

  return (
    <div>
      <h1>Details!!!!!</h1>
    </div>
  );
}
