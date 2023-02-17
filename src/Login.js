import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { app } from "./firebase.config";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const userLogin = async () => {
    const {
      user: { refreshToken, providerData },
    } = await signInWithPopup(auth, provider);
    console.log(providerData[0]);
  };
  return (
    <div>
      <button onClick={userLogin}>login</button>
    </div>
  );
};

export default Login;
