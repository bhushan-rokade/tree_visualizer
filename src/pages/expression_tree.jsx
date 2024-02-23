import React, { useState } from "react";
import "./css/exptree.css";
import "./../Components/componentStyles/tree.css";
import Tree from "../Components/EXTree";
const waitsec = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });
};

function ExpressionTree() {
  const bstArray = [8, 3, 1, 6, 4, 7, 10, 14, 13];
  const [numbers, setNumbers] = useState(0);
  const handleSubmit = async () => {
    window.scrollBy(0, 1000);
    document.getElementById("intro_bst").style.display = "flex";
    document.getElementById("bst_operations").style.display = "flex";

    for (let i = 1; i <= 15; i++) {
      if (i > 1) {
        document.getElementById("n" + (i - 1)).classList.remove("glow");
      }
      document.getElementById("n" + i).classList.add("glow");
      if (i == 2) {
        for (let n = 1; n <= 2; n++) {
          document.getElementById("divider" + n).style.visibility = "initial";
          console.log("divider" + n);
          await waitsec();
        }
      } else if (i == 5) {
        for (let n = 3; n <= 4; n++) {
          document.getElementById("divider" + n).style.visibility = "initial";
          document.getElementById("divider" + n).style.visibility = "initial";
          console.log("divider" + n);
          await waitsec();
        }
      } else if (i == 7) {
        for (let n = 5; n <= 6; n++) {
          document.getElementById("n" + i).style.visibility = "initial";
          document.getElementById("divider" + n).style.visibility = "initial";
          console.log("divider" + n);
          await waitsec();
        }
      }
      if (i < 15 || i == 7) {
        document.getElementById("n" + i).style.visibility = "initial";
      }
      await waitsec();
    }
  };
  return (
    <>
      <div className="main-div">
        <div className="controls_div">
          <div className="headingdiv">
            <h2 className="main_heading">Expression Tree</h2>
            <h4 className="intro_text">
              Here we have Expression A+((B+C)*D) represented in Data Structure
              Binary Tree.
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
            <h4
              className="intro_text"
              id="intro_bst"
              style={{ placeSelf: "flex-start", display: "none" }}>
              BST Traversals
            </h4>
            <div id="bst_operations" style={{ display: "none" }}>
              <div className="traversal_buttons">
                <button id="prefix_traversal">Preorder</button>
                <button id="infix_traversal">Inorder</button>
                <button id="postfix_traversal">Postorder</button>
              </div>
            </div>
          </div>
          <hr style={{ width: "100%" }} />

          <div id="input_div">
            <div id="inner_inputdiv">
              <button id="evaluatebtn">Evaluate</button>
            </div>
          </div>
        </div>
        <Tree />
      </div>
    </>
  );
}

export default ExpressionTree;
