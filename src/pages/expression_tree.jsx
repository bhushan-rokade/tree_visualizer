import React, { useState } from "react";
import "./css/exptree.css";
import "./../Components/componentStyles/tree.css";
import Tree from "../Components/EXTree";
import "./css/popup.css";
const waitsec = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });
};

function ExpressionTree() {
  const [traversalString, setString] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const bstArray = [8, 3, 1, 6, 4, 7, 10, 14, 13];
  const handleSubmit = async () => {
    window.scrollBy(0, 1000);
    document.getElementById("intro_bst").style.display = "flex";
    document.getElementById("bst_operations").style.display = "flex";

    for (let i = 1; i <= 7; i++) {
      if (i == 2) {
        for (let n = 1; n <= 2; n++) {
          document.getElementById("divider" + n).style.visibility = "initial";
          await waitsec();
        }
      } else if (i == 5) {
        for (let n = 3; n <= 4; n++) {
          document.getElementById("divider" + n).style.visibility = "initial";
          document.getElementById("divider" + n).style.visibility = "initial";
          await waitsec();
        }
      } else if (i == 7) {
        for (let n = 5; n <= 6; n++) {
          document.getElementById("n" + i).style.visibility = "initial";
          document.getElementById("divider" + n).style.visibility = "initial";
          await waitsec();
        }
      }
      if (i < 15 || i == 7) {
        document.getElementById("n" + i).style.visibility = "initial";
      }
      await waitsec();
    }
    document.getElementById("evaluatebtn").style.display = "block";
  };
  const handleEvaluate = () => {
    document.getElementById("modal").style.display = "block";
    document.querySelector(".main-div").classList.add("blur-main");
  };
  const closeModal = () => {
    document.getElementById("modal").style.display = "none";
    document.querySelector(".main-div").classList.remove("blur-main");
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
                <button
                  id="prefix_traversal"
                  onClick={() => {
                    setString("Preorder : ");
                  }}>
                  Preorder
                </button>
                <button
                  id="infix_traversal"
                  onClick={() => {
                    setString("Inorder : ");
                  }}>
                  Inorder
                </button>
                <button
                  id="postfix_traversal"
                  onClick={() => {
                    setString("Postorder : ");
                    console.log(traversalString);
                  }}>
                  Postorder
                </button>
              </div>
            </div>
          </div>
          <hr style={{ width: "100%" }} />

          <div id="input_div">
            <div id="inner_inputdiv">
              <button
                id="evaluatebtn"
                onClick={handleEvaluate}
                style={{ display: "none" }}>
                Evaluate
              </button>
            </div>
          </div>
        </div>
        <Tree />
        <div id="string_div">
          <h2 id="traversal_string">{traversalString}</h2>
        </div>
        <div id="modal">
          <div className="controls">
            <button
              id="closebtn"
              onClick={() => {
                closeModal();
              }}>
              X
            </button>
          </div>
          <div className="content">
            <h5>Enter values for:</h5>
          </div>
          <div className="inputs">
            <div className="inner_field">
              <h2>A :</h2>
              <input className="input" placeholder="enter value" />
            </div>
            <div className="inner_field">
              <h2>B :</h2>
              <input className="input" placeholder="enter value" />
            </div>
            <div className="inner_field">
              <h2>C :</h2>
              <input className="input" placeholder="enter value" />
            </div>
            <div className="inner_field">
              <h2>D :</h2>
              <input className="input" placeholder="enter value" />
            </div>
          </div>
          <div className="submit-div">
            <button className="submiteval">Sumbit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpressionTree;
