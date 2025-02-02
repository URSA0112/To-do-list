"use client"
import { useState } from "react";
import { useEffect } from "react";


export default function Home() {
  const [inputtext, setInputtext] = useState("")
  const change = (event) => setInputtext(event.target.value);
  const [listcontainer, setListcontainer] = useState([]);
  const [list, setList] = useState("")


  function add() {
    setListcontainer([...listcontainer,inputtext])
    console.log(listcontainer)
  }



  function clearText() {
    setInputtext("")
  }

  function deleteList() {

  }
  return (
    <>
      <div className="to-do-list-container">
        <input type="text" value={inputtext} onChange={change}></input>
        <div>
          <button onClick={add}>ADD</button>
          <button onClick={clearText}>CLEAR</button>
        </div>
        <div style={{ display: "flex", width: "100%", gap: "20px" }} >
          <div className="lists">{list}</div>  
          <button className="">X</button></div>
      </div>
    </>
  )
}