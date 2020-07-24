import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/authOperations";
import styles from "./AuthPage.module.css";

const AuthPage = () => {
  const dispatch = useDispatch();

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
      <button type="button" className={styles.btn}>
        Log In
      </button>
    </form>
  );
};

export default AuthPage;
