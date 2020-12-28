import { Button } from "@material-ui/core";
import React from "react";
import {auth, provider} from './firebase';
import "./Login.css";

function Login() {
    const signIn = (e) => {
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message));
    }

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://cdn.pixabay.com/photo/2018/02/27/01/55/gene-icon-3184523__340.png"
          alt=""
        />
        <h2>GenomeChat</h2>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
