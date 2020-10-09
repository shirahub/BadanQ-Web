import React, { Component } from 'react'

 class LihatUser extends Component {
    render() {
        return (
            <div>
                <h1>Lihat User</h1>
                <form>
                    <input type ="email" placeholder="Email"/>
                    <br />
                    <input type ="password" placeholder="Password"/>
                    <br />
                    <button >Hitung</button>
                </form>
            </div>
        )
    }
}

export default LihatUser