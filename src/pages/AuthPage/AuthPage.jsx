import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import authOperations from "../../redux/auth/authOperations";
// import Phonebook from '../../phonebook/Phonebook';
import styles from "./AuthPage.module.css";

const AuthPage = ({ isShow }) => {
  const dispatch = useDispatch();
  const makeToggle = () => {};
  const toggle = makeToggle();

  const [email, setEmail] = useState("");
  const handleChange = ({ target }) => setEmail(target.value);

  const [password, setPassword] = useState("");
  const handlePassword = ({ target }) => setPassword(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      authOperations.loginOperation({ email: email, password: password })
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter your e-mail..."
        className={styles.formInput}
      />
      <input
        type="password"
        value={password}
        onChange={handlePassword}
        placeholder="Enter your password"
        className={styles.formInput}
      />
      <button type="button" className={styles.btn} onClick={toggle}>
        Log In
      </button>

      {/* {isShow && <Phonebook />} */}
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    // isShow: state.authRoot.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    makeToggle: () => dispatch({ type: "auth/IS_SHOW" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
