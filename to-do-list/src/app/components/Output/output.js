export function Output(props) {
  return (
    <>
      <div className="tabs-container">
        <button 
        onClick={props.all} style={{ width: "38px" }}>
          All
        </button>
        <button 
        onClick={props.active} style={{ width: "60px" }}>
          Active
        </button>
        <button 
        onClick={props.completed}style={{ width: "87px" }}>
          Completed
        </button>
        <button className="" onClick={props.deleteAll}style={{ width: "87px" }}>
         Delete all
        </button>
      </div>
      <div className="lists">
        <span className="list">{props.lists}</span>
      </div>
    </>
  );
}
