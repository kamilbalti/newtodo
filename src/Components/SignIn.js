import { useState } from "react";
import { useDispatch } from "react-redux";
import firebase from "../Firebase/Firebase";
import { setUser } from "../redux/Action";
import "./SignIn.css";

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const logIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        dispatch(setUser(res?.user));
      });
  };
  const submit = (e) => {
    e.preventDefault();
    logIn();
  };
  return (
    <form className='form' onSubmit={submit}>
      <div className='column'>
        <h1 className='heading'>LOGIN</h1>
        <input
          className='input'
          type='text'
          placeholder='Email Id'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='input'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='button' type='submit'>
          Log In
        </button>
        <p>
          Do not have an Account? <a href='/signUp'>Create one</a>
        </p>
      </div>
    </form>
  );
};
export default SignIn;
