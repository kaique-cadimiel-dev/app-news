function Login() {
    return (
        <>
            <h1>Hello Again!</h1>
            <p>Welcome back you’ve been missed</p>
            <form>
                <label htmlFor="username">
                    Username
                    <input type="text" id="username" />
                </label>
                <label htmlFor="password">
                    Password
                    <input type="text" id="password" />
                </label>
                <label htmlFor="remembermy">
                    <input type="checkbox" name="remembermy" id="remembermy" />
                    Remember my
                </label>
                <a href="/forgotpassword">Forgot the password ?</a>
                <button>login</button>
                <span>don’t have an account ? <a href="/signup">Sign Up</a></span>
            </form>
        </>
    )
}

export default Login;