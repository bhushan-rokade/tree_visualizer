import React from "react";
import "./css/home.css";
import Routes from "./../constants";
import Card from "../Components/Card";

function Home() {
  return (
    <>
      <div className="home-main-div">
        <div className="title_div">
          <h1 className="main_title">Tree Visualizer</h1>
          <p>Visualises Data structure trees and their applications</p>
        </div>
        <div className="main_cards">
          <div className="inner_cards">
            <Card
              title="Expression Tree"
              content1="Contrusting an expression tree from a given expression."
              content2="As well as its evaluation."
              whereto={Routes.EXPRESSIONTREE}
            />
            <Card
              title="Binary Search Tree"
              content1="Contrusting an binary search tree from a given numbers."
              content2="Also how searching is done."
              whereto={Routes.BST}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
