import { combineReducers } from "redux"
import Firebase from '../config';
import { FirebaseContext } from '../config';


const loginInfo = {
    isLogin: false,
    theUser: '',
    userID: '',
    role: ''
}

var a = new Firebase()

const user = {
    user : ''
}
const admin = {
    admin: { "user": "shir", "pass": "leen", "id": "1" }
}

const authReducer = (state = loginInfo, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                isLogin: true,
                theUser: action.user,
                userID: action.id,
                role: action.role
            }
        case "LOGOUT":
            return {
                isLogin: false,
                theUser: action.user,
                userID: action.id,
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
            console.log("reducer", action.tanggallahir)
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
    a.registerFirebaseUser(email, password)
        .then(user => {
            a.insertNewUser(email, nama, jeniskelamin, pekerjaan, foto, telepon, alasan, tanggallahir)
        })
        .catch(err => {
            alert(err.message)
        })
}
