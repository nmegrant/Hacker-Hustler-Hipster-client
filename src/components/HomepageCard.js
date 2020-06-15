import React from "react";
import { Link } from "react-router-dom";

export default function HomepageCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h5>{props.byline}</h5>
      {props.tags.map((tag) => {
        return (
          <div key={tag.id}>
            <p>{tag.skill}</p>
          </div>
        );
      })}
      <button>
        <Link to={`/homepages/${props.userId}`}>Show me more</Link>
      </button>
    </div>
  );
}
