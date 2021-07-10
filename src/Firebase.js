import firebase from "firebase"
    const firebaseConfig = {
        apiKey: "AIzaSyAJSgyOpbGfORKJ3cglTeJTAI5sx_b2Wq0",
        authDomain: "newtodo-9bd66.firebaseapp.com",
        databaseURL: "https://newtodo-9bd66-default-rtdb.firebaseio.com",
        projectId: "newtodo-9bd66",
        storageBucket: "newtodo-9bd66.appspot.com",
        messagingSenderId: "926014249361",
        appId: "1:926014249361:web:6599f65b375863662fa230",
        measurementId: "G-6KPN711L8H"
      };

      firebase.initializeApp(firebaseConfig);
      firebase.analytics();