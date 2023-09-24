import { useContext } from "react";
import { NewsContext } from "../../context/news-context";
import { json, useNavigate } from "react-router";
// import handlerSubmit from "../../services/handlerSubmit";

function SignUp() {
    const navigate = useNavigate()
    const {
        password,
        rememberme,
        username,
        setPassword,
        setRememberme,
        setUsername } = useContext(NewsContext);

    const handlerSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        const objUser = {
            username,
            password,
            rememberme
        }
        localStorage.setItem('user', JSON.stringify({ username, password, rememberme }))
        setPassword('');
        setUsername('');
        setRememberme(true)
        navigate('/')
    }
    return (
        <>
            <h1>Hello!</h1>
            <p>Signup to get Started</p>

            <label htmlFor="username">
                Username
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={({ target }) => setUsername(target.value)} />
            </label>
            <label htmlFor="password">
                Password
                <input
                    type="text"
                    id="password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)} />
            </label>
            <label htmlFor="remembermy">
                <input
                    type="checkbox"
                    name="remembermy"
                    id="remembermy"
                    checked={rememberme}
                    onChange={() => setRememberme(!rememberme)} />
                Remember my
            </label>
            <a href="/forgotpassword">Forgot the password ?</a>
            <button onClick={(event) => handlerSubmit(event)}>login</button>
            <span>Already have an account ? <a href="/">Login</a></span>

        </>
    )
}

export default SignUp;