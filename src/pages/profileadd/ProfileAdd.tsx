import { useContext } from "react"
import { NewsContext } from "../../context/news-context"

function ProfileAdd() {
    const {
        username,
        email,
        fullName,
        phone,
        image,
        setImage,
        setUsername,
        setEmail,
        setFullName,
        setPhone } = useContext(NewsContext);
    const save = (username: string, fullname: string, email: string, phone: string, image: string) => {
        localStorage.setItem('user', JSON.stringify({ username, fullname, email, phone, image }))
    };
    return (
        <>
            <h4>Fill your Profile</h4>

            <label htmlFor="img-add">
                URL da foto
                <input
                    type="text"
                    id="img-add"
                    value={image}
                    onChange={({ target }) => setImage(target.value)} />
            </label>

            <label htmlFor="username">
                Username
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={({ target }) => setUsername(target.value)} />
            </label>

            <label htmlFor="fullname">
                Full Name
                <input
                    id="fullname"
                    type="text"
                    value={fullName}
                    onChange={({ target }) => setFullName(target.value)} />
            </label>

            <label htmlFor="emailaddress">
                Email Address*
                <input
                    id="emailaddress"
                    type="text"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)} />
            </label>

            <label htmlFor="phonenumber">
                Phone Number*
                <input
                    id="phonenumber"
                    type="text"
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)} />
            </label>
            <a href="/homepage" onClick={() => save(username, fullName, email, phone, image)}>finish</a>
        </>
    )
}


export default ProfileAdd;