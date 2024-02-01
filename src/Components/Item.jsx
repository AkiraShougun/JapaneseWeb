// design of story card
import React from "react";

const Item = ({ title, id, picture }) => {
  const details = (id) => {
    console.log(id);
  };


// The h6 tags are arbitrary depending on the story type itself


  return (
    <article className="flex flex-col max-w-36 ml-5 mb-5 border border-black" onClick={() => details(id)}>
      <img className=" cursor-pointer" src={picture} alt={title}></img>

      <div className="grid grid-cols-2 text-center mt-1 gap-1">
        
        <h6 className="border border-black p-1">Manga</h6>
        <h6 className="border border-black p-1">Completed</h6>
      </div>
      <h3 className=" text-center">{title}</h3>
    </article>
  );
};

export default Item;
