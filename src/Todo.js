import firebase from "firebase"
import React from "react";
import Input from "./Input";
import Result from "./Result";
const Todo = () => {
    const uid = firebase.auth().currentUser?.uid
    return(
        <div>
            <Input />
            <Result />
        </div>
    )
}
export default Todo;