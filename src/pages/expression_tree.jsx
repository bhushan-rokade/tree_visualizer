import React from "react";
import "./css/exptree.css";
import "./../Components/componentStyles/tree.css";
import Tree from "../Components/Tree";
const handleSubmit = () => {
  window.scrollBy(0, 1000);
};

function ExpressionTree() {
  return (
    <>
      <div className="main-div">
        <div className="headingdiv">
          <h2 className="main_heading">Expression Tree</h2>
        </div>
        <div className="input-div">
          <label style={{ alignSelf: "flex-start" }} className="main_label">
            Enter Expression
          </label>
          <input className="expinput" maxLength={15} />
          <label className="warning_label">*Maximum characters 15</label>
          <button
            title="Submit"
            onClick={handleSubmit}
            name="Submit"
            className="submitbtn">
            Submit
          </button>
        </div>
        <hr />
        <Tree />
      </div>
    </>
  );
}

export default ExpressionTree;
