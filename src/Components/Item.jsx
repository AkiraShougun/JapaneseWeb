// design of story card
import React from "react";

const Item = ({ title, id }) => {
  const details = (id) => {
    console.log(id);
  };

  return (
    <article onClick={() => details(id)}>
      <h3>{title}</h3>
    </article>
  );
};

export default Item;
