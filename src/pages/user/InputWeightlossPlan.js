import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class InputWeightlossPlan extends Component {
    render() {
        return (
            <div>
                <h1>Catatan Berat Badan</h1>
                <form>
                    <input type ="email" placeholder="Email"/>
                    <br />
                    <input type ="password" placeholder="Password"/>
                    <br />
                    <button >Hitung</button>
                </form>
                <Link className="button" to="/userdashboard">Back</Link>
            </div>
        )
    }
}

export default InputWeightlossPlan