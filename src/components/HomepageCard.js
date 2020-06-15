import React from "react";

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
      <button>See More</button>
    </div>
  );
}
