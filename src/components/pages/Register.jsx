import React, { useState } from "react";
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
import iconSave from "../../assets/images/save.svg"

const Register = props => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <div className="container">
            <form className="p-5" onSubmit={handleSubmit} onReset={handleReset}>
                <Card className="m-5">
                    <CardHeader style={{ textAlign: "center" }}>
                        <h4 color="bleu" >SingUp</h4>
                    </CardHeader>
                    <CardBody>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                type="text"
                                name="username"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                name="password"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>FirstName</Label>
                            <Input
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                type="text"
                                name="firstname"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>LastName</Label>
                            <Input
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                type="text"
                                name="lastname"
                            />
                        </FormGroup>
                    </CardBody>
                    <CardFooter>
                        <ButtonGroup>
                            <Button type="submit" color="success">
                                <img src={iconSave} alt="Login" />
                                Save
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

}

export default Register;