import React, { Component } from 'react'
import '../Login.css'

 class BMICalculator extends Component {
    constructor() {
        super();
        this.state = {
            beratbadan:0,
            tinggibadan:0,
            bmi:0,
            status:"",
            jeniskelamin:""
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
        let bmitemp = beratbadan/((tinggibadan*tinggibadan)/10000)
        this.setState({
            bmi:bmitemp
        })
        if (this.state.jeniskelamin === "perempuan"){
            if (bmitemp < 17){
            this.setState({
                status:"kurus"
            })
            }else if (bmitemp < 23){
                this.setState({
                    status:"normal"
                })
            }else if (bmitemp < 27){
                this.setState({
                    status:"gemuk"
                })
            } else if (bmitemp > 27){
                this.setState({
                    status:"obesitas"
                })
            }
        }else{
            if (bmitemp < 18){
                this.setState({
                    status:"kurus"
                })
            }else if (bmitemp < 25){
                this.setState({
                    status:"normal"
                })
            }else if (bmitemp < 27){
                this.setState({
                    status:"gemuk"
                })
            } else if (bmitemp > 27){
                this.setState({
                    status:"obesitas"
                })
            }
        }}

    render(){
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
                        <label>jenis Kelamin</label>
                        <select name="jeniskelamin" id="jk" form="bmi" onChange={(e) => this.setValue(e.target)} >
                            <option >--Pilih Jenis Kelamin--</option>
                            <option value="laki">Laki-Laki</option>
                            <option value="perempuan">Perempuan</option>
                        </select>
                        <button className="button" onClick = {(evt) => this.calculatorBMI(evt)}>Hitung</button>
                    </form>
                </div>
                <div>
                    <h1>
                        <p>BMI Anda</p>
                    {Math.round(this.state.bmi)}
                    <br/>
                        <p>Kondisi anda saat ini : {this.state.status}</p>
                    </h1>
                </div>
            </div>
        )
    }
}


export default BMICalculator