import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React?",
    content:
      "React is front end web development framework (technically a library)",
  },
  {
    title: "Why use React?",
    content:
      "React provides for reusability and performance with minimal overhead",
  },
  {
    title: "How do you use React?",
    content: "You use React components in combination with html/css/javascript",
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
]

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropDown, setShowDropDown] = useState(true);

  return (
    <div>
      <button style={{margin:"1em"}} onClick={()=>setShowDropDown(!showDropDown)}>Toggle Dropdown</button>
      { showDropDown ?
        <Dropdown 
        selected={selected}
        onSelectedChange={setSelected}
        options={options} />
        : null
      }
    </div>
  );
};
