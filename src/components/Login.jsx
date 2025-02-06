import React from "react";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
    <div>
      <div>
        <div style={{ color: "black" }}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            defaultValue=""
            id=""
            style={{ color: "black" }}
          />
        </div>
        <div>
          <input
            style={{ color: "black" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name=""
            defaultValue=""
            id=""
          />
        </div>
        <div>
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
