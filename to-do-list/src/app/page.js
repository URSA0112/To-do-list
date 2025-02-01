"use client"
import { useState } from "react";

function Inputvalue() {
  let display = []
  const [value, setValue] = useState("")
  const change = (event) => {
    setValue(event.target.value)
  }
  const output = () => { display.push(value) }
  const click = () => {
    alert(value)
  }

  return (
    <>
      <input type="text" value={value} onChange={change} placeholder="add plan here"></input>
      <button onClick={click}>add</button>
      <div className="display" >{change}</div>
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
        <ListSection></ListSection></div>
    </>)
}