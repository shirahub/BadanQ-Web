import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class InputWeightRecord extends Component {
    constructor() {
        super();
        this.state = {
            tanngal:"",
            berat:"",
            history:[]
        }
    }

    setValue = (e) =>{
        this.setState({
            [e.name]:e.value
        })
    }

    submitWeight = (e) => {
        e.preventdefault()
        const {tanggal, berat, history} = this.state

        const historyTemp = history
        historyTemp.push({tanggal,berat})
        this.setState({
            history:historyTemp
        })
           
    }

    render() {
        return (
            <div>
                <h1>History Berat Badan</h1>
                <form>
                    <label>Tanggal</label>
                    <input type ="date" name="tanggal" onChange={(e) => this.setValue(e.target)}/>
                    <label>Berat Badan</label>
                    <input type ="number" name="berat" onChange={(e) => this.setValue(e.target)}/>
                    <button className="button" onClick={(e) => this.submitWeight(e)}>Save</button>
                </form>
                <Link className="button" to="/userdashboard">Back</Link>
                <div>
                    <thead>
                        <td>Tanggal</td>
                        <td>Berat Badan</td>
                    </thead>
                    {this.state.history.map(e =>
                        <tbody>
                            <td>{e.tanggal}</td>
                            <td>{e.berat}</td>
                        </tbody>
                    )}
                </div>
            </div>
        )
    }
}

export default InputWeightRecord