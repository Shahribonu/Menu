import React, { useState } from "react";
import meals from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Cart from "../Cart/Cart";
const Header = (props) => {
  return (
    <div>
      <header className={classes.header}>
        <h1>Uzbek Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="Meals" />
      </div>
    </div>
  );
};

export default Header;
