//import * as firebase from "firebase";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyAZ97dobMUEc8cJpMB3IkZI3yTevURh6g0",
	authDomain: "erp-techjain.firebaseapp.com",
	projectId: "erp-techjain",
	storageBucket: "erp-techjain.appspot.com",
	messagingSenderId: "352696599757",
	appId: "1:352696599757:web:a97d50c16c647a4b0a9584",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
  