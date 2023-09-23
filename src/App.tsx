import { Route, Routes } from "react-router-dom";
import Login from '../src/pages/login/Login.tsx';
import ForgotPassword from '../src/pages/forgotpassword/Forgotpassword.tsx';
import SignUp from '../src/pages/signup/Signup.tsx';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default App
