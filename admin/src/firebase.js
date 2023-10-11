import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCgKpoRUhWR0pygq-DETAOgDo1QH3z5ye4",
  authDomain: "netflix-9826a.firebaseapp.com",
  projectId: "netflix-9826a",
  storageBucket: "netflix-9826a.appspot.com",
  messagingSenderId: "673818837409",
  appId: "1:673818837409:web:e8abec786d84c378560be0",
  measurementId: "G-GCJZSSCZHT",
};

firebase.initializeApp(firebaseConfig);

export const dataref = firebase.database();
export const storage = firebase.storage();

export default firebase;
