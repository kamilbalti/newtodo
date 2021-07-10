import { BrowserRouter as Router, Route } from "react-router-dom"
import SignUp from "./SignUp"
import SignIn from "./SignIn"
// import Todo from "./Todo"
const Router1 = () => {
    return(
        <Router>
            <Route exact path={"/"} component={SignIn} />
            <Route path={"/signup"} component={SignUp} />
        </Router>
    )
}
export default Router1