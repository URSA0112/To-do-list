"use client"
import { useState } from "react";

function Inputvalue() {
  const [outputvalue, setOutputvalue] = useState([])
  const [inputvalue, setInputvalue] = useState("")

  const change = (event) => {
    setInputvalue(event.target.value)
  }

  outputvalue.push(inputvalue)
const show =()=>{

setOutputvalue(outputvalue)
console.log(outputvalue)
}
  return (
    <>
      <input type="text" value={inputvalue} onChange={change} placeholder="add plan here"></input>
      <button onClick={show}>show</button>
      <div className="display">{outputvalue}</div>
    </>
  )
}

function InputSection() {
  return (
    <>
      <Inputvalue></Inputvalue>
    </>
  )
}

function List() {
  return (
    <>
      <div className="eachlist">list-1
      </div>
      <button>X</button>
    </>
  )
}

function Lists() {
  return (
    <>
      <div className="lists"> lists
        <List></List>
      </div>
    </>

  )
}

function ListSection() {
  return (<>
    <div className="list-container">list container
      <Lists></Lists>
    </div>
  </>
  )
}



export default function Home() {
  return (
    <>
      <div className="to-do-list-container">
        <InputSection></InputSection>
        <ListSection></ListSection>
      </div>
    </>)
}