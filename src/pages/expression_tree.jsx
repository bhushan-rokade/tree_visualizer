import React from "react";
import "./css/exptree.css";
import "./css/tree.css";

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
        <div className="tree">
          <div className="row">
            <div className="node">1</div>
          </div>
          <div className="divider_div">
            <div className="row_divider_left" />
            <div className="row_divider_right" />
          </div>

          <div className="row">
            <div className="node">2</div>
            <div className="node">3</div>
          </div>
          <div className="divider_div2">
            <div className="row_divider_left3" />
            <div className="row_divider_right3" />
            <div className="row_divider_left4" />
            <div className="row_divider_right4" />
          </div>
          <div className="row">
            <div className="node">4</div>
            <div className="node">5</div>
            <div className="node">6</div>
            <div className="node">7</div>
          </div>
          <div className="row">
            <div className="node">8</div>
            <div className="node">9</div>
            <div className="node">10</div>
            <div className="node">11</div>
            <div className="node">12</div>
            <div className="node">13</div>
            <div className="node">14</div>
            <div className="node">15</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpressionTree;
