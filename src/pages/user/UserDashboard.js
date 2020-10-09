import React, { Component } from 'react'
import { 
    BrowserRouter as Router, 
    Link, 
    Redirect 
} from 'react-router-dom'; 
import '../../styles/UserDashboard.css'

 class UserDashboard extends Component {
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
                                    <Link redirect to="/bmicalculator" onClick={() => this.setState({redirect:"/bmicalculator"})}>BMICalculator</Link> 
                                </li> 
                                <li className="menu-list"> 
                                    <Link redirect to="/caloriescalculator" onClick={() => this.setState({redirect:"/caloriescalculator"})}>Kalkulator Kalori</Link> 
                                </li> 
                                <li className="menu-list"> 
                                    <Link redirect to="/inputweightlossplan" onClick={() => this.setState({redirect:"/inputweightlossplan"})}>Love Body Program</Link> 
                                </li> 
                                <li className="menu-list"> 
                                    <Link redirect to="/inputweightrecord" onClick={() => this.setState({redirect:"/inputweightrecord"})}>Weight Program</Link> 
                                </li> 
                            </ul> 
                        {/* <Switch>
                            <Route path='/bmicalculator' component={BMICalculator}></Route> 
                            <Route path='/caloriescalculator' component={CaloriesCalculator}></Route>
                            <Route path='/inputweightlossprogram' component={InputWeightlossProgram}></Route>
                            <Route path='/inputweightrecord' component={InputWeightRecord}></Route>
                            
                        </Switch> */}
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


export default UserDashboard