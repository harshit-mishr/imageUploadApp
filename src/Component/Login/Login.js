import React, { useState, useEffect } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Style from "./Login.module.css";
import { useNavigate, Link } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPasword, setErrorPasword] = useState("");
  const [allUserDetails, setAllUserDetails] = useState([]);
  const navi = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userDatas")) {
      let usersDetails = JSON.parse(localStorage.getItem("userDatas")) || [];
      console.log(usersDetails, "i am from local storage data");
      setAllUserDetails(usersDetails);
    }
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    const alreadyRegister = allUserDetails.find(
      (x) => x.email === email && x.phone === password
    );
    if (alreadyRegister) {
      alert(`${alreadyRegister.firstName} thanks for login`);
      navi("/home");
    } else {
      if (email === "" || password === "") {
        alert("Please fill the input box");
      } else if (errorEmail || errorPasword) {
        alert(`You have enter wrong details`);
      }
    }
  };

  return (
    <>
      <div className={Style.main}>
        <div className={Style.Wrapper}>
          <h1>
            LogIn 📞
            <br /> with Us!!🤩
          </h1>
        </div>

        <div className={Style.ContactForm}>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="submit" className={Style.Buttons}>
              Login
            </button>
            {errorMessage && <p className={Style.Error}>{errorMessage}</p>}
            <p>
              create a acount <Link to="/">SignUp</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
