import React from "react";

function NumbersTable(props) {
  const numArr = [];
  for (let i = props.limit; i > 0; i--) {
    numArr.unshift(i);
  }
  const styleNumber = {};
  return (
    <div className="allNumbers">
      {numArr.map((value, i) => {
        let par = false;
        if (value % 2 !== 0) {
          par = true;
        }
        return (
          <div
            className="singleNumber"
            style={
              par ? { backgroundColor: "white" } : { backgroundColor: "red" }
            }
          >
            <h1>{value}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default NumbersTable;
