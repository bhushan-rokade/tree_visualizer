import React from "react";
import rightarrow from "./../assets/images/right_arrow.png";
import { Link, useNavigate, useNavigation } from "react-router-dom";

function Card({ title, content1, content2, whereto }) {
  return (
    <>
      <div className="card">
        <div className="card_title">
          <h4>{title}</h4>
          <p className="card_content">
            {content1}
            <br />
            {content2}
          </p>
        </div>
        <div className="button_div">
          <Link className="LinkTag" to={whereto}>
            <button className="next_button">
              <img src={rightarrow} className="right_arrow" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
