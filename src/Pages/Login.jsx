import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const timerId = useRef();
  const { checkLogin, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (checkLogin()) {
      if (location?.state?.pathname) {
        navigate(location.state.pathname);
      } else {
        navigate("/");
      }
    }
  }, [checkLogin, location, navigate]);

  const debounceClick = (callback, delay, e, ...args) => {
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      callback(e, ...args);
    }, delay);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authenticateUser(event, email, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="login-container">
        <h2 className="login-heading">Login</h2>
        <label className="login-label" htmlFor="userEmail">
          Email Address
        </label>
        <input
          className="login-input"
          type="email"
          placeholder="example@gmail.com"
          id="userEmail"
          value={email}
          onChange={handleEmailChange}
          required={true}
        />
        <label className="login-label" htmlFor="userPassword">
          Password
        </label>
        <input
          className="login-input"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="**********"
          id="userPassword"
          required={true}
        />
        <button type="submit" className="login-button">
          Login
        </button>
        <button
          onClick={(e) =>
            debounceClick(authenticateUser, 700, e, "testFirst@example.com", "123456789")
          }
          className="login-button"
        >
          Login with Test Credentials
        </button>
        <Link className="login-link" to="/signup">
          Create New Account &gt;
        </Link>
      </form>
    </>
  );
};

export default Login;
