import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBbc_oRyVjzPxi5zlK_vZMvPsOu3ONUrj0",
    authDomain: "sgegps-acd33.firebaseapp.com",
    projectId: "sgegps-acd33",
    storageBucket: "sgegps-acd33.appspot.com",
    messagingSenderId: "44683104600",
    appId: "1:44683104600:web:196d17e38954e58f3b952d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)