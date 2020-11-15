import alertify from "alertifyjs";
import React, { Component } from "react";
import { Button, Label, Input, Form, FormGroup } from "reactstrap";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db");
  };

  render() {
    return (
        <div>
         <Form onSubmit={this.handleSubmit}>
         <FormGroup>
        <Label for="email">EMail</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            onChange={this.handleChange}>
            </Input>
        </FormGroup>

        <FormGroup>
        <Label for="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            onChange={this.handleChange}>
            </Input>
        </FormGroup>

        <FormGroup>
        <Label for="description">Description</Label>
          <Input
            type="textarea"
            id="description"
            name="description"
            placeholder="Enter Description"
            onChange={this.handleChange}>
            </Input>
        </FormGroup>

        <FormGroup>
        <Label for="city">City</Label>
          <Input
            type="select"
            id="city"
            name="city"
            placeholder="Enter Select"
            onChange={this.handleChange}>
                  <option>İstanbul</option>
                  <option>İzmir</option>
                  <option>Ankara</option>
                  <option>Eskişehir</option>
                  <option>Sinop</option>
            </Input>
        </FormGroup>
        <Button type="submit">Save</Button>
         </Form>
        </div>
    )
}

}
