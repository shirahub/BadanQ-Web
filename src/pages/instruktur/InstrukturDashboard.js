import React, { Component } from 'react'
import { 
    BrowserRouter as Router, 
    Link, 
    Redirect 
} from 'react-router-dom'; 
import '../../styles/UserDashboard.css'

 class InstrukturDashboard extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              redirect:"none"
         }
     }
     
    render() {
        if (this.state.redirect !== "none"){
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div style={{display:"flex"}}>
                
                <div style={{
                    float:"left",
                    width:"20%"
                }}>
                    <Router>
                            <ul className="menu-container"> 
                                <li className="menu-list"> 
                                    <Link redirect to="/buatkonten" onClick={() => this.setState({redirect:"/buatkonten"})}>Buat Konten</Link> 
                                </li> 
                                <li className="menu-list"> 
                                    <Link redirect to="/buatprogram" onClick={() => this.setState({redirect:"/buatprogram"})}>Buat Program</Link> 
                                </li> 
                                <li className="menu-list"> 
                                    <Link redirect to="/lihatuser" onClick={() => this.setState({redirect:"/lihatuser"})}>Lihat User</Link> 
                                </li> 
                            </ul> 
                    </Router>
                </div>
                <div style={{
                    float:"rignt",
                    width:"80%"
                }}>
                    <img src="https://image.freepik.com/free-vector/group-therapy-support-concept_74855-6487.jpg"
                        alt="user-dashboard"
                        style={{height:"400px"}}
                    />
                </div>
                
            </div>
        )
    }
}


export default InstrukturDashboard