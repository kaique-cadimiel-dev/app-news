
function Profile() {
    // const { image, username } = useContext(NewsContext);
    const { image, username } = JSON.parse(localStorage.getItem('user'));
    console.log(image);

    return (
        <>
            <h4>Profile</h4>
            <img src={image} alt="profile image" />
            <span>{username}</span>
            <a href="/settings"><img src="src/assets/settings_FILL0_wght400_GRAD0_opsz24.png" alt="settings image" /></a>
            <a href="/editprofile">Edit profile</a>
        </>
    )
}

export default Profile;