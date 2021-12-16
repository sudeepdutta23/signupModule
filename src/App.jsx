import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      userName: "",
      email: "",
      password: "",
    };
    this.changeFullName = this.changeFullName.bind(this)
    this.changeUserName = this.changeUserName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)

  }

  changeFullName(event) {
    this.setState({
      fullName: event.target.value,
    });
  }
  changeUserName(event) {
    this.setState({
      userName: event.target.value,
    });
  }
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
  onSubmit = (event) =>{
      event.preventDefault()
      const registered = {
          fullName: this.state.fullName,
          userName: this.state.userName,
          email: this.state.email,
          password: this.state.password
      }
      console.log(registered);
      axios.post('http://localhost:4000/api/signup',registered)
      .then(response=>{
        if(response.statusText === 'OK'){
          window.alert("User Registered Successfully");
        }
      })
      this.setState({
        fullName: this.state.fullName,
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="form-div align-items-center p-5">
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                onChange={this.changeFullName}
                defaultValue={this.state.fullName}
                className="form-control form-group"
              />
                <br />
              <input
                type="text"
                placeholder="User Name"
                onChange={this.changeUserName}
                defaultValue={this.state.userName}
                className="form-control form-group"
              />
              <br />
              <input
                type="text"
                placeholder="E-mail"
                onChange={this.changeEmail}
                defaultValue={this.state.email}
                className="form-control form-group"
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                onChange={this.changePassword}
                defaultValue={this.state.password}
                className="form-control form-group"
              />
              <br />
              <input
                type="submit"
                className="btn btn-danger btn-block"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
