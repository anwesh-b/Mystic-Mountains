import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {loginUser} from '../../actions/authAction'


class Login extends Component {
  constructor() {
    super();
    this.state = {
        email: '',
        password: ''
    };
}
componentDidMount() {
    if (this.props.auth.isAuthenticated) {
        this.props.history.push('/What_we_do');
    }
}
componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
        this.props.history.push('/What_we_do');
    }
}
onSubmit = (e) => {
    e.preventDefault();

    const userData = {
        email: this.state.email,
        password: this.state.password
    };
     console.log(userData);
    this.props.loginUser(userData);
    if (this.props.auth.isAuthenticated) {
        this.props.history.push('/What_we_do')
    }
}

onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
}

render() {
        return (
    <div className="container">
    <div className="card card-login mx-auto mt-5">
      <div className="card-header">Login to Mystic Mountain</div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <div className="form-label-group">
              <input type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email address"
                required="required"
                autofocus="autofocus"name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
              <label for="inputEmail">Email address</label>
            </div>
          </div>
          <div className="form-group">
            <div className="form-label-group">
              <input type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required="required"name="password"
                    value={this.state.password}
                    onChange={this.onChange}
              />
              <label for="inputPassword">Password</label>
            </div>
          </div>
          <div className="form-group">
            <div className="checkbox">
              <label>
                <input type="checkbox" value="remember-me"/>
                Remember Password
              </label>
            </div>
          </div>
          <a className="btn btn-primary btn-block" href="index.html" onSubmit={this.onSubmit}>Login</a>
        </form>
        <div className="text-center">
          <Link className="d-block small mt-3" to="/register">Register an Account</Link>
          <Link className="d-block small" to="/forgotpassword">Forgot Password?</Link>
        </div>
      </div>
    </div>
  </div>

        );
    }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
