import React from "react";
import { connect } from "react-redux";
import "./props.css";
import ButtonMFS from "./ButtonMF_Show"

const styleLine = {
  textDecoration: "line-through"
};

const styleNone = {
  textDecoration: "none"
};
var fillAllType = (arr, type) => {
  switch (type) {
    case "SHOW_ALL":
      return arr;
    case "SHOW_MEMORIZED":
      return arr.filter(x => x.memorized === true);
    case "SHOW_PARTICE":
      return arr.filter(x => x.memorized === false);
    default:
      break;
  }
};
var Word = props => {
  return (
    <div className="arrWord">
      {fillAllType(props.data,props.typeFill).map(x => (
        <div
          className="Word"
          key={x.id}
        >
          <p style={x.memorized === true ? styleLine : styleNone}>{x.vn}</p>
          <p>{x.isShow === true ?`${x.en}`:"------"}</p>
          <ButtonMFS id={x.id} show={x.isShow} memorized={x.memorized}/>
        </div>
      ))}
    </div>
  );
};

var madeStateToProps = state => {
  return { data: state.data,typeFill:state.fillterAll };
};
export default connect(madeStateToProps)(Word);
