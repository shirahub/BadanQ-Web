import React, { Component } from 'react'
import '../Login.css'

 class BMICalculator extends Component {
    calculatorBMI = () => {
        
    }

    render() {
        return (
            <div>
                <div className="login-container"
                style={{
                    width:"30%",
                    minWidth:"320px",
                    flex:"none"}}
                >
                    <form>
                        <h1>Kalkulator BMI</h1>
                        <input type ="Berat Badan" placeholder="Email"/>
                        <input type ="Tinggi Badan" placeholder="Password"/>
                        <button onClick = {() => this.calculatorBMI}>Hitung</button>
                    </form>
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default BMICalculator