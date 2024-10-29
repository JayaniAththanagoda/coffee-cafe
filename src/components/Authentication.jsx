import { useState } from "react"

export default function Authentication(){
    const [isRegistration,setIsRegistration] = useState(false)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [authenticating,setAuthenting] = useState(false)

    async function handleAuthenticate() {
        
    }

    return(
        <>
        <h2 className="sign-up-text">{isRegistration ? 'Sign up' : 'Login' }</h2>
        <p>{isRegistration ? 'Create an account': 'sign in to your Account!'}</p>
        <input value={email} onChange={(e) => {setEmail(e.target.value)}}  placeholder="Email" />
        <input value={password} onChange={(e) => {setPassword(e.target.value)}}  placeholder="********" type="password"/>
        <button><p>Submit</p></button>
        <hr />
        <div className="register-content">
            <p>{isRegistration ? 'Already have an Account ?' :'Don\'t have an account?'}</p>
            <button onClick={() => {setIsRegistration(!isRegistration)}}><p>{isRegistration ? 'Sign in' : 'Sign up'}</p></button>

        </div>
        </>
    )
}