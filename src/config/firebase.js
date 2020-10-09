import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
}

class Firebase {
    constructor() {
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig);
        }
        this.auth = app.auth()
        this.db = app.database();
    }

    loginFirebaseUser = (email, password) => {
        return this.auth.signInWithEmailAndPassword(email, password).
        then (function () {
            console.log("Sign in success")
        }
        ).
        catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
        })
    }

    logoutFirebaseUser = () => {
        this.auth.signOut().then(function () {
            console.log("Sign Out Success");
        }).catch(function (error) {
            console.log(error);
        });
    }

    getCurrentUser = () => {
        var user = this.auth.currentUser;
        if (user) {
            console.log("ada user")
            return user.email
        } else {
            console.log("ga ada user")
            return ''
        }
    }

    getUserRole = async (email) => {
        var role = '';
        var rootRef = this.db.ref();
        var urlRef = rootRef.child("users");
        await urlRef.once("value", function (snapshot) {
            snapshot.forEach(function (child) {
                if (child.val().email === email) {
                    console.log("found")
                    role = child.val().role
                }
            });
        });
        console.log("role", role)
        return role
    }

    registerFirebaseUser = (email, password) => {
        return this.auth.createUserWithEmailAndPassword(email, password)
    }

    insertNewUser = (email, nama, jeniskelamin, pekerjaan, foto, telepon, alasan, tanggallahir) => {
        console.log("firebase", tanggallahir)
        return this.db.ref('users/').push().set({
            email: email,
            nama: nama,
            jeniskelamin: jeniskelamin,
            pekerjaan: pekerjaan,
            foto: foto,
            telepon: telepon,
            alasan: alasan,
            tanggallahir: tanggallahir,
            role: "user",
            daftarinstruktur: "N",
        });
    }

    // getCurrentUserData = () => {
    //     var user = {};

    // }

    getAllUser = () => {
        var array = [];
        var rootRef = this.db.ref();
        var urlRef = rootRef.child("users");
        urlRef.once("value", function (snapshot) {
            snapshot.forEach(function (child) {
                // console.log(child.key + ": " + child.val());
                array.push(child.val())
            });
        });
        return array
    }

    deleteFirebaseUser = async (email) => {
        var id = '';
        var rootRef = this.db.ref();
        var urlRef = rootRef.child("users");
        await urlRef.once("value", function (snapshot) {
            snapshot.forEach(function (child) {
                //     console.log(child.key + ": " + child.val());
                if (child.val().email === email) {
                    console.log("found")
                    id = child.key
                }
            });
        });
        console.log("id", id)
        urlRef.child(id).delete()
    }

    // editFirebaseUser = async (name, email, github, phone, motto, photo) => {
    //     var id = '';
    //     var rootRef = this.db.ref();
    //     var urlRef = rootRef.child("users");
    //     await urlRef.once("value", function (snapshot) {
    //         snapshot.forEach(function (child) {
    //         //     console.log(child.key + ": " + child.val());
    //             if (child.val().email === email) {
    //                 console.log("found")
    //                 id = child.key
    //             }
    //         });
    //     });
    //     console.log("id", id)
    //     urlRef.child(id).update({
    //         'name': name,
    //         'email': email,
    //         'github': github,
    //         'phone': phone,
    //         'motto': motto,
    //         'photo': photo    
    //     })
    // }


}

export default Firebase