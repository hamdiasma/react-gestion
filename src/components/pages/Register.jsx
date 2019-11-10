import React, { useState, Fragment } from "react";
import { withRouter } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  FormText,
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
  const [avatar, setAvatar] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (password === rePassword) {
      const data = new FormData();
      data.append("file", avatar);
      data.append("firstName", firstName);
      data.append("lastName", lastName);
      data.append("email", email);
      data.append("password", password);
      await fetch(`http://localhost:5000/register`, {
        method: "post",
        body: data
      }).then(() => {
        props.history.push("/login");
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
    setAvatar("");
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
            <FormGroup>
              <Label for="exampleFile">Avatar</Label>
              <Input
                type="file"
                name="avatar"
                id="avatar"
                onChange={e => setAvatar(e.target.files[0])}
              />
              <FormText color="muted">
                Please choose an image with type jpeg or png and size {"<"} 2
                MB.
              </FormText>
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

export default withRouter(Register);
