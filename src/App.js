import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

  return (
    <div style={{margin:"1em"}}>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
        label="Select a color"
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
        />
        <br />
        <hr/>
        <br />
        <div><h3 style={{color:`${selected.value}`}}>This text is {selected.value}</h3></div>
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
