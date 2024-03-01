import React, { useState } from "react";
import "./css/exptree.css";
import "./../Components/componentStyles/tree.css";
import Tree from "../Components/BSTree";
import { handleSearch2 } from "../Components/Bi_Tree_functions";
const waitsec = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};

function BinaryTree() {
  const [disabled, setDisabled] = useState(false);

  const [numbers, setNumbers] = useState(0);
  const handleSubmit = async () => {
    //for displaing the binary tree
    window.scrollBy(0, 1000);
    for (let i = 1; i <= 9; i++) {
      if (i > 1) {
        document.getElementById("n" + (i - 1)).classList.remove("glow");
      }
      document.getElementById("n" + i).classList.add("glow");
      if (i == 2) {
        for (let n = 1; n <= 2; n++) {
          document.getElementById("divider" + n).style.visibility = "initial";
          await waitsec();
        }
      } else if (i == 6) {
        for (let n = 3; n <= 5; n++) {
          document.getElementById("divider" + n).style.visibility = "initial";
          document.getElementById("divider" + n).style.visibility = "initial";
          await waitsec();
        }
      } else if (i == 9) {
        for (let n = 6; n <= 8; n++) {
          document.getElementById("n" + i).style.visibility = "initial";
          document.getElementById("divider" + n).style.visibility = "initial";
          await waitsec();
          if (n == 8) {
            document.getElementById("n" + i).classList.remove("glow");
          }
        }
      }
      if (i < 15 || i == 7) {
        document.getElementById("n" + i).style.visibility = "initial";
      }
      await waitsec();
    }
  };

  const handleSearch = () => {
    const result = handleSearch2(numbers);
    if (result == 0) {
      alert("element not found");
      handleSubmit();
      setDisabled(false);
    }
  };

  const handleClear = async () => {
    location.reload();
  };
  return (
    <>
      <div className="main-div">
        <div className="controls_div">
          <div className="headingdiv">
            <h2 className="main_heading">Binary Search Tree</h2>
            <h4 className="intro_text">
              Here we have numbers [8,3,1,6,4,7,10,14,13] represented in Data
              Structure Binary Search Tree.
            </h4>
          </div>
          <div className="buttons_div">
            <label>Click To Start Tree Building</label>
            <button
              title="Submit"
              onClick={handleSubmit}
              name="Submit"
              className="buildbtn">
              Build Tree
            </button>
          </div>
          <hr style={{ width: "100%" }} />
          <div id="input_div">
            <div id="inner_inputdiv">
              <label id="searchlabel">Enter number for searching</label>
              <input
                id="search_input"
                style={{ textAlign: "center" }}
                defaultValue=""
                onChange={(e) => setNumbers(e.target.value)}
                disabled={disabled}
              />
              <div
                style={{
                  height: "70%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <button
                  id="searchbtn"
                  onClick={() => {
                    setDisabled(true);
                    handleSearch();
                  }}>
                  Search
                </button>
                <button id="clearbtn" onClick={handleClear}>
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>

        <Tree />
      </div>
    </>
  );
}

export default BinaryTree;
