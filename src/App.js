import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Phonebook from "./phonebook/Phonebook";
import ContactList from "./contactList/ContactList";
import withTheme from "./hoc/withTheme";
import AuthPage from "./pages/AuthPage/AuthPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Header from "./components/Header/Header";

class App extends Component {
  state = {
    filter: "",
  };

  componentDidMount() {
    const contactStorage = localStorage.getItem("contacts");
    if (contactStorage) {
      this.setState({ contacts: JSON.parse(contactStorage) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  filterByName = () => {};

  deleteContact = (id) => {};

  render() {
    const filterContact = this.filterByName();
    // console.log(filterContact);
    // console.log(this.props);
    const {
      themeConfig: { fontColor, bodybg },
    } = this.props;
    const { filter } = this.state;
    return (
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={AuthPage} />
          <Route path="/registerPage" component={RegisterPage} />
        </Switch>
        <div style={{ color: fontColor, background: bodybg }}>
          <button
            type="submit"
            style={{
              marginLeft: "30px",
              marginTop: "20px",
              borderColor: "white",
              height: "35px",
              width: "150px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
            onClick={this.props.toggleTheme}
          >
            Change theme
          </button>
          <Phonebook name={this.state.name} number={this.state.number} />

          <ContactList filter={filter} deleteContact={this.deleteContact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default withTheme(App);
