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