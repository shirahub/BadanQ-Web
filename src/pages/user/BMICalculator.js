import React, { Component } from 'react'

class BMICalculator extends Component {
    render() {
        return (
            <div>
                <form>
                    <h1>Kalkulator BMI</h1>
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

export default BMICalculator;