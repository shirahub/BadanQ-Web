import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newUser } from '../actions/index';
import { FirebaseContext } from '../config';
import './DaftarBaru.css'


class PendaftaranUser extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            repassword: '',
            nama: '',
            jeniskelamin: '',
            pekerjaan: '',
            foto: '',
            telepon: '',
            alasan: '',
            tanggallahir: '',
            message: '',
        };

    }
    handleNamaChange = (evt) => {
        this.setState({
            nama: evt.target.value,
        });
    };
    handleEmailChange = (evt) => {
        this.setState({
            email: evt.target.value,
        });
    };
    handlePasswordChange = (evt) => {
        this.setState({
            password: evt.target.value,
        });
    };
    handleRepasswordChange = (evt) => {
        this.setState({
            repassword: evt.target.value,
        });
    };
    handleJenisKelaminChange = (evt) => {
        this.setState({
            jeniskelamin: evt.target.value,
        });
    };
    handlePekerjaanChange = (evt) => {
        this.setState({
            pekerjaan: evt.target.value,
        });
    };
    handleFotoChange = (evt) => {
        this.setState({
            foto: evt.target.value,
        });
    };
    handleTeleponChange = (evt) => {
        this.setState({
            telepon: evt.target.value,
        });
    };
    handleAlasanChange = (evt) => {
        this.setState({
            alasan: evt.target.value,
        });
    };
    handleTanggalLahirChange = (evt) => {
        this.setState({
            tanggallahir: evt.target.value,
        });
    };

    handleSubmit = (evt) => {
        evt.preventDefault();

        if (!this.state.nama) {
            return this.setState({ message: 'Mohon masukkan nama' });
        }
        if (!this.state.email) {
            return this.setState({ message: 'Mohon masukkan email' });
        }
        if (!this.state.password) {
            return this.setState({ message: 'Mohon masukkan password' });
        }
        if (!this.state.repassword) {
            return this.setState({ message: 'Mohon masukkan password kembali' });
        }
        if (this.state.password !== this.state.repassword ) {
            return this.setState({ message: 'Mohon masukkan password yang sama' });
        }
        if (!this.state.jeniskelamin) {
            return this.setState({ message: 'Mohon masukkan jenis kelamin' });
        }
        if (!this.state.pekerjaan) {
            return this.setState({ message: 'Mohon masukkan pekerjaan' });
        }
        if (!this.state.foto) {
            return this.setState({ message: 'Mohon masukkan foto' });
        }
        if (!this.state.alasan) {
            return this.setState({ message: 'Mohon masukkan alasan' });
        }
        if (!this.state.tanggallahir) {
            return this.setState({ message: 'Mohon masukkan tanggal lahir' });
        }
        if (!this.state.telepon) {
            return this.setState({ message: 'Mohon masukkan telepon' });
        }
        
        this.props.newUser(
            this.state.email, 
            this.state.password, 
            this.state.nama, 
            this.state.jeniskelamin, 
            this.state.pekerjaan, 
            this.state.foto,
            this.state.telepon,
            this.state.alasan,
            this.state.tanggallahir,
            )
    }

    daftarBaru() {
        console.log("DaftarBaru", this.state.tanggallahir)
        return (
            <div>
                <div style={{
                    display:"flex",
                    float:"right",
                    width:"65%"
                }}>
                    <img src="https://image.freepik.com/free-vector/online-registration-concept-with-isometric-view_23-2147976707.jpg" alt="Register" />
                </div>
                
                <div className="container" 
                style={{
                    display:"flex",
                    float:"left",
                    width:"30%"
                }}>
                    <form onSubmit={this.handleSubmit} style={{width:'100%'}}>
                        <h2 className="register">Register</h2>
                        <label>Nama</label>
                        <input type="text" value={this.state.nama} onChange={this.handleNamaChange}></input>
                        <br />
                        <label>Email</label>
                        <input type="email" value={this.state.email} onChange={this.handleEmailChange}></input>
                        <br />
                        <label>Password</label>
                        <input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
                        <br />
                        <label>Repassword</label>
                        <input type="password" value={this.state.repassword} onChange={this.handleRepasswordChange}></input>
                        <br />
                        <label>Jenis Kelamin</label>
                        <input type="text" value={this.state.jeniskelamin} onChange={this.handleJenisKelaminChange}></input>
                        <br />
                        <label>Pekerjaan</label>
                        <input type="text" value={this.state.pekerjaan} onChange={this.handlePekerjaanChange}></input>
                        <br />
                        <label>Upload Photo</label>
                        <input type="text" value={this.state.foto} onChange={this.handleFotoChange}></input>
                        <br />
                        <label>Nomor Telepon</label>
                        <input type="text" value={this.state.telepon} onChange={this.handleTeleponChange}></input>
                        <br />
                        <label>Alasan Bergabung</label>
                        <input type="textarea" value={this.state.alasan} onChange={this.handleAlasanChange}></input>
                        <br />
                        <label>Tanggal Lahir</label>
                        <input type="date" value={this.state.tanggallahir} onChange={this.handleTanggalLahirChange}></input>
                        <br />
    
                        <br />
                        <input className="button" type="submit" value="Daftar"></input>
                        {
                            this.state.message &&
                            <p data-test="message" onClick={this.dismissError}>
                                {this.state.message}
                            </p>
                        }
                    </form>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.daftarBaru()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    newUser: (email, password, nama, jeniskelamin, pekerjaan, foto, telepon, alasan, tanggallahir) => 
    dispatch(newUser(email, password, nama, jeniskelamin, pekerjaan, foto, telepon, alasan, tanggallahir)),
})

PendaftaranUser = connect(mapStateToProps, mapDispatchToProps)(PendaftaranUser)

class DaftarBaru extends Component {
    render() {
        return (
            <FirebaseContext.Consumer>
                {firebase => <PendaftaranUser firebase={firebase} {...this.props} />}
            </FirebaseContext.Consumer>
        )
    }
}
export default DaftarBaru;