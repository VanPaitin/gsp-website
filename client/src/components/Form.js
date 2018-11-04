import React from 'react';
import Select from 'react-select';
import Calendar from 'react-calendar';
import { Col, Button, Form, FormGroup, Label, Input, Row, CustomInput } from 'reactstrap';

export default class Example extends React.Component {
  constructor() {
    super();

    this.state = {
      maritalStatus: null,
      naturalGroup: null,
      showingCalendar: false,
      date: new Date()
    };
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleGroupChange = this.handleGroupChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dateChange = this.dateChange.bind(this);
  }

  handleStatusChange(maritalStatus) {
   this.setState({ maritalStatus }) ;
  }

  handleGroupChange(naturalGroup) {
    this.setState({ naturalGroup });
  }

  handleSubmit(event) {
    event.preventDefault()
    debugger;
  }

  dateChange(date) {
    this.setState({ date, showingCalendar: false })
  }

  render() {
    const { maritalStatus, naturalGroup } = this.state;
    const maritalStatusOptions = [
      { value: "Married", label: "Married" },
      { value: "Single", label: "Single" },
      { value: "Divorced", label: "Divorced" },
      { value: "Widowed", label: "Widowed" }
    ];
    const naturalGroupOptions = [
      { value: "Men", label: "Men" },
      { value: "Women", label: "Women" },
      { value: "Youth", label: "Youth" },
      { value: "Teenager", label: "Teenager" },
      { value: "Children", label: "Children" }
    ];

    return (
      <Form onSubmit={this.handleSubmit}>
        <Row form="true">
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail"><b>Email</b></Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Please enter your email" />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword"><b>Password</b></Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Enter a password" />
            </FormGroup>
          </Col>
        </Row>

        <Row form="true">
          <Col md={6}>
            <FormGroup>
              <Label for="firstName"><b>First name</b></Label>
              <Input type="text" name="firstName" id="firstName" placeholder="Enter your first name" />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label for="lastName"><b>Last name</b></Label>
              <Input type="text" name="lastName" id="lastName" placeholder="Please enter your last name" />
            </FormGroup>
          </Col>
        </Row>

        <Row form="true">
          <Col md={6}>
            <FormGroup>
              <Label for="phoneNumber"><b>Phone number</b></Label>
              <Input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Please enter your phone number" />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label for="stateOfOrigin"><b>State of Origin</b></Label>
              <Input type="text" name="stateOfOrigin" id="stateOfOrigin" placeholder="State of origin" />
            </FormGroup>
          </Col>
        </Row>

        <Row form="true">
          <Col md={6}>
            <FormGroup onClick={() => {this.setState({showingCalendar: true})}}>
              <Label for="birthday"><b>Birthday</b></Label>
              <Input
                type="text"
                name="birthday"
                id="birthday"
                placeholder="Please enter your phone number"
                value={this.state.date}
                disabled
              />
              {this.state.showingCalendar && (<Calendar
                onChange={this.dateChange}
                value={this.state.date}
              />)}
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label for="stateOfOrigin"><b>Occupation</b></Label>
              <Input type="text" name="occupation" id="occupation" placeholder="What's your occupation" />
            </FormGroup>
          </Col>
        </Row>

        <Row form="true">
          <Col md={6}>
            <FormGroup>
              <Label for="naturalGroup"><b>Natural Group</b></Label>
              <Select
                value={naturalGroup}
                onChange={this.handleGroupChange}
                options={naturalGroupOptions}
                placeholder="Which natural group do you belong to?"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label for="maritalStatus"><b>Marital Status</b></Label>
              <Select
                value={maritalStatus}
                onChange={this.handleStatusChange}
                options={maritalStatusOptions}
                placeholder="What's your marital status?"
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup tag="fieldset">
          <legend>Address</legend>
          <Label for="street"><b>Street</b></Label>
          <Input type="text" name="street" id="street" placeholder="1234 Main St"/>

          <Row form="true">
            <Col md={6}>
              <FormGroup>
                <Label for="city"><b>City</b></Label>
                <Input type="text" name="city" id="city"/>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="state"><b>State</b></Label>
                <Input type="text" name="state" id="state"/>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="zip"><b>Zip</b></Label>
                <Input type="number" name="zip" id="zip"/>
              </FormGroup>
            </Col>
          </Row>
        </FormGroup>

        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="image"><b>Profile Picture</b></Label>
              <CustomInput type="file" id="image" name="image" />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label className="registerButtonLabel"><b>Submit</b></Label>
              <Button color="primary" id="submit" name="submit" size="lg" block>Register</Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    );
  }
}
