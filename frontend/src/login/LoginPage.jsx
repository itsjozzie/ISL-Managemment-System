import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./loginPage.scss";
import IntelligenceLogo from "../assets/images/logo.png";

function LoginPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle the first step of email submission
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("http://localhost:5000/api/auth/check-email", { email });
      if (response.status === 200) {
        setStep(2); // Proceed to password entry step if email is valid
      } else {
        setError("Unexpected response from server.");
      }
    } catch (error) {
      console.error("Error checking email:", error);
      setError("Invalid email address");
    } finally {
      setLoading(false);
    }
  };

  // Handle the login process
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      const { token, role } = response.data;

      // Store token and role in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      // Redirect user based on role
      switch (role) {
        case 'finance':
          navigate("/finance/dashboard");
          break;
        case 'hr':
          navigate("/hr/dashboard");
          break;
        case 'project':
          navigate("/project/dashboard");
          break;
        case 'sales':
          navigate("/sales/dashboard");
          break;
        case 'operation':
          navigate("/operation/dashboard");
          break;
        case 'technical':
          navigate("/technical/dashboard");
          break;
        case 'admin':
          navigate("/admin/dashboard");
          break;
        default:
          navigate("/"); 
          break;
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(error.response ? error.response.data.message : "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="header">
          <img src={IntelligenceLogo} alt="Intelligence Logo" className="logo" />
          <div className="title">Intelligence</div>
        </div>
        <div className="form-wrapper">
          {step === 1 ? (
            <>
              <h2 className="sign-in-heading">Sign in</h2>
              <form onSubmit={handleEmailSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    id="login-email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                {error && <div className="error-message">{error}</div>}
                <div className="form-footer">
                  <button type="submit" disabled={loading} className="sign-in-button">
                    {loading ? "Next..." : "Next"}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h2 className="sign-in-heading">Sign in</h2>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <input
                    type="password"
                    id="login-password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <div className="error-message">{error}</div>}
                <div className="form-footer">
                  <button type="submit" disabled={loading} className="sign-in-button">
                    {loading ? "Signing in..." : "Sign in"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
