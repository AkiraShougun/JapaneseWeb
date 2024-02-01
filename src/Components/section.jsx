import React from 'react'
import Item from "./Item.jsx";
import data from "../data.js";

const Section = (props) => {
  return (
    <section className='border-solid border-2 border-sky-500 overflow-hidden'>
        <h1 className='text-center'>{props.header}</h1>
        <div className="flex">
          {data.map((items) => {
          return <Item {...items} key={items.id} />;
          })}
        </div>
    </section>
  )
}

export default Section