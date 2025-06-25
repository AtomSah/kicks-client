import React, { useState, useContext } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

function Register() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match");
    }

    const { username, email, password } = form;
    const res = await register({ username, email, password });

    if (res.success) {
      setSuccess(res.message);
      setError('');
      navigate("/login");
    } else {
      setError(res.message);
      setSuccess('');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Form */}
      <div className="w-3/5 flex items-center justify-center bg-white px-8">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <h1 className="text-2xl font-bold mb-2">JOIN KICKS</h1>
          <p className="text-sm text-gray-600">Create your account to get started</p>

          {/* Username */}
          <input id="username" type="text" onChange={handleChange} required
            className="w-full px-3 py-3 border rounded-md" placeholder="Username" />

          {/* Email */}
          <input id="email" type="email" onChange={handleChange} required
            className="w-full px-3 py-3 border rounded-md" placeholder="Email" />

          {/* Password */}
          <div className="relative">
            <input id="password" type={showPassword ? "text" : "password"} onChange={handleChange} required
              className="w-full px-3 py-3 border rounded-md pr-10" placeholder="Password" />
            <button type="button" className="absolute right-3 top-3" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input id="confirmPassword" type={showConfirm ? "text" : "password"} onChange={handleChange} required
              className="w-full px-3 py-3 border rounded-md pr-10" placeholder="Confirm Password" />
            <button type="button" className="absolute right-3 top-3" onClick={() => setShowConfirm(!showConfirm)}>
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Feedback */}
          {error && <p className="text-red-600 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          {/* Submit */}
          <button type="submit" className="w-full bg-amber-600 text-white py-3 rounded-md">
            Create Account
          </button>

          <p className="text-sm text-gray-600 text-center">
            Already have an account? <Link to="/login" className="text-amber-600">Sign In</Link>
          </p>
        </form>
      </div>

      {/* Right panel */}
      <div className="w-2/5 bg-gradient-to-br from-orange-200 to-orange-300 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="src/assets/loginp.png"
            alt="shoe"
            className="max-w-full max-h-full object-contain p-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
