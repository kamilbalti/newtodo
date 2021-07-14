import firebase from "../Firebase/Firebase";
import React from "react";
import Input from "./Input";
import Result from "./Result";
import { setCheck, setResult, setUser } from "../redux/Action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const Todo = () => {
  const dispatch = useDispatch();
  const { user, result, check } = useSelector((state) => state);
  // const uid = firebase.auth().currentUser?.uid;

  useEffect(() => {
    check &&
      firebase
        .database()
        .ref(`User/${user?.uid}`)
        .update({
          userData: (Array.isArray(result) && result) || [],
        });
  }, [result]);

  useEffect(() => {
    firebase
      .database()
      .ref(`User/${user?.uid}/userData`)
      .on("value", (res) => {
        console.log(res.val(), "checkingresult");
        dispatch(setResult(res.val()));
        dispatch(setCheck(true));
        console.log(result, "checkingtempResult");
      });
  }, []);

  const logOut = () => {
    firebase.auth().signOut();
    dispatch(setUser(false));
  };
  return (
    <div className='TodoDiv'>
      <div className='space'></div>
      <div className='column1'>
        <Input />
        <Result />
      </div>
      <div className='row'>
        <button className='button2 button' onClick={() => logOut()}>
          Sign Out
        </button>
      </div>
    </div>
  );
};
export default Todo;
