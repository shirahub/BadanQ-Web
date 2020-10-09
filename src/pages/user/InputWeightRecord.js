import React, { Component } from 'react'

 class InputWeightRecord extends Component {
    render() {
        return (
            <div>
                <h1>Catatan Program</h1>
                <form>
                    <input type ="date" name="tanggal" placeholder="Password"/>
                    <button >Simpan</button>
                </form>
            </div>
        )
    }
}

export default InputWeightRecord