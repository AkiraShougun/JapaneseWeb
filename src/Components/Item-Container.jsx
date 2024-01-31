import Item from "./Item.jsx";
import data from "../data.js";
const Container = () => {
  return (
    <section>
      <div>
        {data.map((items) => {
          return <Item {...items} key={items.id} />;
        })}
      </div>
    </section>
  );
};

export default Container;
