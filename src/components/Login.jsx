import React from "react";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const auth = getAuth();
  const nav = useNavigate();
  function onSubmition(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        user && nav("/admin");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
  return (
    <div className="loginCon">
      <div className="loginForm">
        <div style={{ color: "black" }} className="formItem">
          <input
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            defaultValue=""
            placeholder="Enter your Email"
            id=""
            style={{ color: "black" }}
          />
        </div>
        <div className="formItem">
          <input
            style={{ color: "black" }}
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name=""
            defaultValue=""
            placeholder="Enter your Password"
            id=""
          />
        </div>
        <div className="formItem">
          <button type="submit" onClick={() => onSubmition(email, password)}>
            submit
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Login;
