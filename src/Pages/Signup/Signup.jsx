import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

 const Signup = () => {
  const { signUpHandler, checkLogin } = useContext(AuthContext);
  const [msg, setMsg] = useState("");
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  if (checkLogin()) {
    navigate("/");
  }
  const disablehandler = (e) => {
    if (e.target.value.trim() === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };
  const confirmPasswordHandler = (e) => {
    if (
      !disabled &&
      e.target.value.trim() !== "" &&
      document.getElementById("password").value !== e.target.value
    ) {
      setMsg("Password not matching");
    } else {
      setMsg("");
    }
  };
  return (
    <>
      <form
        onSubmit={(e) =>
          signUpHandler(
            e,
            e.target.elements.firstname.value,
            e.target.elements.lastname.value,
            e.target.elements.email.value,
            e.target.elements.password.value
          )
        }
        className="signup-container"
      >
        <h2 className="signup-heading">Sign Up</h2>
        <label htmlFor="firstname" className="signup-label">
          First Name
        </label>
        <input
          id="firstName"
          className="signup-input"
          type="text"
          placeholder="Alex"
          required={true}
          name="firstname"
        />
        <label htmlFor="lastname" className="signup-label">
          Last Name
        </label>
        <input
          id="lastname"
          className="signup-input"
          type="text"
          placeholder="Developer"
          required={true}
          name="lastname"
        />
        <label htmlFor="email" className="signup-label">
          Email Address
        </label>
        <input
          id="email"
          className="signup-input"
          type="text"
          placeholder="example@gmail.com"
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          required={true}
          name="email"
        />
        <label htmlFor="password" className="signup-label">
          Password
        </label>
        <input
          id="password"
          className="signup-input"
          type="password"
          placeholder="*****"
          required={true}
          name="password"
          onChange={(e) => disablehandler(e)}
        />
        <p className="match-password">{msg}</p>
        <label htmlFor="confirmPassword" className="signup-label">
          Confirm Password
        </label>
        <input
          id="confirm-password"
          className="signup-input"
          type="password"
          placeholder="*****"
          onChange={(e) => confirmPasswordHandler(e)}
          required={true}
          name="confirmPassword"
          disabled={disabled}
        />
        <button type="submit" className="signup-button" disabled={msg !== ""}>
          Create New Account
        </button>
        <Link className="signup-link" to="/login">
          Already have an account &gt;
        </Link>
      </form>
    </>
  );
};

export default Signup;
