import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confog";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;