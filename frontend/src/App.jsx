import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThreeBackground from './components/ThreeBackground';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import Roadmap from './pages/Roadmap';
import Resources from './pages/Resources';
import Updates from './pages/Updates';
import Profile from './pages/Profile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen overflow-hidden">
        <ThreeBackground />
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <Routes>
              <Route 
                path="/" 
                element={
                  isAuthenticated ? 
                  <Navigate to="/dashboard" /> : 
                  <Login 
                    setIsAuthenticated={setIsAuthenticated} 
                    setUser={setUser} 
                  />
                } 
              />
              <Route 
                path="/dashboard" 
                element={
                  isAuthenticated ? 
                  <Dashboard user={user} /> : 
                  <Navigate to="/" />
                } 
              />
              <Route 
                path="/events" 
                element={
                  isAuthenticated ? 
                  <Events /> : 
                  <Navigate to="/" />
                } 
              />
              <Route 
                path="/roadmap" 
                element={
                  isAuthenticated ? 
                  <Roadmap /> : 
                  <Navigate to="/" />
                } 
              />
              <Route 
                path="/resources" 
                element={
                  isAuthenticated ? 
                  <Resources /> : 
                  <Navigate to="/" />
                } 
              />
              <Route 
                path="/updates" 
                element={
                  isAuthenticated ? 
                  <Updates /> : 
                  <Navigate to="/" />
                } 
              />
              <Route 
                path="/profile" 
                element={
                  isAuthenticated ? 
                  <Profile user={user} setUser={setUser} /> : 
                  <Navigate to="/" />
                } 
              />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </Router>
  );
}

export default App;
