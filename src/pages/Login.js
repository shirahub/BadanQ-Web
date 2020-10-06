import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/index';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
        };
    }

    dismissError = () => {
        this.setState({ error: '' });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();

        if (!this.state.email) {
            return this.setState({ error: 'Mohon masukkan email' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Mohon masukkan password' });
        }

        this.props.login(this.state.email, this.state.password)
    }

    handleEmailChange = (evt) => {
        this.setState({
            email: evt.target.value,
        });
    };

    handlePassChange = (evt) => {
        this.setState({
            password: evt.target.value,
        });
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-form">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                        <label>User Name</label>
                        <br />
                        <input type="text" data-test="email" value={this.state.email} onChange={this.handleEmailChange} />
                        </div>
                        <div>
                        <label>Password</label>
                        <br />
                        <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
                        </div>
                        <br />
                        <div>
                        <input type="submit" value="Log In" data-test="submit" />
                        </div>
                    </form>
                    {
                        this.state.error &&
                        <h3 data-test="error" onClick={this.dismissError}>
                            
                            {this.state.error}
                        </h3>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    login: (email, password) => dispatch(login(email, password))
})

Login = connect(mapStateToProps, mapDispatchToProps)(Login)

export default Login;