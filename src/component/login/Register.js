import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div className="container">
    <div className="card card-register mx-auto mt-5">
      <div className="card-header">Register an Account</div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <div className="form-row">
              <div className="col-md-6">
                <div className="form-label-group">
                  <input type="text" id="firstName" className="form-control" placeholder="First name" required="required" autofocus="autofocus"/>
                  <label for="firstName">First name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-label-group">
                  <input type="text" id="lastName" className="form-control" placeholder="Last name" required="required"/>
                  <label for="lastName">Last name</label>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="form-label-group">
              <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="required"/>
              <label for="inputEmail">Email address</label>
            </div>
          </div>
          <div className="form-group">
            <div className="form-row">
              <div className="col-md-6">
                <div className="form-label-group">
                  <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="required"/>
                  <label for="inputPassword">Password</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-label-group">
                  <input type="password" id="confirmPassword" className="form-control" placeholder="Confirm password" required="required"/>
                  <label for="confirmPassword">Confirm password</label>
                </div>
              </div>
            </div>
          </div>
          <a className="btn btn-primary btn-block" href="login.html">Register</a>
        </form>
        <div className="text-center">
          <a className="d-block small mt-3" href="login.html">Login Page</a>
          <a className="d-block small" href="forgot-password.html">Forgot Password?</a>
        </div>
      </div>
    </div>
  </div>
        );
    }
}

export default Register;