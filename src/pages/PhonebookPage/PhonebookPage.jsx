import React from "react";
import Phonebook from "../../phonebook/Phonebook";
import ContactList from "../../contactList/ContactList";
import UserMenu from "../../components/UserMenu/UserMenu";

const UserPage = () => {
  return (
    <>
      <Phonebook />
      <ContactList />
      <UserMenu />
    </>
  );
};

export default UserPage;
