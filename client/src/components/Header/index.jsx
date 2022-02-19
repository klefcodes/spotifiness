import React from "react";
import LeftArrowIcon from "../../icons/LeftArrow";
import RightArrowIcon from "../../icons/RightArrow";
import { Search } from "../Search";
import "./style.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header--bg"></div>
      <div className="header--buttons">
        <button className="header--button previous">
          <LeftArrowIcon style={{ width: "24px", height: "24px" }} />
        </button>
        <button className="header--button next">
          <RightArrowIcon style={{ width: "24px", height: "24px" }} />
        </button>
      </div>
      <Search />
    </div>
  );
};
