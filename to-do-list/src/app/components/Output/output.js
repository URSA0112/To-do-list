export function Output(props) {
  return (
    <>
      <div className="tabs-container">
        <button className=" "
         onClick={props.activebutton}
        style={{ width: "38px" }}>
          All
        </button>

        <button className=""

        style={{ width: "60px" }}>
          Active
        </button>

        <button className=""

        style={{ width: "87px" }}>
          Completed
        </button>
      </div>
      <div className="lists">
        <ul className="eachlist">{props.lists}</ul>
        
      </div>
    </>
  );
}
