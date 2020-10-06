import React, { Component } from 'react'
import { 
    BrowserRouter as Router, 
    Link, 
    Redirect 
} from 'react-router-dom'; 

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
            <div>
                
                <div style={{
                    display:"flex",
                    float:"left",
                    width:"20%"
                }}>
                    <Router>
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
                        {/* <Switch>
                            <Route path='/bmicalculator' component={BMICalculator}></Route> 
                            <Route path='/caloriescalculator' component={CaloriesCalculator}></Route>
                            <Route path='/inputweightlossprogram' component={InputWeightlossProgram}></Route>
                            <Route path='/inputweightrecord' component={InputWeightRecord}></Route>
                            
                        </Switch> */}
                    </Router>
                </div>
                <div style={{
                    display:"flex",
                    float:"rignt",
                    width:"80%"
                }}>
                    <img src="https://image.freepik.com/free-vector/tiny-people-choosing-food-ketogenic-diet_74855-7878.jpg"
                        alt="user-dashboard"
                    />
                </div>
                
            </div>
        )
    }
}


export default UserDashboard