"use client";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [inputtext, setInputtext] = useState("");
  const change = (event) => setInputtext(event.target.value);
  const [saveinputvalue, setSaveinputvalue] = useState([]);

 

  function add() {
    if (saveinputvalue !== "" && inputtext !== "") {
      setSaveinputvalue((saveinputvalue) => [...saveinputvalue, inputtext]);  //saveinputvalue = array
    }
    setInputtext("");
    return console.log(saveinputvalue);
  }
  const list = saveinputvalue.map((each, index) => (            //list = array 
    <li key={index}>
      {each}
      <button onClick></button>
    </li>
  ));

  function clearText() {
    setInputtext("");
  }

  return (
    <>
      <div className="to-do-list-container">
        <input type="text" value={inputtext} onChange={change}></input>
        <div>
          <button onClick={add}>ADD</button>
          <button onClick={clearText}>CLEAR</button>
        </div>
        <div className="lists">
          <ul className="eachlist">{list}</ul>
        </div>
      </div>
    </>
  );
}
