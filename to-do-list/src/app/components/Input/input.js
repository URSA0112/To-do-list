export function Input(props) {
  return (
    <div className="inputsection">
      <div className="input-container">
        <input type="text" value = {props.inputvalue} onChange={props.change} placeholder="Add a new task..."></input>
      </div>
      <button className="addbutton" onClick={props.add} >
        Add
      </button>
    </div>
  );
}
