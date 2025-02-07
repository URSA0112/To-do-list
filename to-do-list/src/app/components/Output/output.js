export function Output(props) {
  return (
    <>
      <div className="tabs-container">
        <button className={props.filter === "all" ? "activebtn" : ""}
        onClick={props.all} style={{ width: "38px" }}>
          All
        </button>
        <button className={props.filter === "active" ? "activebtn" : ""}
        onClick={props.active} style={{ width: "60px" }}>
          Active
        </button>
        <button className={props.filter === "completed" ? "activebtn" : ""}
        onClick={props.completed}style={{ width: "87px" }}>
          Completed
        </button>
        <button className="delete-allbtn"
        onClick={props.deleteAll}style={{ width: "87px" }}>
         Delete all
        </button>
      </div>
      <div className="lists">
        <ul className="list">{props.lists}</ul>
      </div>
    </>
  );
}
