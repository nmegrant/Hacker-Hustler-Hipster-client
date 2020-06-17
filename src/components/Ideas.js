import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIdeasThunkCreator } from "../store/ideas/actions";

export default function Ideas() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIdeasThunkCreator());
  }, [dispatch]);

  return <h1>List and Add to ideas</h1>;
}
