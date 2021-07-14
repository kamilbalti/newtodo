import firebase from "../Firebase/Firebase";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/Action";
import Todo from "./Todo";
const Router1 = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((isUser) => {
      dispatch(setUser(isUser));
    });
  }, []);
  return (
    <Router>
      <Switch>
        {user ? <Route exact path={"/"} component={Todo} /> : false}
        <Route exact path={"/"} component={SignIn} />
        <Route path={"/signup"} component={SignUp} />
        {/* <Route path={`/${user?.uid}`} component={Todo} /> */}
      </Switch>
    </Router>
  );
};
export default Router1;
