import React from "react";
import { connect } from "react-redux";
import "./props.css";
import { SetIsAddReducer, ADDReducer } from "./Action/actionReducer";

var hiddenAdd = {
  display: "none"
};
var showAdd = {
  visibility: "visible"
};

function ButtonAdd(props) {
  var valueVN = "";
  var valueEN = "";
  return (
    <div>
      <form style={props.isAdd === true ? showAdd : hiddenAdd}>
        <input
          type="text"
          placeholder="...Add vn"
          onChange={e => (valueVN = e.target.value)}
        />
        <input
          type="text"
          placeholder="...Add en"
          onChange={e => (valueEN = e.target.value)}
        />
        <input
          type="submit"
          onClick={e => {
            e.preventDefault();
            props.ADD(valueEN, valueVN);
          }}
        />
      </form>
      <button className="buttonAdd" onClick={() => props.SetIsAdd()}>
        {props.isAdd === true ? "-" : "+"}
      </button>
    </div>
  );
}

export default connect(
  null,
  { ADD: ADDReducer, SetIsAdd: SetIsAddReducer }
)(ButtonAdd);
