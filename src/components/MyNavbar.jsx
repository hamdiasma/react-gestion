import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";
import { Link } from "react-router-dom";
import Fallback from "../assets/images/account.svg";
import Icon from "../assets/images/icon.png";
import { unsetUser } from "../actions/currentUser";

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
            {this.props.currentUser && this.props.currentUser.user && this.props.currentUser.user.firstName ? (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <img
                    style={{
                      width: 32,
                      height: "auto",
                      marginRight: 10,
                      marginLeft: 10,
                      border: "1px white solid",
                      background: "white",
                      borderRadius: "50%"
                    }}
                    src={this.props.currentUser.user.avatar ? this.props.currentUser.user.avatar : Fallback}
                    alt="Avatar"
                  />
                  {this.props.currentUser.user.firstName}{" "}
                  {this.props.currentUser.user.lastName}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem disabled>Profile</DropdownItem>
                  <DropdownItem disabled>Settings</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.props.unsetUser}>
                    Disconnect
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : (
              <Fragment>
                <NavItem>
                  <NavLink tag={Link} to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/register">
                    Register
                  </NavLink>
                </NavItem>
              </Fragment>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = {
  unsetUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyNavbar);
