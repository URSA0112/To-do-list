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
  const [inputvalue, setInputvalue] = useState();
  const change = (event) => setInputvalue(event.target.value);
  const [saveinputvalue, setSaveinputvalue] = useState([]);

  function addnewinput() {
   
    if (inputvalue) {
      setSaveinputvalue([...saveinputvalue, {text:inputvalue}]);
      setInputvalue("");
   
    }  
    const eachlist =saveinputvalue.map(each=>each)
    console.log(eachlist)

  }
  
  // const list = saveinputvalue.map((each, index) => {

  //   return (
  //     <li key={index}>
  //       {each}
  //       <div>
  //         <button>edit</button>
  //         <button>delete</button>
  //       </div>
  //     </li>
  //   );
  // });

  return (
    <div className="pages">
      <div className="to-do-list-container">
        <Title></Title>
        <Input inputtext={inputvalue} change={change} add={addnewinput}></Input>
        <Output ></Output>
      </div>
    </div>
  );
}
