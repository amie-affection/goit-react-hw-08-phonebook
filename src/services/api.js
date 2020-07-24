import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const getAllContacts = () => axios.get("/contacts");
const addContact = (contact) => axios.post("/contacts", contact);
const deleteContact = (id) => axios.delete(`/contacts/${id}`);

const login = (loginObject) => axios.post("/users/login", loginObject);

const register = (registerObject) => {
  console.log(registerObject);
  return axios.post("/users/signup", registerObject);
};

const logout = () => axios.post("/users/logout");

export default {
  getAllContacts,
  addContact,
  deleteContact,
  login,
  register,
  logout,
};
