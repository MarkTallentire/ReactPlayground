import "./App.css";
import React, { useState } from "react";

function App() {
  const [active, setActive] = useState(0);

  const panels = [
    {
      background:
        "'https://images.unsplash.com/photo-1606762803100-5b4833aaccc0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1633&q=80'",
      title: "Explore the World",
    },
    {
      background:
        "'https://images.unsplash.com/photo-1606698235008-0b44ca6f7594?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1658&q=80'",
      title: "Meet Nature",
    },
    {
      background:
        "'https://images.unsplash.com/photo-1514125989062-f7531e2bece3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'",
      title: "Swim with Dolphins",
    },
    {
      background:
        "'https://images.unsplash.com/photo-1518840801558-9770b4a34eeb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80'",
      title: "Waddle Along",
    },
    {
      background:
        "'https://images.unsplash.com/photo-1519939040527-1753e8b6b9d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1656&q=80'",
      title: "Meet Dangerous Beasts",
    },
    {
      background:
        "'https://images.unsplash.com/photo-1543201245-c9031909fe6f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'",
      title: "And some not so dangerous ones.",
    },
  ];

  return (
    <div className="container">
      {panels.map((panel, index) => (
        <div
          onClick={() => setActive(index)}
          className={`panel ${active === index && "active"}`}
          style={{
            backgroundImage: `url(${panel.background})`,
          }}
        >
          <h3>{panel.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
