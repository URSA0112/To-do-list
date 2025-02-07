"use client";
import { useState } from "react";
import { Title } from "./components/Title/title.js";
import { Input } from "./components/Input/input.js";
import { Output } from "./components/Output/output.js";

export default function Home() {
  const [inputtext, setInputtext] = useState("");
  const change = (event) => setInputtext(event.target.value);
  const [savedata, setSavedata] = useState([]);
  const [filter, setFilter] = useState("all");

  const filteredTasks = savedata.filter((each) => {
    if (filter === "active") return !each.done;
    if (filter === "completed") return each.done; 
    return true; 
  });

  function clickAll() {
    setFilter("all");
  }
  
  function clickActive() {
 setFilter("active")
  }
  
  function clickCompleted() {
    setFilter("completed");
  }
  

  function Togglecompleted(index) {
    const newdata = [...savedata];
    newdata[index].done = !newdata[index].done;
    setSavedata(newdata);
    console.log(newdata[index].done);
  }

  function checkIfcompleted(index) {
    const newdata = [...savedata];
    return newdata[index].done ? "completed" : "";
  }

  const list =filteredTasks.map((each, index) => {
    return (
      <div className="eachlist">
        <input
          type="checkbox"
          className="checkbutton"
          checked={each.done}
          onChange={() => Togglecompleted(index)}
        ></input>
        <li className={each.done ? "completed" : ""} key={each.id}>
          {each.text}{" "}
        </li>
        <div className="listbuttons-container">
          <button className="listbutton" onClick={() => listEdit(index)}>
         ✏️
          </button>
          <button className="listbutton" id = "eachDelete-button" onClick={() => listDelete(index)}>
🗑
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
    if (updatedlist && updatedlist !== null)
      newSavedata[index].text = updatedlist;
    setSavedata(newSavedata);
  }

  function listDelete(index) {
    if (window.confirm("ARE SURE TO DELETE YOUR LIST? ")) {
      const newSavedata = [...savedata];
      setSavedata(newSavedata.filter((each) => each.id !== savedata[index].id));
    }
  }

  const deleteAll = () => {
    if (window.confirm("Delete all tasks ?")) {
      setSavedata([]);
    }
  };

  const clickEnterForInsert = (e) => {
    if (e.code === "Enter") {
      addnewinput();
    }
  };
  return (
    <div className="pages">
      <div className="to-do-list-container">
        <Title></Title>
        <Input
          inputvalue={inputtext}
          change={change}
          add={addnewinput}
          insert={clickEnterForInsert}
        ></Input>
        <Output
          lists={list}
          deleteAll={deleteAll}
          setFilter={setFilter}
          all={clickAll}
          active={clickActive}
          completed={clickCompleted}
          filter={filter}
        ></Output>
      </div>
    </div>
  );
}
