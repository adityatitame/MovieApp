import React, { Fragment, useState, useEffect } from "react";
import Home from "../Home/Home";
import Top from "../Top/Top";
import Upcoming from "../Upcomming/Upcomming";
import "./Nav.css";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Routes, Route, NavLink } from "react-router-dom";

const Nav = () => {
  const [inputValue, setInputValue] = useState("");
  const clickOpen = () => {
    const mainMenu = document.querySelector(".mainMenu");
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
  };
  const clickClose = () => {
    const mainMenu = document.querySelector(".mainMenu");
    mainMenu.style.top = "-100%";
  };
  return (
    <Fragment>
      <nav>
        <div className="logo">MoviesDb</div>
        <div className="openMenu" onClick={clickOpen}>
          <FaBars className="" />
        </div>
        <ul class="mainMenu">
          <NavLink to="/" className="link">
            <li>Popular</li>
          </NavLink>
          <NavLink to="/TopRated" className="link">
            <li>TopRated</li>
          </NavLink>
          <NavLink to="/Upcoming" className="link">
            <li>Upcoming</li>
          </NavLink>
          <input
            id="search"
            type="search"
            placeholder="Movie Name"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn">Submit</button>
          <div className="closeMenu" onClick={clickClose}>
            <GrClose className="" />
          </div>
        </ul>
      </nav>

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="TopRated" element={<Top />} />
        <Route path="Upcoming" element={<Upcoming />} />
      </Routes>
    </Fragment>
  );
};
export default Nav;
