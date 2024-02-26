import React, { useState } from "react";
import "./css/exptree.css";
import "./../Components/componentStyles/tree.css";
import Tree from "../Components/BSTree";
const waitsec = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};

function BinaryTree() {
  const [disabled, setDisabled] = useState(false);

  //node structures or objects
  const n1 = {
    name: "n1",
    value: 8,
    left_divider: "divider1",
    right_divider: "divider2",
    left_node: "n2",
    right_node: "n3",
  };
  const n2 = {
    name: "n2",
    value: 3,
    left_divider: "divider3",
    right_divider: "divider4",
    left_node: "n4",
    right_node: "n5",
  };
  const n3 = {
    name: "n3",
    value: 10,
    left_divider: null,
    right_divider: "divider5",
    left_node: null,
    right_node: "n6",
  };
  const n4 = {
    value: 1,
    left_divider: null,
    right_divider: null,
    left_node: null,
    right_node: null,
    name: "n4",
  };
  const n5 = {
    name: "n5",
    value: 6,
    left_divider: "divider6",
    right_divider: "divider7",
    left_node: "n7",
    right_node: "n8",
  };
  const n6 = {
    name: "n6",
    value: 14,
    left_divider: "divider8",
    right_divider: null,
    left_node: "n9",
    right_node: null,
  };
  const n7 = {
    name: "n7",
    value: 4,
    left_divider: null,
    right_divider: null,
    left_node: null,
    right_node: null,
  };
  const n8 = {
    name: "n8",
    value: 7,
    left_divider: null,
    right_divider: null,
    left_node: null,
    right_node: null,
  };
  const n9 = {
    name: "n9",
    value: 13,
    left_divider: null,
    right_divider: null,
    left_node: null,
    right_node: null,
  };
  //binding the nodes of the tree for performing searching
  n1.left_node = n2;
  n1.right_node = n3;
  n2.left_node = n4;
  n2.right_node = n5;
  n3.right_node = n6;
  n5.left_node = n7;
  n5.right_node = n8;
  n6.left_node = n9;
  const [numbers, setNumbers] = useState(0);
  const handleSubmit = async () => {
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

  const rechide = async (thisone) => {
    //for hiding elements while searching the element in the BST
    document.querySelector("#" + thisone.name).classList.add("fade");
    document.querySelector("#" + thisone.name).style.visibility = "hidden";
    if (thisone.left_divider != null)
      document.querySelector("#" + thisone.left_divider).style.visibility =
        "hidden";
    if (thisone.right_divider != null)
      document.querySelector("#" + thisone.right_divider).style.visibility =
        "hidden";
    if (thisone.left_node != null) rechide(thisone.left_node);
    if (thisone.right_node != null) rechide(thisone.right_node);
  };

  const recsearch = async (currentItem) => {
    document
      .querySelector("#" + currentItem.name)
      .classList.add("glow_infinite");
    if (currentItem.value == numbers) {
      if (currentItem.left_divider != null) {
        document.getElementById(currentItem.left_divider).style.visibility =
          "hidden";
      }
      if (currentItem.right_divider != null) {
        document.getElementById(currentItem.right_divider).style.visibility =
          "hidden";
      }
      if (currentItem.left_node != null) {
        await rechide(currentItem.left_node);
      }
      if (currentItem.right_node != null) {
        await rechide(currentItem.right_node);
      }
      return 1;
    } else if (currentItem.value > numbers) {
      if (currentItem.right_node != null) {
        if (currentItem.left_divider != null)
          document.querySelector(
            "#" + currentItem.right_divider
          ).style.visibility = "hidden";
        rechide(currentItem.right_node);
        await new Promise((resolve, reject) => {
          setTimeout(() => resolve(), 4000);
        });
        return await recsearch(currentItem.left_node);
      } else if (currentItem.left_node != null) {
        await new Promise((resolve, reject) => {
          setTimeout(() => resolve(), 4000);
        });
        return await recsearch(currentItem.left_node);
      } else {
        return 0;
      }
    } else if (currentItem.value < numbers) {
      if (currentItem.left_node != null) {
        if (currentItem.left_divider != null) {
          document.querySelector(
            "#" + currentItem.left_divider
          ).style.visibility = "hidden";
          rechide(currentItem.left_node);
          if (currentItem.right_divider != null) {
            await new Promise((resolve, reject) => {
              setTimeout(() => resolve(), 4000);
            });
            return await recsearch(currentItem.right_node);
          } else return 0;
        }
      } else if (currentItem.right_node != null) {
        if (currentItem.right_divider != null) {
          await new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 4000);
          });
          return await recsearch(currentItem.right_node);
        }
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  };
  const handleSearch = () => {
    const result = recsearch(n1);
    console.log(result);
    if (result == 0) {
      alert("element not found");
      handleSubmit();
      setDisabled(false);
    }
  };

  const handleClear = async () => {
    setNumbers(0);
    await handleSubmit();
    setDisabled(false);
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
