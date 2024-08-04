import React, { useContext, useEffect, useReducer, useState } from "react";
import "./SignIn.css";
import {
  signInAuthWithEmailAndPassword,
  createEmpDocumentFromAuth,
} from "../../Firebase/firebase";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
// import { EmpContext } from "../../Context/userContext";

const reducer = (state, action) => {
  if (action.type === "NO_EMAIL") {
    return {
      ...state,
      isModalOpen: true,
      message: "Enter Email Id",
    };
  }
  if (action.type === "NO_PASSWORD") {
    return {
      ...state,
      isModalOpen: true,
      message: "Enter Password",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === "WRONG_PASSWORD") {
    return {
      ...state,
      isModalOpen: true,
      message: "Wrong Password",
    };
  }
  if (action.type === "USER_NOT_FOUND") {
    return {
      ...state,
      isModalOpen: true,
      message: "User not found",
    };
  }
};

const defaultState = {
  email: "",
  password: "",
  isModalOpen: false,
  message: "",
};

const Modal = ({ message, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 2000);
  });
  return <span style={{ color: "red" }}>{message}</span>;
};

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      dispatch({ type: "NO_EMAIL" });
    }
    if (!password) {
      dispatch({ type: "NO_PASSWORD" });
    }
    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      await createEmpDocumentFromAuth(user);
      setCurrentUser(user);
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === "auth/wrong-password") {
        dispatch({ type: "WRONG_PASSWORD" });
      } else {
        dispatch({ type: "USER_NOT_FOUND" });
      }
      console.log("error creatin user", error);
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <div className="sign-in-container">
      <div className="decorator">
        <span className="login-title">LOGIN</span>
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {state.isModalOpen && (
          <Modal closeModal={closeModal} message={state.message} />
        )}
        <button id="sign-in-button" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignIn;
