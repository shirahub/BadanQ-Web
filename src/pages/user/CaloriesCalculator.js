import React, { Component } from 'react'

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
            </div>
        )
    }
}

export default CaloriesCalculator