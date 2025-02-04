export function Input(props) {
  return (
    <div className="inputsection">
      <div className="input-container">
        {" "}
        <input
          type="text"
          value={props.inputtext}
          onChange={props.change}
          placeholder="Add a new task..."
        ></input>
      </div>
      <button className="addbutton">Add</button>
    </div>
  );
}
