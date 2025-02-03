"use client";
import { useState } from "react";
import { useEffect } from "react";
const plan2 = {
  key: 2,
  text: "cook",
  done: true,
}
const inputvalues = [
  {
    key: 1, //(any)address for map , identify , search , find , ....
    text: "take a shower", //(text)inputvalue
    done: false, //(boolean)status ... for change
  },

];
export default function Home() {
  const [inputtext, setInputtext] = useState("");
  const change = (event) => setInputtext(event.target.value);
  const [lists, setLists] = useState(inputvalues);

  const dynalist = lists.map((each, index) => <li key={index}>{each.text}</li>);
  //const dynalists = lists.map((each)=>{return each})
  function add() {

 inputvalues.push(plan2)
  
 console.log(lists.index)
    return
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
        <div className="lists" style={{ display: "flex", width: "100%", gap: "20px" }}>
          <ul className="eachlist-container">{dynalist}</ul>
          <button className="">X</button>
        </div>
      </div>
    </>
  );
}
