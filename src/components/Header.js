import React, { useState } from "react";
import "./header.css";
import logo from "../images/logo.svg";
import todo from "../images/icon-todo.svg";
import calender from "../images/icon-calendar.svg";
import reminders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";
import arrowDownIcon from "../images/icon-arrow-down.svg";
import arrowUpIcon from "../images/icon-arrow-up.svg";

const Header = () => {
  const [isHover, setIsHover] = useState(false);
  const [isCopanyHover, setIsCopanyHover] = useState(false);
  return (
    <header className="header">
      <nav className="nav">
        <ul className="ul">
          <img src={logo} alt="LOGO" />
          <li
            className="li"
            onMouseOver={() => {
              setIsHover(true);
              setIsCopanyHover(false);
            }}
          >
            <span className="header__span">Features</span>
            <img
              src={isHover ? arrowUpIcon : arrowDownIcon}
              alt="carret-icon"
            />
            {isHover && (
              <div className="card" onMouseLeave={() => setIsHover(false)}>
                <div className="card_div">
                  <img src={todo} alt="todo-icon" />
                  <span className="header__span">Todo List</span>
                </div>
                <div className="card_div">
                  <img src={calender} alt="calender-icon" />
                  <span className="header__span">Calender</span>
                </div>
                <div className="card_div">
                  <img src={reminders} alt="calender-icon" />
                  <span className="header__span">Reminder</span>
                </div>
                <div className="card_div">
                  <img src={planning} alt="calender-icon" />
                  <span className="header__span">Planning</span>
                </div>
              </div>
            )}
          </li>
          <li
            className="li"
            onMouseOver={() => {
              setIsCopanyHover(true);
              setIsHover(false);
            }}
          >
            <span className="header__span">Company</span>
            <img
              src={isCopanyHover ? arrowUpIcon : arrowDownIcon}
              alt="carret-icon"
            />
            {isCopanyHover && (
              <div
                className="card"
                onMouseLeave={() => setIsCopanyHover(false)}
              >
                <div className="card_div">
                  <span className="header__span">History</span>
                </div>
                <div className="card_div">
                  <span className="header__span">Our Team</span>
                </div>
                <div className="card_div">
                  <span className="header__span">Blog</span>
                </div>
              </div>
            )}
          </li>
          <li className="li">Careers</li>
          <li className="li">About</li>
        </ul>
        <ul className="ul">
          <li className="li">Login</li>
          <button className="header__button">Register</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
