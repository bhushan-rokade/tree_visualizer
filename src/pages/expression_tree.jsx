import React from "react";
import "./css/exptree.css";

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
          <input className="expinput" maxLength={10} />
          <label className="warning_label">*Maximum characters 10</label>
          <button title="Submit" name="Submit" className="submitbtn">
            Submit
          </button>
        </div>
        <hr />
      </div>
    </>
  );
}

export default ExpressionTree;
