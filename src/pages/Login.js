import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLogin } from '../actions/index';
import './Login.css'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({ error: '' });
    }

    handleSubmit(evt) {
        evt.preventDefault();

        if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }

        if (this.state.username === this.props.admin.user && this.state.password === this.props.admin.pass) {
            this.props.loginOK(this.state.username, this.props.admin.id, 'admin')
        } else {
            return this.setState({error:'Username or Password invalid'})
        }
    }

    handleUserChange(evt) {
        this.setState({
            username: evt.target.value,
        });
    };

    handlePassChange(evt) {
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
    admin: state.adminlogin.admin
})

const mapDispatchToProps = (dispatch) => ({
    loginOK: (user, id, role) => dispatch(setLogin(user, id, role))
})

Login = connect(mapStateToProps, mapDispatchToProps)(Login)


export default Login;