import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Signup.css";

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation logic here
  };

  return (
    <div className="signup-bg">
      <motion.form
        className="signup-card"
        initial={{ opacity: 0, y: 60, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, type: "spring" }}
        onSubmit={handleSubmit}
      >
        <h2 className="gradient-title">Create your account</h2>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email Address
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05, background: "linear-gradient(90deg, #0053ba 0%, #00c6fb 100%)" }}
          whileTap={{ scale: 0.97 }}
        >
          Sign Up
        </motion.button>
        <p className="signup-terms">
          By signing up, you agree to our <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>.
        </p>
      </motion.form>
    </div>
  );
}
