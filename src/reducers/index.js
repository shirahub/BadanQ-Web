import { combineReducers } from "redux"
import Firebase from '../config';
import { FirebaseContext } from '../config';


const loginInfo = {
    isLogin: false,
    theUser: '',
    role: ''
}

var firebase = new Firebase()

const user = {
    user: '',
    role: '',
}
const admin = {
    admin: { "user": "shir", "pass": "leen", "id": "1" }
}

const authReducer = (state = loginInfo, action) => {
    switch (action.type) {
        case "LOGIN":
            var user = ''
            var role = ''
            getUserLogin(action.email, action.password).then(user => {
                user = user.email
                role = user.role
            })
            if (user === '' || user === 'nothing' || user == undefined) {
                console.log("EMAIL ROLE1", user, role)
                return {
                    isLogin: false,
                    theUser: '',
                    role: '',
                }
            } else {
                console.log("MASUK m", user)
                console.log("EMAIL ROLE2", user, role)
                return {
                    isLogin: true,
                    theUser: user,
                    role: role,
                }
            }
        case "LOGOUT":
            firebase.logoutFirebaseUser()
            return {
                isLogin: false,
                theUser: action.user,
                role: action.role
            }
        default:

            return state;
    }
};

const adminReducer = (state = admin) => {
    return state;
};

const userReducer = (state = user, action) => {
    switch (action.type) {
        case "NEWUSER":
            saveRegFirebase(action.email, action.password, action.nama, action.jeniskelamin, action.pekerjaan, action.foto, action.telepon, action.alasan, action.tanggallahir)
            return state;
        default:
            return state;
    }
};

const allReducers = combineReducers({
    auth: authReducer,
    adminlogin: adminReducer,
    userManagement: userReducer
})

export default allReducers

const saveRegFirebase = (email, password, nama, jeniskelamin, pekerjaan, foto, telepon, alasan, tanggallahir) => {
    firebase.registerFirebaseUser(email, password).then(user => {
        firebase.insertNewUser(email, nama, jeniskelamin, pekerjaan, foto, telepon, alasan, tanggallahir)
    })
        .catch(err => {
            alert(err.message)
        })
}

const getUserLogin = async (email, password) => {
    try {
        firebase.loginFirebaseUser(email, password)
    } catch (error) {
        console.log(error)
    }
    var userEmail = await firebase.getCurrentUser()
    var userRole = await firebase.getUserRole(email)
    
    return { email: userEmail, role: userRole }
}

