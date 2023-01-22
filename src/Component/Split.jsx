import React from "react";
import "./Split.css";
import Left from "./Left";
import Right from "./Right";
function Split(props) {
  return (
    <div >
      <div id="col-1">
        <Left datas={props.data}/>
      </div>
      <div id="col-2">
        <Right />
      </div>
    </div>
  );
}

export default Split;
