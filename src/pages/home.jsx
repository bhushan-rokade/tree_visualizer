import React from "react";
import "./css/home.css";
import treeimage from "./../assets/images/binary_tree.png";
import rightarrow from "./../assets/images/right_arrow.png";

function Home() {
  return (
    <>
      <div className="home-main-div">
        <div className="title_div">
          <h1 className="main_title">DS Visualizer</h1>
          <p>Visualises Data structure trees and their applications</p>
        </div>
        <div className="main_cards">
          <div className="inner_cards">
            <div className="card">
              <div className="card_title">
                <h4>Expression Tree</h4>
                <p className="card_content">
                  Contrusting an expression tree from a given expression.
                  <br />
                  As well as its evaluation.
                </p>
              </div>
              <div className="button_div">
                <button className="next_button">
                  <img src={rightarrow} className="right_arrow" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card_title">
                <h4>Binary Search Tree</h4>
                <p className="card_content">
                  Contrusting an binary search tree from a given numbers.
                  <br />
                  As well as how searching is done.
                </p>
              </div>
              <div className="button_div">
                <button className="next_button">
                  <img src={rightarrow} className="right_arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
