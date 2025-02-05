"use client";
import { useState } from "react";
import { Title } from "./components/Title/title.js";
import { Input } from "./components/Input/input.js";
import { Output } from "./components/Output/output.js";

// const data = [{
//   key : 1,
//   text:"hicheeel hii ",
//   done: false,
// }]

export default function Home() {
  const [inputvalue, setInputvalue] = useState("");
  const change = (event) => setInputvalue(event.target.value);
  const [savedinputvalue, setSavedinputvalue] = useState([]);

  function addnewinput() {
    if (inputvalue)
      setSavedinputvalue([...savedinputvalue, { text: inputvalue, done: false, id: Date.now() }]);

  }
  const inputTexts = savedinputvalue.map((each) => { return <li key={each.id}>{each.text}</li> })


  return (
    <div className="pages">
      <div className="to-do-list-container">
        <Title></Title>
        <Input value={inputvalue} change={change} add={addnewinput}></Input>
        <Output list={inputTexts}></Output>
      </div>
    </div>
  );
}
