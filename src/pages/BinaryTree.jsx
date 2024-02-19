import React from "react";
import "./css/exptree.css";
import "./../Components/componentStyles/tree.css";
import Tree from "../Components/Tree";
const handleSubmit = () => {
  window.scrollBy(0, 1000);
};

function BinaryTree() {
  return (
    <>
      <div className="main-div">
        <div className="headingdiv">
          <h2 className="main_heading">Binary Search Tree</h2>
        </div>
        <div className="input-div">
          <label style={{ alignSelf: "flex-start" }} className="main_label">
            Enter Numbers
          </label>
          <input className="expinput" type="number" maxLength={15} />
          <label className="warning_label">*Maximum Numbers 15</label>
          <button
            onClick={handleSubmit}
            title="Submit"
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

export default BinaryTree;
