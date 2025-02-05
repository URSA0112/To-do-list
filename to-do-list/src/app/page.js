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
  const [inputtext, setInputtext] = useState("");
  const change = (event) => setInputtext(event.target.value);
  const [savedata, setSavedata] = useState([]);

  const list = savedata.map((each, index) => {
    return (
      <div className="eachlist">
        <li key={each.id}>{each.text}</li>{" "}
        <div className="listbuttons-container">
          <button className="listbutton" onClick={() => listEdit(index)}>
            edit
          </button>
          <button className="listbutton" onClick={() => listDelete(index)}>
            delete
          </button>
        </div>
      </div>
    );
  });

  function addnewinput() {
    if (inputtext)
      setSavedata((savedata) => [
        ...savedata,
        { text: inputtext, id: Date.now(), done: false },
      ]);
    setInputtext("");
  }

  function listEdit(index) {
    const newSavedata = [...savedata];
    const updatedlist = prompt("EDIT YOUR LIST", newSavedata[index].text);
    if (updatedlist || updatedlist !== null)
      newSavedata[index].text = updatedlist;
    setSavedata(newSavedata);
  }

  function listDelete() {}
  return (
    <div className="pages">
      <div className="to-do-list-container">
        <Title></Title>
        <Input inputvalue={inputtext} change={change} add={addnewinput}></Input>
        <Output lists={list}></Output>
      </div>
    </div>
  );
}
