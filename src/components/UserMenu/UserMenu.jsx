import React from "react";

const UserMenu = ({ token }) => {
  return token && <button>Logout</button>;
};

export default UserMenu;
