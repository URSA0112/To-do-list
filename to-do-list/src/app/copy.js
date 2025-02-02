// "use client"
// import { useState } from "react";
// import { useEffect } from "react";

// function Inputvalue() {
//   const [outputvalue, setOutputvalue] = useState([]);
//   const [inputvalue, setInputvalue] = useState("");

//   const add = () => {
//     setOutputvalue([...outputvalue, inputvalue]);
//        outputvalue.map((each, index) => <li key={index}>{each}</li>);
  
//   }

//   const clear = () => {
//     setInputvalue("")

//   }
//   return (
//     <>
//       <input type="text"
//         value={inputvalue}
//         onChange={(e) => setInputvalue(e.target.value)}
//         placeholder="add plan here">
//       </input >
//       <div>
//         <button onClick={add}>add</button>
//         <button onClick={clear}>clean</button></div>
//       <div className="display">{outputvalue}</div>


//     </>
//   )

// }

// function InputSection() {
//   return (
//     <>
//       <Inputvalue></Inputvalue>
//     </>
//   )
// }

// function List() {
//   return (
//     <>
//       <div className="eachlist">list-1
//       </div>
//       <button>X</button>
//     </>
//   )
// }

// function Lists() {
//   return (
//     <>
//       <div className="lists"> lists
//         <List></List>
//       </div>
//     </>

//   )
// }

// function ListSection() {
//   return (<>
//     <div className="list-container">list container
//       <Lists></Lists>
//     </div>
//   </>
//   )
// }



// export default function Home() {

//   return (
//     <>
//       <div className="to-do-list-container">
//         <InputSection></InputSection>
//         <ListSection></ListSection>
//       </div>
//     </>)
// }