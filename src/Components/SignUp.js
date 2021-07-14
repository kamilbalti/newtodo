import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import firebase from "../Firebase/Firebase";
import { setUser } from "../redux/Action";
const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const { user } = useSelector((state) => state);
  const [error, setError] = useState(false);
  const createAccount = () => {
    const userDetail = {
      email: email,
      userName: userName,
      password: password,
    };
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        userDetail.userId = res?.user?.uid;
        firebase
          .database()
          .ref(`User/${res?.user?.uid}`)
          .set({
            userDetail: userDetail || {},
            userData: [],
          })
          .then(() => {
            dispatch(setUser(res?.user));
            console.log(user, "user");
            setEmail("");
            setPassword("");
            setUserName("");
            Location.href = res?.user?.uid;
          })
          .catch((res) => {
            setError(res?.err);
          });
      });
  };
  const submit = (e) => {
    e.preventDefault();
    createAccount();
  };
  if (user) return <Redirect to={"/"} />;
  return (
    <form className='form' onSubmit={submit}>
      <div className='column'>
        <h1 className='heading'>SIGN UP</h1>
        <input
          className='input'
          type='text'
          placeholder='User Name'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
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
        <button type='submit' className='input'>
          Sign Up
        </button>
        <p>{error}</p>
        <p>
          Already have an account? <a href='/'>Log In</a>
        </p>
      </div>
    </form>
    // </div>
  );
};
export default SignUp;
