// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, 
        signInWithPopup, 
        signInWithRedirect, 
        GoogleAuthProvider 
    } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPKiGbm5-xG2IAyYZVHn2n8tV9uAtRWsI",
  authDomain: "crown-clothing-db1.firebaseapp.com",
  projectId: "crown-clothing-db1",
  storageBucket: "crown-clothing-db1.appspot.com",
  messagingSenderId: "893099447369",
  appId: "1:893099447369:web:0d5f694c540e64db3d1b98"
};
import {
  getFirestore,
  doc,
  getDoc,
  setDoc

} from 'firebase/firestore'

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid );
  
  const userSnapshot = await getDoc(userDocRef)
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch(error){
        console.log('error creating the user', error.message);
    }
  }

  return userDocRef;

}