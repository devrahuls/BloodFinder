import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPass from "./components/forgotPass";
import CreatePost from "./pages/CreatePost";
import ProfilePage from "./pages/ProfilePage";
// import { Home, SignUp } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPass />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/post" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
