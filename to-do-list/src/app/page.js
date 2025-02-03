"use client";
import { useState } from "react";
import { useEffect } from "react";
const inputvalues = [
  {
    key: 1, //(any)address for map , identify , search , find , ....
    text: "take a shower", //(text)inputvalue
    done: false, //(boolean)status ... for change
  },
  {
    key: 2,
    text: "ayga ugaah",
    done: false,
  },

];
export default function Home() {
  const [inputtext, setInputtext] = useState("");
  const change = (event) => setInputtext(event.target.value);
  const [lists, setLists] = useState(inputvalues);
  const dynalist = lists.map((each) => <li>{each.text}</li>);

  //const dynalists = lists.map((each)=>{return each})
  function add() {
    return console.log(dynalist);
  }
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
        <div className="lists"style={{ display: "flex", width: "100%", gap: "20px" }}>
          <div className="eachlist-container">{dynalist}</div>
          <button className="">X</button>
        </div>
      </div>
    </>
  );
}
