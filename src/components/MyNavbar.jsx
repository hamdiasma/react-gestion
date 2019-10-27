import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
import Icon from "../assets/images/icon.png";

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">
          <img
            alt="Logo"
            src={Icon}
            style={{ width: 30, height: 30, margin: 10 }}
          />
          Movies
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/movies">
                Movies
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/series">
                Series
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default MyNavbar;
