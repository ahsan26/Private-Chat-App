var config = {
    apiKey: "AIzaSyD0I2t9Hdyowhp1iT8BzFGx5VuGgjXY5sE",
    authDomain: "private-chatapp.firebaseapp.com",
    databaseURL: "https://private-chatapp.firebaseio.com",
    projectId: "private-chatapp",
    storageBucket: "private-chatapp.appspot.com",
    messagingSenderId: "607111823385"
};
firebase.initializeApp(config);
let ref=firebase.database().ref();