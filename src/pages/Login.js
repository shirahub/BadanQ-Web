import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/index';
import './Login.css'


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
            <div style={{display:"flex"}}>
                <div className="login-container" 
                    style={{
                        width:"30%",
                        minWidth:"320px",
                        flex:"none"
                    }}>
                        <form onSubmit={this.handleSubmit} style={{width:'100%'}}>
                            <h2 className="login-text">Log In</h2>
                            <label>User Name</label>
                            <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
                            <label>Password</label>
                            <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
                            <input className="button" type="submit" value="Log In" data-test="submit" />
                        </form>
                        <br/>
                        {
                            this.state.error &&
                            <h3 className="error-message" data-test="error" onClick={this.dismissError}>
                                {this.state.error}
                            </h3>
                        }
                </div>
                <div className="loginpict"
                    
                        style={{
                            margin:"auto",
                            flex:"1 1 0%",
                        }}
                    >
                        <img 
                        src="https://image.freepik.com/free-vector/registration-online-concept_23-2147987277.jpg"/>
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