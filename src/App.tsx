import { Route, Routes } from "react-router-dom";
import Login from '../src/pages/login/Login.tsx';
import ForgotPassword from '../src/pages/forgotpassword/Forgotpassword.tsx';
import SignUp from '../src/pages/signup/Signup.tsx';
import Verification from '../src/pages/verification/Verification.tsx';
import SelectCountry from '../src/pages/selectcountry/SelectCountry.tsx';
import Topics from '../src/pages/topics/Topics.tsx';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/selectcountry" element={<SelectCountry />} />
      <Route path="/topics" element={<Topics />} />
    </Routes>
  )
}

export default App
