import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Eye, EyeOff, Lock, User } from 'lucide-react';
import axios from 'axios';

const Login = ({ setIsAuthenticated, setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    usn: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const payload = isLogin 
        ? { email: formData.email, password: formData.password }
        : formData;

      const response = await axios.post(`http://localhost:5000${endpoint}`, payload);
      
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      setIsAuthenticated(true);
      setUser(response.data.user);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Terminal className="w-12 h-12 text-neon-green" />
            <h1 className="text-4xl font-bold text-white font-mono">CRYPTON</h1>
          </div>
          <p className="text-gray-400 font-mono">Cybersecurity Student Club</p>
          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-cyan-500 to-neon-green mx-auto"></div>
        </div>

        <div className="bg-black/50 backdrop-blur-sm border border-neon-green/30 rounded-xl p-8">
          <div className="flex mb-6 border-b border-gray-800">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 font-bold ${isLogin ? 'text-neon-green border-b-2 border-neon-green' : 'text-gray-400'}`}
            >
              LOGIN
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 font-bold ${!isLogin ? 'text-neon-green border-b-2 border-neon-green' : 'text-gray-400'}`}
            >
              SIGNUP
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-400 text-sm font-mono mb-2">USERNAME</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neon-green" />
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-neon-green/30 rounded-lg py-3 pl-10 pr-4 text-white font-mono focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green"
                    placeholder="hacker_one"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-mono mb-2">EMAIL</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neon-green">@</div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 border border-neon-green/30 rounded-lg py-3 pl-10 pr-4 text-white font-mono focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green"
                  placeholder="user@crypton.edu"
                  required
                />
              </div>
            </div>

            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-400 text-sm font-mono mb-2">USN</label>
                <input
                  type="text"
                  name="usn"
                  value={formData.usn}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 border border-neon-green/30 rounded-lg py-3 px-4 text-white font-mono focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green"
                  placeholder="1CR20CSXXX"
                  required={!isLogin}
                />
              </div>
            )}

            <div className="mb-6">
              <label className="block text-gray-400 text-sm font-mono mb-2">PASSWORD</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neon-green" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 border border-neon-green/30 rounded-lg py-3 pl-10 pr-12 text-white font-mono focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neon-green"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-600 to-neon-green text-black font-bold py-3 rounded-lg hover:from-cyan-500 hover:to-neon-green/90 transition-all duration-300 font-mono flex items-center justify-center space-x-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <Terminal className="w-5 h-5" />
                  <span>{isLogin ? 'EXECUTE LOGIN' : 'CREATE ACCOUNT'}</span>
                </>
              )}
            </motion.button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6 font-mono">
            {isLogin ? "Need access? " : "Already have credentials? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-neon-green hover:underline"
            >
              {isLogin ? 'Request Signup' : 'Login here'}
            </button>
          </p>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block animate-pulse">
            <div className="flex space-x-2">
              {['█', '▓', '▒', '░'].map((char, i) => (
                <span key={i} className="text-neon-green font-mono">{char}</span>
              ))}
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-2 font-mono">Secure terminal v2.0.25</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
