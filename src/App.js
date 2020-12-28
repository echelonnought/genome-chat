/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import GenomeChat from "./GenomeChat";
import { selectUser, login, logout } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      authUser
        ? dispatch(
            login({
              uid: authUser.uid,
              photo: authUser.photoURL,
              email: authUser.email,
              displayName: authUser.displayName,
            })
          )
        : dispatch(logout());
    });
  }, []);

  return <div className="app">{user ? <GenomeChat /> : <Login />}</div>;
}

export default App;
