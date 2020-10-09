import React, { Component } from 'react'
import '../Login.css'

 class BMICalculator extends Component {
    constructor() {
        super();
        this.state = {
            beratbadan:0,
            tinggibadan:0,
            bmi:0
        }
    }
    setValue = (e) =>{
        this.setState({
            [e.name]:e.value
        })
    }
    calculatorBMI = (evt) => {
        evt.preventDefault()
        const {beratbadan,tinggibadan} = this.state
        let bmitemp = beratbadan/((tinggibadan*tinggibadan)/100000)
        this.setState({
            bmi:bmitemp
        })
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
                        <label>Berat Badan</label>
                        <input name ="beratbadan" type="number" onChange={(e) => this.setValue(e.target)}/>
                        <label>Tinggi Badan</label>
                        <input name ="tinggibadan" type="number"onChange={(e) => this.setValue(e.target)}/>
                        <button onClick = {(evt) => this.calculatorBMI(evt)}>Hitung</button>
                    </form>
                </div>
                <div>
                    <h1>
                    {this.state.bmi}
                    </h1>
                </div>
            </div>
        )
    }
}

export default BMICalculator;