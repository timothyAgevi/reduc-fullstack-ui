import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to={"/"}>
        Homepage
      </Link>
      <Link className={styles.link} to={"/login"}>
        login
      </Link>
      <Link className={styles.link} to={"/register"}>
        Register
      </Link>
    </nav>
  );
};

export default Nav;
