"use client";
import { useState } from "react";
// import { Title } from "../app/components/Title/title.js";
// import { Tabs } from "../app/components/Tabs/tabs.js";
// import { Input } from "../app/components/Input/input.js";
// import { Lists } from "../app/components/List/list.js";

function Tabs() {
  return (
    <div className="tabs-container">
      <button className="tab-button" style={{ width: "38px" }}>
        All
      </button>
      <button className="tab-button" style={{ width: "60px" }}>
        Active
      </button>
      <button className="tab-button" style={{ width: "87px" }}>
        Completed
      </button>
    </div>
  );
}

function Lists() {
  const list = saveinputvalue.map(
    (each,index ) => (
      <li key={index}>
        {each}
        <button onClick></button>
      </li>
    )
  );

  return (
    <div className="lists">
      <ul className="eachlist">{list}</ul>
    </div>
  );
}

function Input() {
  const [inputtext, setInputtext] = useState("");
  const change = (event) => setInputtext(event.target.value);
  const [saveinputvalue, setSaveinputvalue] = useState([]);

  //ADD function
  function add() {
    if (saveinputvalue !== "" && inputtext !== "") {
      setSaveinputvalue((saveinputvalue) => [...saveinputvalue, inputtext]); //saveinputvalue = array
    }
    setInputtext("");
Lists()
  }

  return (
    <div className="inputsection">
      <div className="input-container">
        {" "}
        <input
          type="text"
          value={inputtext}
          onChange={change}
          placeholder="Add a new task..."
        ></input>
      </div>
      <button className="addbutton" onClick={add}>
        Add
      </button>
    </div>
  );
}

function Title() {
  return (
    <>
      <div className="title">To do list</div>
    </>
  );
}

export default function Home(props) {
  return (
    <div className="pages">
      <div className="to-do-list-container">
        <Title></Title>
        <Input></Input>
        <Tabs>
          <Lists></Lists>
        </Tabs>
      </div>
    </div>
  );
}
