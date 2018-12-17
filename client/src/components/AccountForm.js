import React, { Component } from "react";

/**
 * A panel that allows users to update their account information.
 */
class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordComfirmation: "",
      currentPassword: ""
    };
    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSave.bind(this);
    this.handleAccountCancel = this.handleAccountCancel.bind(this);
  }
  handleInputChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }
  handleSave(e) {
    e.preventDefault();
    console.log("submitting...", this.state);
  }
  handleAccountCancel() {
    console.log("canceling account...");
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSave}>
          <h3>Email & Password</h3>
          <label>
            *Email
            <input id="email" onChange={this.handleInputChange} value={this.state.email} />
          </label>
          <label>
            Password
            <input
              id="password"
              type="password"
              onChange={this.handleInputChange}
              value={this.state.password}
            />
            <p>Leave it blank if you dont want to change it</p>
          </label>
          <label>
            Password Comfirmation
            <input
              id="passwordComfirmation"
              type="password"
              onChange={this.handleInputChange}
              value={this.state.passwordComfirmation}
            />
          </label>
          <label>
            Password Comfirmation
            <input
              id="currentPassword"
              type="password"
              onChange={this.handleInputChange}
              value={this.state.currentPassword}
            />
            <p>We need your current password to comfirm your changes</p>
          </label>
          <button>Save</button>
        </form>
        <p onClick={this.handleAccountCancel}>Cancel my account</p>
      </div>
    );
  }
}

export default AccountForm;
