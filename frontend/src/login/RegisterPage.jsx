import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.scss';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('project'); // Default role is 'project'
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  // Function to handle the registration form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    
    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    setLoading(true); // Set loading state

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
        confirmPassword,
        role
      });

      alert(response.data.message);
      navigate('/login');
    } catch (error) {
      // Error handling with fallback message
      alert(error.response?.data?.message || 'An error occurred during registration');
    } finally {
      setLoading(false); // Reset loading state after request
    }
  };

  return (
    <div className="register-page">
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="register-name">Name:</label>
            <input
              type="text"
              id="register-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-email">Email:</label>
            <input
              type="email"
              id="register-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-password">Password:</label>
            <input
              type="password"
              id="register-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="register-confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-role">Role:</label>
            <select
              id="register-role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="project">Project</option>
              <option value="finance">Finance</option>
              <option value="hr">HR</option>
              <option value="sales">Sales</option>
              <option value="operation">Operations</option>
              <option value="technical">Technical</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
