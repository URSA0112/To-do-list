export function Input(props) {
  return (
    <div className="inputsection">
      <div className="input-container">
        <input className ="inputtext" type="text" value = {props.inputvalue} onChange={props.change} placeholder="Add a new task..."
        onKeyDown={props.insert}
        ></input>
      </div>
      <button className="addbutton" onClick={props.add} >
        Add
      </button>
    </div>
  );
}
