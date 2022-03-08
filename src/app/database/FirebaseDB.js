//import * as firebase from "firebase";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyDdniTbTL-ERsGmZZL8Qm1cXg3LHw9dNmU",
	authDomain: "jaintecherp.firebaseapp.com",
	projectId: "jaintecherp",
	storageBucket: "jaintecherp.appspot.com",
	messagingSenderId: "315667733167",
	appId: "1:315667733167:web:cf3d7a151cf984e4ca125a",
	measurementId: "G-422VHKDWFQ",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
