import { useState } from "react";

function Listgroup() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  // Hook: is a function that allows you to "hook into" React features. The useState hook allows you to add state to a functional component.
  // It returns an array with two elements: the current state value and a function to update that value.
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li 
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
            key={item} 
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Listgroup;
