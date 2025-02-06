export function Output(props) {
  return (
    <>
      <div className="tabs-container">
        <button className="" onClick={props.showAll} style={{ width: "38px" }}>
          All
        </button>
        <button className="" onClick={props.showActive} style={{ width: "60px" }}>
          Active
        </button>
        <button className="" onClick={props.showCompleted}style={{ width: "87px" }}>
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
