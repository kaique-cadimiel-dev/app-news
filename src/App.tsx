import { Route, Routes } from "react-router-dom";
import Login from '../src/pages/login/Login.tsx';
import ForgotPassword from '../src/pages/forgotpassword/Forgotpassword.tsx';
import SignUp from '../src/pages/signup/Signup.tsx';
import Verification from '../src/pages/verification/Verification.tsx';
import SelectCountry from '../src/pages/selectcountry/SelectCountry.tsx';
import Topics from '../src/pages/topics/Topics.tsx';
import ProfileAdd from './pages/profileadd/ProfileAdd.tsx';
import Profile from './pages/profile/Profile.tsx';
import HomePage from '../src/pages/homepage/Homepage.tsx';
import Settings from '../src/pages/settings/Settings.tsx';
import EditProfile from '../src/pages/editProfile/Editprofile.tsx';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/selectcountry" element={<SelectCountry />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/profileadd" element={<ProfileAdd />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/editprofile" element={<EditProfile />} />
    </Routes>
  )
}

export default App
