import React, { Component } from 'react'
import { 
    BrowserRouter as Router, 
    Link, 
    Redirect 
} from 'react-router-dom'; 
<<<<<<< HEAD
=======
import '../../styles/UserDashboard.css'
>>>>>>> dianp

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
<<<<<<< HEAD
            <div>
                
                <div style={{
                    display:"flex",
=======
            <div style={{display:"flex"}}>
                
                <div style={{
>>>>>>> dianp
                    float:"left",
                    width:"20%"
                }}>
                    <Router>
<<<<<<< HEAD
                        <div className="App"> 
                            <ul style={{fontStyle:"none"}}> 
                                <li> 
                                    <Link redirect to="/bmicalculator" onClick={() => this.setState({redirect:"/bmicalculator"})}>BMICalculator</Link> 
                                </li> 
                                <li> 
                                    <Link redirect to="/caloriescalculator" onClick={() => this.setState({redirect:"/caloriescalculator"})}>Kalkulator Kalori</Link> 
                                </li> 
                                <li> 
                                    <Link redirect to="/inputweightlossprogram" onClick={() => this.setState({redirect:"/inputweightlossprogram"})}>Love Body Program</Link> 
                                </li> 
                                <li> 
                                    <Link redirect to="/inputweightrecord" onClick={() => this.setState({redirect:"/inputweightrecord"})}>Weight Program</Link> 
                                </li> 
                            </ul> 
                        </div> 
=======
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
>>>>>>> dianp
                        {/* <Switch>
                            <Route path='/bmicalculator' component={BMICalculator}></Route> 
                            <Route path='/caloriescalculator' component={CaloriesCalculator}></Route>
                            <Route path='/inputweightlossprogram' component={InputWeightlossProgram}></Route>
                            <Route path='/inputweightrecord' component={InputWeightRecord}></Route>
                            
                        </Switch> */}
                    </Router>
                </div>
                <div style={{
<<<<<<< HEAD
                    display:"flex",
                    float:"rignt",
                    width:"80%"
                }}>
                    <img src="https://image.freepik.com/free-vector/tiny-people-choosing-food-ketogenic-diet_74855-7878.jpg"
                        alt="user-dashboard"
=======
                    float:"rignt",
                    width:"80%"
                }}>
                    <img src="https://image.freepik.com/free-vector/group-therapy-support-concept_74855-6487.jpg"
                        alt="user-dashboard"
                        style={{height:"400px"}}
>>>>>>> dianp
                    />
                </div>
                
            </div>
        )
    }
}


export default InstrukturDashboard