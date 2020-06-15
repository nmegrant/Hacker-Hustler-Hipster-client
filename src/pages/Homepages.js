import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomepagesThunkCreator } from "../store/homepages/actions";
import { selectHomepages } from "../store/homepages/selectors";

export default function Homepages() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomepagesThunkCreator());
  }, [dispatch]);

  return <h1>Hello!</h1>;
}
