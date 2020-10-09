import React, { Component } from 'react'

 class InputWeightRecord extends Component {
    render() {
        return (
            <div>
                <h1>History Berat Badan</h1>
                <form>
                    <label>Tanggal</label>
                    <input type ="date"/>
                    <label>Berat Badan</label>
                    <input type ="number"/>
                    <button className="button">Save</button>
                </form>
            </div>
        )
    }
}

export default InputWeightRecord