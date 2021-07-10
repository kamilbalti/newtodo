import { useState } from "react"
import firebase from "firebase"
const SignUp = () => {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ userName, setUserName ] = useState("")
    // const [ userDetail, setUserDetail ] = useState([])
    // const [ user, setUser ] = useState("")
    // const [ uid, setUid ] = useState("")
    const [ error, setError ] = useState(false)
    const createAccount = () => {
        const userDetail = {
            email: email,
            userName: userName,
            password: password
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user, "user")
            userDetail.userId = user?.uid
            firebase.database().ref(`User/${user?.uid}`).set({
                userDetail: userDetail               
            })
            .catch((err) => {
                setError(err)
            })
        })
    }   
    return(
        <div >
            <form onSubmit={() => createAccount()}>
                <div>
                    <h1>SIGN UP</h1>
                    <input type="text" placeholder="User Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <input type="text" placeholder="Email Id" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Sign Up</button>
                    <p>Already have an account? <a href="/">Log In</a></p>
                    </div>
                    </form>
                    </div>
    )
}
export default SignUp