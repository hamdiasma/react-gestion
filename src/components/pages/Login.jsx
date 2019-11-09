import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Label,
  Input,
  ButtonGroup
} from "reactstrap";
import { setUser } from "../../actions/currentUser";
import iconLogin from "../../assets/images/user.svg";

const LogIn = props => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUsernameChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.setUser({
      name: "Malek",
      lastName: "Boubakri",
      avatar: "https://avatars0.githubusercontent.com/u/22925467?s=460&v=4"
    });
  };

  const handleReset = e => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <form className="p-5" onSubmit={handleSubmit} onReset={handleReset}>
        <Card className="m-5">
          <CardHeader style={{ textAlign: "center" }}>
            <h3>Login</h3>
          </CardHeader>
          <CardBody>
            <FormGroup>
              <Label>Email</Label>
              <Input
                value={email}
                onChange={handleUsernameChange}
                type="email"
                name="username"
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                value={password}
                onChange={handlePasswordChange}
                type="password"
                name="password"
              />
            </FormGroup>
          </CardBody>
          <CardFooter>
            <ButtonGroup>
              <Button type="submit" color="success">
                <img src={iconLogin} alt="Login" />
                Login
              </Button>
              <Button type="reset" color="danger">
                Reset
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = {
  setUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
