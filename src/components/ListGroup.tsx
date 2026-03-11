import { useState } from "react";

// passing data via props: Props are a way to pass data from a parent component to a child component in React. 
// { items: [], heading: string }

interface ListgroupProps { //Security feature for this component, it will be expected to be used 
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void //This prop is a function for an Event, that has a parameter of type string and returns void
}

function Listgroup({items, heading, onSelectItem}: ListgroupProps) { //The code will use ListgroupProps as a rule. This is the non-destructured (worst) version of props: props: ListgroupProps
  // Hook: is a function that allows you to "hook into" React features. The useState hook allows you to add state to a functional component.
  // It returns an array with two elements: the current state value and a function to update that value.
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li 
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
            key={item} 
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Listgroup;
