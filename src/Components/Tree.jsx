import React from "react";
import "./componentStyles/tree.css";

const handleSubmit = () => {
  window.scrollBy(0, 1000);
  let nodes;
  let j = 0;
  for (let i = 1; i <= 15; i++) {
    nodes[j++] = document.getElementById("n" + i);
  }
};

function Tree() {
  return (
    <>
      <div className="tree">
        <div className="row" style={{ marginTop: "2%" }}>
          <div className="node" id="n1" style={{ display: "none" }}>
            1
          </div>
        </div>
        <div className="divider_div">
          <div
            className="row_divider_left"
            style={{ display: "none" }}
            id="divider1"
          />
          <div
            className="row_divider_right"
            style={{ display: "none" }}
            id="divider2"
          />
        </div>

        <div className="row">
          <div className="node" id="n2" style={{ display: "none" }}>
            2
          </div>
          <div className="node" id="n3" style={{ display: "none" }}>
            3
          </div>
        </div>
        <div className="divider_div2">
          <div className="inner_divider">
            <div
              className="row_divider_left3"
              style={{ display: "none" }}
              id="divider3"
            />
            <div
              className="row_divider_right3"
              style={{ display: "none" }}
              id="divider4"
            />
          </div>
          <div className="inner_divider">
            <div
              className="row_divider_left4"
              style={{ display: "none" }}
              id="divider5"
            />
            <div
              className="row_divider_right4"
              style={{ display: "none" }}
              id="divider6"
            />
          </div>
        </div>
        <div className="row">
          <div className="node" id="n4" style={{ display: "none" }}>
            4
          </div>
          <div className="node" id="n5" style={{ display: "none" }}>
            5
          </div>
          <div className="node" id="n6" style={{ display: "none" }}>
            6
          </div>
          <div className="node" id="n7" style={{ display: "none" }}>
            7
          </div>
        </div>
        <div className="divider_div3">
          <div className="inner_divider">
            <div
              className="row_divider_left5"
              style={{ display: "none" }}
              id="divider7"
            />
            <div
              className="row_divider_right5"
              style={{ display: "none" }}
              id="divider8"
            />
          </div>
          <div className="inner_divider">
            <div
              className="row_divider_left6"
              style={{ display: "none" }}
              id="divider9"
            />
            <div
              className="row_divider_right6"
              style={{ display: "none" }}
              id="divider10"
            />
          </div>
          <div className="inner_divider">
            <div
              className="row_divider_left7"
              style={{ display: "none" }}
              id="divider11"
            />
            <div
              className="row_divider_right7"
              id="divider12"
              style={{ display: "none" }}
            />
          </div>
          <div className="inner_divider">
            <div
              className="row_divider_left8"
              style={{ display: "none" }}
              id="divider13"
            />
            <div
              className="row_divider_right8"
              style={{ display: "none" }}
              id="divider14"
            />
          </div>
        </div>
        <div className="row">
          <div className="node" id="n8" style={{ display: "none" }}>
            8
          </div>
          <div className="node" id="n9" style={{ display: "none" }}>
            9
          </div>
          <div className="node" id="n10" style={{ display: "none" }}>
            10
          </div>
          <div className="node" id="n11" style={{ display: "none" }}>
            11
          </div>
          <div className="node" id="n12" style={{ display: "none" }}>
            12
          </div>
          <div className="node" id="n13" style={{ display: "none" }}>
            13
          </div>
          <div className="node" id="n14" style={{ display: "none" }}>
            14
          </div>
          <div className="node" id="n15" style={{ display: "none" }}>
            15
          </div>
        </div>
      </div>
    </>
  );
}

export default Tree;
