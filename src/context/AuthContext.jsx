import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on app start
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("kicks_user"));
    if (storedUser?.token) {
      setUser(storedUser);
    }
  }, []);

  // Register function
  const register = async (formData) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      toast.success("Account created successfully!");
      return { success: true, message: res.data.message };
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
      return { success: false };
    }
  };

  // Login function
  const login = async ({ email, password }) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      const loggedInUser = res.data.user;

      // Store in localStorage
      localStorage.setItem("kicks_user", JSON.stringify(loggedInUser));
      setUser(loggedInUser);
      toast.success("Login successful");
      return { success: true };
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
      return { success: false };
    }
  };

  const logout = () => {
    localStorage.removeItem("kicks_user");
    setUser(null);
    toast.info("Logged out");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
