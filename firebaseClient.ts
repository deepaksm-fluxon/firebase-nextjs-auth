import { getApp, getApps, initializeApp, } from "firebase/app";
import "firebase/auth";
import { getAuth, initializeAuth, setPersistence } from "firebase/auth";

/*

Copy/paste your *client-side* Firebase credentials below. 

To get these, go to the Firebase Console > open your project > Gear Icon >
Project Settings > General > Your apps. If you haven't created a web app
already, click the "</>" icon, name your app, and copy/paste the snippet.
Otherwise, go to Firebase SDK Snippet > click the "Config" radio button >
copy/paste.

*/
const CLIENT_CONFIG = {
  apiKey: "AIzaSyBiRfiOLsb_ULnEqKubMMDpqSPZ7w-Cm6s",
  authDomain: "rahul-fluxon-testing.firebaseapp.com",
  databaseURL: "https://fir-nextjs-ssr.firebaseio.com",
  projectId: "rahul-fluxon-testing",
  storageBucket: "rahul-fluxon-testing.appspot.com",
  messagingSenderId: "92812809015",
  appId: "1:92812809015:web:3484b928859b93caf340b2"
};

const initializeClientFirebase = () => {
  if (typeof window !== "undefined" && !getApps().length) {
    initializeApp(CLIENT_CONFIG);
    initializeAuth(getApp(), { persistence: { type: 'SESSION' } })
    // setPersistence(getAuth(), { type: 'SESSION' });
  }
}

export { initializeClientFirebase };
