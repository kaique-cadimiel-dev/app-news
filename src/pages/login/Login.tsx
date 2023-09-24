import { useContext, useEffect, useState } from "react";
import { NewsContext } from "../../context/news-context";
import { useNavigate } from "react-router";
function Login() {
    const [btn, setBtn] = useState(true);
    const { username,
        password,
        rememberme,
        setUsername,
        setPassword,
        setRememberme } = useContext(NewsContext);
    const regex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).*(\d.*\d|.*\d.*\d).*$/
    const navigate = useNavigate();

    useEffect(() => {
        if (regex.test(password) && username.length > 4) {
            setBtn(false)
        }
    }, [password])
    const auth = () => {
        navigate('/selectcountry')
    }
    return (
        <>
            <h1>Hello Again!</h1>
            <p>Welcome back you’ve been missed</p>

            <label htmlFor="username">
                Username
                <input type="text"
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
                <input type="checkbox" name="remembermy" id="remembermy" checked={rememberme} onChange={() => setRememberme(!rememberme)} />
                Remember my
            </label>
            <a href="/forgotpassword">Forgot the password ?</a>
            <button onClick={() => auth()} disabled={btn}>login</button>
            <span>don’t have an account ? <a href="/signup">Sign Up</a></span>

        </>
    )
}

export default Login;