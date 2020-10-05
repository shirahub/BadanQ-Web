import React, { Component } from 'react'

 class InputWeightRecord extends Component {
    render() {
        return (
            <div>
                <h1>Catatan Program</h1>
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

export default InputWeightRecord