import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIdeasThunkCreator } from "../store/ideas/actions";
import { selectIdeas } from "../store/ideas/selector";

export default function Ideas() {
  const dispatch = useDispatch();

  const ideas = useSelector(selectIdeas());
  console.log(ideas);

  useEffect(() => {
    dispatch(fetchIdeasThunkCreator());
  }, [dispatch]);

  return <h1>List and Add to ideas</h1>;
}
