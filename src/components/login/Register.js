import React from "react";

import imgUser from "../../img/img_user.png";

import { Button, Input, Label, FormGroup, Form } from "reactstrap";

import { FacebookLoginButton } from "react-social-login-buttons";

import "../../App.css";

export class register extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <Form className="login-form">
          <div className="text-center pt-3">
            <div className="header">Register</div>
          </div>
          <img src={imgUser} alt="img-user" id="img-user" />
          <FormGroup>
            <Label>Username</Label>
            <Input type="text" placeholder="your username..." />
          </FormGroup>
          <FormGroup>
            <Label>E-mail</Label>
            <Input type="email" placeholder="your e-mail..." />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" placeholder="your password..." />
          </FormGroup>
          <Button className="btn-lg btn-info btn-block">Log in</Button>
          <div className="text-center pt-4">
            Or continue with your Facebook account
          </div>
          <FacebookLoginButton className="mt-3 mb-3" />
        </Form>
      </div>
    );
  }
}

export default register;
