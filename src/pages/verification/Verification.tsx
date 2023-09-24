function Verification() {
    return (
        <>
            <h1>Reset Password</h1>
            <label htmlFor="newpassword">
                New Password
                <input type="text" id="newpassword" />
            </label>
            <label htmlFor="confirmnewpassword">
                Confirm new password
                <input type="text" id="confirmnewpassword" />
            </label>
            <button>Submit</button>
        </>
    )
}

export default Verification;