// src/pages/SignIn.js
import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
    } else {
      setError('');
      console.log('Sign In Successful');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
      {error && <div className="bg-red-200 text-red-800 p-2 rounded mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <button type="submit" className="bg-primary text-white rounded px-4 py-2 w-full hover:bg-opacity-90 transition-colors">
          Sign In
        </button>
        <p className="mt-4 text-center"><a href="/forgot-password" className="text-primary hover:underline">Forgot Password?</a></p>
      </form>
    </div>
  );
};

export default SignIn;
