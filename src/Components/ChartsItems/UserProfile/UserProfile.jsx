import React, { useContext } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { UserContext } from "../../../Context/UserContext";
import "./UserProfile.css";
import { SideBarContext } from "../../../Context/contextProvider";
import { useNavigate } from "react-router-dom";
import { SignOutAuth } from "../../../Firebase/firebase";

const UserProfile = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { handleClick } = useContext(SideBarContext);
  const navigate = useNavigate();

  const signOutHandler = async () => {
    await SignOutAuth(currentUser);
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <div className="auth-dropDown-container">
      <div className="navPopUp-title">
        <div>Auth</div>
        <IoIosCloseCircleOutline
          className="navPopUp-toggleIcon"
          onClick={() => handleClick("userProfile")}
        />
      </div>
      <div>
        {currentUser ? (
          <button
            className="auth-login-button"
            type="button"
            onClick={signOutHandler}
          >
            LogOut
          </button>
        ) : (
          <button
            className="auth-login-button"
            type="button"
            onClick={() => navigate("/sign-in")}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
