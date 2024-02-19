import React from "react";
import "./css/exptree.css";
import "./../Components/componentStyles/tree.css";
import Tree from "../Components/Tree";

const waitsec = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};

const handleSubmit = async () => {
  window.scrollBy(0, 1000);
  // let numarray = numbers.split();
  // console.log(numarray);
  for (let i = 1; i <= 15; i++) {
    if (i == 2) {
      for (let n = 1; n <= 2; n++) {
        document.getElementById("divider" + n).style.display = "block";
        console.log("divider" + n);
        await waitsec();
      }
    } else if (i == 7) {
      for (let n = 3; n <= 6; n++) {
        document.getElementById("divider" + n).style.display = "block";
        console.log("divider" + n);
        await waitsec();
      }
    } else if (i == 15) {
      for (let n = 7; n <= 14; n++) {
        document.getElementById("divider" + n).style.display = "block";
        console.log("divider" + n);
        await waitsec();
      }
    }
    document.getElementById("n" + i).style.display = "flex";
    await waitsec();
  }
};

function ExpressionTree() {
  return (
    <>
      <div className="main-div">
        <div className="headingdiv">
          <h2 className="main_heading" id="head">
            Expression Tree
          </h2>
        </div>
        <div className="input-div">
          <label style={{ alignSelf: "flex-start" }} className="main_label">
            Enter Expression
          </label>
          <input className="expinput" maxLength={15} />
          <label className="warning_label">*Maximum characters 15</label>
          <div className="buttons_div">
            <button
              onClick={handleSubmit}
              title="Submit"
              name="Submit"
              className="submitbtn">
              Submit
            </button>
            <button title="Submit" name="clear" className="clearbtn">
              Clear
            </button>
          </div>
        </div>
        <hr />
        <Tree />
      </div>
    </>
  );
}

export default ExpressionTree;
