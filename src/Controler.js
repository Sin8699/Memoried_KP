import React from "react";
import { connect } from "react-redux";
import "./props.css";
import ButtonAdd from "./ButtonAdd"

var highLine = {
  color: "black"
};
var notHighLine = {
  color: "white"
};

function Controler(props) {
  return (
    <div className="Controler_Main">
      <ButtonAdd isAdd={props.isAdd}/>
      <div className="Controler">
      <button
        style={props.fill === "SHOW_ALL" ? highLine : notHighLine}
        onClick={() => props.dispatch({ type: "SHOW_ALL" })}
      >
        SHOW ALL
      </button>
      <button
        style={props.fill === "SHOW_MEMORIZED" ? highLine : notHighLine}
        onClick={() => props.dispatch({ type: "SHOW_MEMORIZED" })}
      >
        MEMORIZED
      </button>
      <button
        style={props.fill === "SHOW_PARTICE" ? highLine : notHighLine}
        onClick={() => props.dispatch({ type: "SHOW_PARTICE" })}
      >
        NEED PARTICE
      </button>
    </div>
    </div>
    
  );
}

var madeStateToProps = state => {
  return { fill: state.fillterAll,isAdd: state.isAdding};
};
export default connect(madeStateToProps)(Controler);
