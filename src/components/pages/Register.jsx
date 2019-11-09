import React, { useState, Fragment } from "react";
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
import iconSave from "../../assets/images/save.svg";

const Register = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (password === rePassword) {
      await fetch(`http://localhost:5000/register`, {
        method: "post",
        body: JSON.stringify({
          email,
          password,
          lastName,
          firstName,
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
    } else {
      if (!errors.includes("Password fields must be equals!"))
        setErrors([...errors, "Password fields must be equals!"]);
    }
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
    setRePassword("");
    setLastName("");
    setFirstName("");
    setErrors([]);
  };

  return (
    <div className="container">
      <form className="p-5" onSubmit={handleSubmit} onReset={handleReset}>
        <Card className="m-5">
          <CardHeader style={{ textAlign: "center" }}>
            <h3>Register</h3>
          </CardHeader>
          <CardBody>
            <FormGroup>
              <Label>Email</Label>
              <Input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                name="email"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                name="password"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Confirm password</Label>
              <Input
                value={rePassword}
                onChange={e => setRePassword(e.target.value)}
                type="password"
                name="re-password"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Name</Label>
              <Input
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                type="text"
                name="firstname"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Family name</Label>
              <Input
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                type="text"
                name="lastname"
                required
              />
            </FormGroup>
            {errors.length > 0 ? (
              <div>
                {errors.map(error => (
                  <Alert color="danger">{error}</Alert>
                ))}
              </div>
            ) : (
              <Fragment />
            )}
          </CardBody>
          <CardFooter>
            <ButtonGroup>
              <Button type="submit" color="success">
                <img src={iconSave} alt="Register" />
                Register
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

export default Register;
