"use client";
import { useState } from "react";
// import { Title } from "../app/components/Title/title.js";
// import { Tabs } from "../app/components/Tabs/tabs.js";
// import { Input } from "../app/components/Input/input.js";
// import { Lists } from "../app/components/List/list.js";

export default function Home(props) {
  const [saveinputvalue, setSaveinputvalue] = useState([]);
  
  return (
    <div className="pages">
      <div className="to-do-list-container">
        <Title></Title>
        <Input></Input>
        <Output></Output>
      </div>
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
//--------
function Input() {

  //ADD function
  function add() {
    if (savedinputvalue !== "" && inputtext !== "") {
      setSaveinputvalue((savedinputvalue) => [...savedinputvalue, inputtext]); //savedinputvalue = array
    setInputtext(""); }
    const list = savedinputvalue.map((each, index) => (            //list = array 
      <li key={index}>
        {each}
        <button onClick>X</button>
      </li>
    ));
  
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
//--------
function Lists() {
  return (
    <div className="lists">
      <ul className="eachlist">{list}</ul>
    </div>
  );
}
//--------
function Output() {
  return (<>
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
    <Lists></Lists>
    </>
  );
}
