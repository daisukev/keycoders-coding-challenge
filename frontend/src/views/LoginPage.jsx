import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../utils/AuthProvider.jsx";
import { useNavigate } from "react-router";
import styles from "./LoginPage.module.css";
import nakupunaLogo from "../assets/nakupuna-color-logo.png";
import sailIcon from "../assets/nakupuna-sail-icon.png";
import AvatarSVG from "../components/icons/AvatarSVG.jsx";
import LockSVG from "../components/icons/LockSVG.jsx";
import { baseUrl } from "../utils/base.jsx";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [isPending, setIsPending] = useState(false);
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    // setError('Incorrect username or password.')
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setIsPending(true);
    try {
      await login(formData.login, formData.password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Invalid Username or Password");
      setIsPending(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className="header">
        <img className={styles.logo} src={nakupunaLogo} alt="Nakupuna logo" />
      </div>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>MSR Manager</h1>
          <p className="secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            atque, alias eaque, eos ipsam odit minus qui provident, id tempore
            cum dignissimos. Labore est aliquam voluptatibus sed sunt
            dignissimos tenetur?
          </p>
        </div>
        <div className={styles.login}>
          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <h2>Log In</h2>
            <p className={styles.errorMessage}>{error}</p>
            <label htmlFor="login">
              <AvatarSVG width="2rem" height="2rem" />
              <input
                tabIndex={1}
                name="login"
                type="text"
                placeholder="Username or Email"
                onChange={handleChange}
                value={formData.login}
                autoFocus
                required
              />
            </label>
            <label htmlFor="password">
              <LockSVG width="2rem" height="2rem" />
              <input
                tabIndex={2}
                name="password"
                type="password"
                placeholder="password"
                onChange={handleChange}
                value={formData.password}
              />
            </label>
            <button type="submit" disabled={isPending}>
              {!isPending ? "Log In" : "Logging in..."}
            </button>
          </form>
          <div className={styles.sso}>
            <div className={styles.textHR}>
              <span></span>
              <small>or</small>
              <span></span>
            </div>
            <small className={styles.finePrint}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              voluptate repudiandae earum voluptates
            </small>
            <form>
              <button disabled>
                <span>Log in using SSO</span>
                <img
                  src={sailIcon}
                  alt="Nakupuna sail icon"
                  height="36px"
                  width="36px"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
