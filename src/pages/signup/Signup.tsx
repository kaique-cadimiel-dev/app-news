function SignUp() {
    return (
        <>
            <h1>Hello!</h1>
            <p>Signup to get Started</p>
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
                <span>Already have an account ? <a href="/">Login</a></span>
            </form>
        </>
    )
}

export default SignUp;