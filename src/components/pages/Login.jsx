import React, { Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  Alert
} from "reactstrap";
import { setUser } from "../../actions/currentUser";
import iconLogin from "../../assets/images/user.svg";

const LogIn = props => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleUsernameChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/login`, {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const content = await response.json();
    if (content.token) {
      props.setUser(content);
      props.history.push("/");
    } else {
      setError(true);
    }
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
            {error ? (
              <Alert color="danger">Can't log you in! Something wrong.</Alert>
            ) : (
              <Fragment />
            )}
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
)(withRouter(LogIn));
