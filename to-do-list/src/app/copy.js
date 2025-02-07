// "use client";
// import { useState } from "react";
// import { Title } from "./components/Title/title.js";
// import { Input } from "./components/Input/input.js";
// import { Output } from "./components/Output/output.js";

// export default function Home() {
//   const [inputtext, setInputtext] = useState("");
//   const change = (event) => setInputtext(event.target.value);
//   const [savedata, setSavedata] = useState([]);


//   const list = savedata.map((each, index) => {
//     return (
//       <div className="eachlist">
//         <li key={each.id}>
//           {each.text}
//           <div className="listbuttons-container">
//             <input
//               type="checkbox"
//               className="checkbutton"
//               onClick={ischecked}
//               onChange={(e) => ischecked(e.target.checked)}
//             ></input>
//             <button className="listbutton" onClick={() => listEdit(index)}>
//               edit
//             </button>
//             <button className="listbutton" onClick={() => listDelete(index)}>
//               delete
//             </button>
//           </div>
//         </li>
//       </div>
//     );
//   });

//   function addnewinput() {
//     if (inputtext)
//       setSavedata((savedata) => [
//         ...savedata,
//         { text: inputtext, id: Date.now(), done: false },
//       ]);
//     setInputtext("");
//   }

//   function listEdit(index) {
//     const newSavedata = [...savedata];
//     const updatedlist = prompt("EDIT YOUR LIST", newSavedata[index].text);
//     if (updatedlist && updatedlist !== null)
//       newSavedata[index].text = updatedlist;
//     setSavedata(newSavedata);
//   }

//   function listDelete(index) {
//     if (window.confirm("ARE SURE TO DELETE YOUR LIST? ")) {
//       const newSavedata = [...savedata];
//       setSavedata(newSavedata.filter((each) => each.id !== savedata[index].id));
//     }
//   }

//   const all = () => {};
//   const active = () => {};
//   const completed = () => {};

//   const deleteAll = () => {
//     if (window.confirm("Delete all tasks ?")) {
//       setSavedata([]);
//     }
//   };

//   const clickEnterForInsert = (e) => {
//     if (e.code === "Enter") {
//       addnewinput();
//     }
//   };
//   return (
//     <div className="pages">
//       <div className="to-do-list-container">
//         <Title></Title>
//         <Input
//           inputvalue={inputtext}
//           change={change}
//           add={addnewinput}
//           insert={clickEnterForInsert}
//         ></Input>
//         <Output
//           lists={list}
//           showAll={all}
//           showActive={active}
//           showCompleted={completed}
//           deleteAll={deleteAll}
//         ></Output>
//       </div>
//     </div>
//   );
// }
