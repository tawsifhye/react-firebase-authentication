import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './App.css';
import initializeAuthentication from './Firebase/firebase.initialize';

initializeAuthentication();
const GoogleProvider = new GoogleAuthProvider();

function App() {
  const auth = getAuth();
  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, GoogleProvider)
    .then(result => {
      const user = result.user;
    });
  }

  const handleRegistration = e =>{
    console.log("preeeeeeeeeeeeeeeeees");
    e.preventDefault();
  }
  return (
    <div className="App">
      <form onSubmit={handleRegistration}>
        <h3>Please Register</h3>
        <label htmlFor="email">Email: </label>
        <input type="text" name='email' />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id=""/>
        <br />
        <input type="submit" value="Register" />
      </form>
      <br /> <br /> <br />
      <div>--------------------------------------------------------</div>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
