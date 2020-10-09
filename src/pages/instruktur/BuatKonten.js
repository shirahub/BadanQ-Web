import React, { Component } from 'react'

 class BuatKonten extends Component {
    render() {
        return (
            <div>
                <h1>Buat Konten</h1>
                <form>
                    <label>Judul</label>
                    <input type ="text" />
                    <br />
                    <label>Artikel</label>
                    <textarea style={{height:"250px"}} />
                    <br />
                    <label>Gambar</label>
                    <input type ="text"/>
                    <button className="button" >submit</button>
                </form>
            </div>
        )
    }
}

export default BuatKonten
