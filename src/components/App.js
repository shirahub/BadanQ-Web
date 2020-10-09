import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import { connect } from 'react-redux';

import '../styles/App.css';
import {Footer} from './Footer';
import Header from './Header';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Home from '../pages/Home';
import DaftarBaru from '../pages/DaftarBaru';
// import {
//   BMICalculator,
//   CaloriesCalculator,
//   InputWeightRecord,
//   InputWeightlossPlan
// }from '../pages/user'
import BMICalculator from "../pages/user/BMICalculator"
import CaloriesCalculator from "../pages/user/CaloriesCalculator"
import InputWeightRecord from "../pages/user/InputWeightRecord"
import InputWeightlossPlan from "../pages/user/InputWeightlossPlan"
import { FirebaseContext } from '../config';
<<<<<<< HEAD
import CaloriesCalculator from '../pages/user/CaloriesCalculator';
import InputWeightlossPlan from '../pages/user/InputWeightlossPlan';
import InputWeightRecord from '../pages/user/InputWeightRecord';
import BMICalculator from '../pages/user/BMICalculator';
=======
>>>>>>> dianp
import UserDashboard from '../pages/user/UserDashboard';
import InstrukturDashboard from '../pages/instruktur/InstrukturDashboard';
import BuatKonten from '../pages/instruktur/BuatKonten';
import BuatProgram from '../pages/instruktur/BuatProgram';
<<<<<<< HEAD

=======
import LihatUser from '../pages/instruktur/LihatUser';
>>>>>>> dianp

let App = ({info}) => (
  <div >
    <Router>
<<<<<<< HEAD
      {/* {userOn(info.isLogin)} */}
      {/* <FirebaseContext.Consumer>
        {checkFirebase()}
      </FirebaseContext.Consumer> */}
          <Header />
          <Switch>
          <Route path="/" exact>
            <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/logout">
              <Logout></Logout>
            </Route>
            <Route path="/daftarbaru">
              <DaftarBaru></DaftarBaru>
            </Route>
            <Route path="/pendaftaraninstruktur">
              {/* <Register></Register> */}
            </Route>
            <Route path="/userdashboard" component={UserDashboard}></Route>
            
            <Route path='/bmicalculator' component={BMICalculator}></Route> 
            <Route path='/caloriescalculator' component={CaloriesCalculator}></Route>
            <Route path='/inputweightlossplan' component={InputWeightlossPlan}></Route>
            <Route path='/inputweightrecord' component={InputWeightRecord}></Route>
            <Route path='/instrukturdashboard' component={InstrukturDashboard}></Route>
            <Route path='/buatkonten' component={BuatKonten}></Route>
            <Route path='/buatprogram' component={BuatProgram}></Route>
          </Switch>
          <Footer />
=======
      {userOn(info.isLogin)}
      {/* <FirebaseContext.Consumer>
        {checkFirebase()}
      </FirebaseContext.Consumer> */}
          <div >
            <Header />
          </div>
          <div>
            <Switch>
            <Route path="/" exact>
              <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/logout">
                <Logout></Logout>
              </Route>
              <Route path="/daftarbaru">
                <DaftarBaru></DaftarBaru>
              </Route>
              <Route path="/pendaftaraninstruktur">
                {/* <Register></Register> */}
              </Route>
              <Route path='/userdashboard' component={UserDashboard}></Route>
              <Route path='/bmicalculator' component={BMICalculator}></Route> 
              <Route path='/caloriescalculator' component={CaloriesCalculator}></Route>
              <Route path='/inputweightlossplan' component={InputWeightlossPlan}></Route>
              <Route path='/inputweightrecord' component={InputWeightRecord}></Route>
              
              <Route path='/instrukturdashboard' component={InstrukturDashboard}></Route> 
              <Route path='/buatkonten' component={BuatKonten}></Route>
              <Route path='/buatprogram' component={BuatProgram}></Route>
              <Route path='/lihatuser' component={LihatUser}></Route>
            </Switch>
          </div>
          <div>
            <Footer />
          </div>
>>>>>>> dianp
        </Router>
  </div>

)

// const checkFirebase = () => {
//   return firebase => (
//     <div>Firebase sukses!</div>
//   )
// }

const userOn = (user) => {
  console.log(user)
  if (user !== false) {
    return (
      <Redirect to="/"></Redirect>
    )
  }
}

const mapStateToProps = (state) => ({
  info: state.auth
})


App = connect(mapStateToProps)(App)

export default App;
