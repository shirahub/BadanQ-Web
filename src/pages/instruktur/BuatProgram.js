import React, { Component } from 'react'

 class BuatProgram extends Component {
    render() {
        return (
            <div>
                <h1>Buat Program</h1>
                <form>
                    <label>Jenis Workout</label>
                    <input type ="text" />
                    <br />
                    <label>Repetisi</label>
                    <input type ="number"/>
                    <br />
                    <button className="button">Submit</button>
                </form>
            </div>
        )
    }
}

export default BuatProgram
