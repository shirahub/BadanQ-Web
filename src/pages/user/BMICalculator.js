import React, { Component } from 'react'
import '../Login.css'

<<<<<<< HEAD
class BMICalculator extends Component {
=======
 class BMICalculator extends Component {
    constructor() {
        super();
        this.state = {
            beratbadan:"",
            tinggibadan:"",
            bmi:""
        }
    }
    setValue = (e) =>{
        this.setState({
            [e.name]:e.value
        })
    }
    calculatorBMI = () => {
        const {beratbadan,tinggibadan} = this.state
        let bmitemp = beratbadan/((tinggibadan*tinggibadan)/100000)
        this.setState({
            bmi:bmitemp
        })
    }

>>>>>>> dianp
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
                        <button onClick = {this.calculatorBMI}>Hitung</button>
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