import React, { Component } from 'react'
import '../Login.css'


class BMICalculator extends Component {
    constructor() {
        super();
        this.state = {
            beratbadan: "",
            tinggibadan: "",
            bmi: ""
        }
    }
    setValue = (e) => {
        this.setState({
            [e.name]: e.value
        })
    }
    calculatorBMI = (e) => {
        e.preventDefault(); //biar page gak refresh pas klik button
        const { beratbadan, tinggibadan } = this.state
        const tinggi = Math.pow(tinggibadan/100, 2)
        const total = beratbadan / tinggi
        const round = (value, precision) => {
            let multiplier = Math.pow(10, precision || 0);
            return Math.round(value * multiplier) / multiplier;
        }
        const bmitemp = round(total, 2)

        this.setState({
            bmi: bmitemp
        })
    }


    render() {
        return (
            <div>
                <div className="login-container"
                    style={{
                        width: "30%",
                        minWidth: "320px",
                        flex: "none"
                    }}
                >
                    <form>
                        <h1>Kalkulator BMI</h1>
                        <label>Berat Badan</label>
                        <input name="beratbadan" type="number" onChange={(e) => this.setValue(e.target)} />
                        <label>Tinggi Badan</label>
                        <input name="tinggibadan" type="number" onChange={(e) => this.setValue(e.target)} />
                        <button onClick={this.calculatorBMI}>Hitung</button>
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