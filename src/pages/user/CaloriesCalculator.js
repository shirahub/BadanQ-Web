import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class CaloriesCalculator extends Component {
    render() {
        return (
            <div>
                <h1>Kalkulator Kalori</h1>
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

export default CaloriesCalculator