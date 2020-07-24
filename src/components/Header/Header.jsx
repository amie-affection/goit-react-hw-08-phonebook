import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Header.module.css";

const Header = ({ token }) => {
  return (
    <header>
      <nav>
        <ul className={styles.pageList}>
          {!token && (
            <li className={styles.pageListItem}>
              <NavLink exact to="/" activeClassName={styles.active}>
                Authorization Page
              </NavLink>
            </li>
          )}

          {token && (
            <li className={styles.pageListItem}>
              <NavLink to="/userPage" activeClassName={styles.active}>
                User Page
              </NavLink>
            </li>
          )}

          {!token && (
            <li className={styles.pageListItem}>
              <NavLink to="/registerPage" activeClassName={styles.active}>
                Register Page
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    // token: state.authRoot.isShow,
  };
};

export default connect(mapStateToProps)(Header);
