"use client";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {

  const [inputtext, setInputtext] = useState("");
  const change = (event) => setInputtext(event.target.value);
  const [saveinputvalue, setSaveinputvalue] = useState([])



  function add() {
    if (saveinputvalue !== "")
      setSaveinputvalue((saveinputvalue) => [...saveinputvalue, inputtext])
    return console.log(saveinputvalue)
  }
  const list = saveinputvalue.map((each,index) => <li key={index}>{each}<button className="">X</button></li>)
 


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
        <div className="lists" style={{ display: "flex", width: "100%", gap: "20px" }}>
          <ul className="eachlist">
            {list}
          </ul>

        </div>
      </div>
    </>
  );
}
