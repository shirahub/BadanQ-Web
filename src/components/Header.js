import React from 'react';
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import Logo from '../assets/images/logo.png'
import '../styles/Header.css'

let Header = ({ info }) => (

    <header className="jumbotron">
        {console.log(info)}
        <div className="logo">
            <Link to="/">
                <img className="img-logo" src={Logo} />
            </Link>
            <h3 style={{color:"#0765ad"}}>Let's Be Healty</h3>
        </div>
        <div className="login">
        {who(info.theUser)}
        </div>
        <div className="links-container">
            {isLoggedIn(info.isLogin)}
        </div>
    </header>
)
const who = (user) => {
    if (user !== '') {
        return (
            <div>
                <h3>Welcome, {user}</h3>
                </div>
        )
    }
}

const isLoggedIn = (statusLogin) => {

    if (statusLogin === true) {
        return (
            <div className="button-header">
                <Link to="/logout"><p>Logout</p></Link>
            </div>
        )
    }
    return (
        <div style={{display:"flex"}}>
            <div className="button-header">
                <Link to="/login"><p>Login</p></Link>
            </div>
            <div className="button-header">
                <Link to="/daftarbaru"><p>Daftar</p></Link>
            </div>
            <div className="button-header">
                <Link to="/userdashboard"><p>ke User</p></Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    info: state.auth
})


Header = connect(mapStateToProps)(Header)

export default Header;


