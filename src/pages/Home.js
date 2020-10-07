import React from 'react';
import { Link } from "react-router-dom"
import { connect } from 'react-redux';

let Home = ({ info }) => (

    <div>
        {isWho(info.role)}
    </div>
)

// DASHBOARD CALLER 
const isWho = (role) => {
    if (role === "admin") {
        return (
            <div>
                <Link to="/pendaftaraninstruktur">Lihat Pendaftaran Instruktur Kesehatan</Link>
            </div>
        )
    }

    // if (role === "") ..........  

}

const mapStateToProps = (state) => ({
    info: state.auth
})


Home = connect(mapStateToProps)(Home)

export default Home;

