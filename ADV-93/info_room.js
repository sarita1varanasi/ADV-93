// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTwEuhLUP_cZbSLWhcLYZm-4WIA2qMqsg",
    authDomain: "omega-dahlia-311400.firebaseapp.com",
    databaseURL: "https://omega-dahlia-311400-default-rtdb.firebaseio.com",
    projectId: "omega-dahlia-311400",
    storageBucket: "omega-dahlia-311400.appspot.com",
    messagingSenderId: "952122996884",
    appId: "1:952122996884:web:d3b8b9d965932a5b371c81",
    measurementId: "G-EN15GQDZFM"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      });});}
getData();