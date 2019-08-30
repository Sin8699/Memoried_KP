import React from "react";
import { connect } from "react-redux";
import "./props.css";

var ControlerSMF=(props)=> {
  return (
    <div className="ControlerShow_MF">
      <button
        onClick={() => props.dispatch({ type:"SetMemorized",index:props.id })}
      >
        {props.memorized===true?"Forget":"Memorized"}
      </button>
      <button
        onClick={() => props.dispatch({ type: "SetShow",index:props.id })}
      >
        {props.show===true?"Hide":"Show"}
      </button>
    </div>
  );
}

export default connect()(ControlerSMF);
