import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles.pageList}>
          <li className={styles.pageListItem}>
            <NavLink exact to="/" activeClassName={styles.active}>
              Authorization Page
            </NavLink>
          </li>

          <li className={styles.pageListItem}>
            <NavLink to="/registerPage" activeClassName={styles.active}>
              Register Page
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
