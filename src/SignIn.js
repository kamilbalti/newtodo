// import { useState } from "react"

const SignIn = () => {
    const logIn = () => {

    }
    // const [ type, setType ] = useState("password")
    return(
        <div>
            <div>
                <form onSubmit={() => logIn()}>
                    <div>
                        <h1>LOGIN</h1>
                        <input type="text" placeholder="Email Id" />
                        <input type={"text"} placeholder="Password" />
                        <button type="submit">Log In</button>
                        <p>Do not have an Account? <a href="/signUp">Create one</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignIn