import React from 'react';
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import Logo from '../assets/images/logo.png'

let Header = ({ info }) => (

    <header>
        {console.log(info)}
        <div className="logo">
            <Link to="/">
                <div style={{display:"flex"}}>
                    <img src={Logo} style={{display:"inline", height:"80px", marginTop:"10px"}} />
                    <div style={{display:"unset", marginTop:"10px"}}>
                        <h1>BadanQ</h1>
                        <h2>Beautiful Mind, Beautiful Body</h2>
                    </div>
                </div>
            </Link>
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
            <div className="logout">
                <Link to="/logout"><h3>Logout</h3></Link>
            </div>
        )
    }
    return (
        <div className="login">
            <Link to="/login"><h3>Login</h3></Link>
            <Link to="/daftarbaru"><h3>Daftar</h3></Link>
        </div>
    )
}

const mapStateToProps = (state) => ({
    info: state.auth
})


Header = connect(mapStateToProps)(Header)

export default Header;


