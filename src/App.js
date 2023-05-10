import "./styles.css";
import Home from "./Component/Home/Home";
import UpLoad from "./Component/UpLoad/UpLoad";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Component/SignUp/SignUp";
import Login from "./Component/Login/Login";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<UpLoad />} />
      </Routes>
    </>
  );
}
