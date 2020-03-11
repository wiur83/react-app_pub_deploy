import React, { Component } from 'react'

const formValid = formErrors => {
  let valid = true;

  Object.value(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
    // if (val.length > 0) {
    //   valid = false;
    // }
  });

  return valid;

}

class Report2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state.formErrors)) {
      console.log("submitting " + this.state.firstName);
    } else {
      console.error("invalid");
    }
  };

  handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target;
    let.formErrors = this.state.formErrors;

    switch (name) {
      case "firstNme":
        formErrors.firstName
        break;
      default:

    }
  };




  render() {
    return (

      <div className="form-wrapper">
        <div>
          <h3>Create Account</h3>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="mytext"
                placehodler="First name"
                type="text"
                name="firstName"
                NoValidate
                onChange={this.handleChange}
              />
            </div>

            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="mytext"
                placehodler="Last name"
                type="text"
                name="lastName"
                NoValidate
                onChange={this.handleChange}
              />
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="mytext"
                placehodler="Email"
                type="email"
                name="email"
                NoValidate
                onChange={this.handleChange}
              />
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="mytext"
                placehodler="Password"
                type="password"
                name="password"
                NoValidate
                onChange={this.handleChange}
              />
            </div>

            <div className="createAccount">
              <button type="submit" className="myButton">Create Account</button>
              <small>Already have an account?</small>
            </div>

            </form>
        </div>
      </div>
    )
  }
}

export default Report2
