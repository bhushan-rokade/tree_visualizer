import React from "react";
import "./componentStyles/tree.css";

function Tree() {
  return (
    <>
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
        <div className="divider_div3">
          <div className="inner_divider">
            <div className="row_divider_left5" />
            <div className="row_divider_right5" />
          </div>
          <div className="inner_divider">
            <div className="row_divider_left6" />
            <div className="row_divider_right6" />
          </div>
          <div className="inner_divider">
            <div className="row_divider_left7" />
            <div className="row_divider_right7" />
          </div>
          <div className="inner_divider">
            <div className="row_divider_left8" />
            <div className="row_divider_right8" />
          </div>
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
    </>
  );
}

export default Tree;
