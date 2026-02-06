import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Lock, Cpu, AlertTriangle, Users } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const Dashboard = ({ user }) => {
  const [missions, setMissions] = useState([
    "Secure the perimeter.",
    "Monitor network traffic for anomalies.",
    "Update security patches.",
    "Conduct penetration testing.",
    "Review access logs.",
    "Train new recruits."
  ]);

  const [currentMission, setCurrentMission] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMission((prev) => (prev + 1) % missions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [missions.length]);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-3">
            <Terminal className="w-10 h-10 text-neon-green" />
            <div>
              <h1 className="text-2xl font-bold text-white font-mono">CRYPTON DASHBOARD</h1>
              <p className="text-gray-400 text-sm font-mono">Welcome, {user?.username || 'Agent'}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm font-mono">STATUS: <span className="text-neon-green">ONLINE</span></p>
            <p className="text-gray-400 text-xs font-mono">v2.5.1</p>
          </div>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-mono">
              <span className="text-white">WELCOME TO </span>
              <span className="text-neon-green animate-pulse">CRYPTON 2025</span>
            </h1>
            <div className="h-1 w-48 bg-gradient-to-r from-cyan-500 to-neon-green mx-auto mb-6"></div>
            
            <div className="inline-block px-4 py-2 bg-neon-green/20 border border-neon-green rounded-lg mb-6">
              <p className="text-neon-green font-mono text-sm">
                SYSTEM TIME: {new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Message Board */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black/50 backdrop-blur-sm border border-neon-green/30 rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 font-mono flex items-center">
              <Terminal className="w-6 h-6 mr-2 text-neon-green" />
              SYSTEM MESSAGES
            </h2>
            <div className="h-64 overflow-y-auto font-mono">
              <div className="space-y-4">
                <div className="p-4 bg-neon-green/10 border-l-4 border-neon-green">
                  <p className="text-white">
                    <Typewriter
                      options={{
                        strings: ['Welcome to CRYPTON Cybersecurity Club. Your mission begins now.'],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        delay: 40,
                      }}
                    />
                  </p>
                  <p className="text-gray-400 text-sm mt-2">SYSTEM ADMIN</p>
                </div>
                
                <div className="p-4 bg-cyan-500/10 border-l-4 border-cyan-500">
                  <p className="text-white">
                    <Typewriter
                      options={{
                        strings: ['Next CTF competition: December 15-17, 2025. Register now!'],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        delay: 40,
                      }}
                    />
                  </p>
                  <p className="text-gray-400 text-sm mt-2">EVENT COORDINATOR</p>
                </div>
                
                <div className="p-4 bg-purple-500/10 border-l-4 border-purple-500">
                  <p className="text-white">
                    <Typewriter
                      options={{
                        strings: ['Security workshop: Advanced Penetration Testing this Friday.'],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        delay: 40,
                      }}
                    />
                  </p>
                  <p className="text-gray-400 text-sm mt-2">TRAINING DEPT</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Directives */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 font-mono flex items-center">
              <AlertTriangle className="w-6 h-6 mr-2 text-cyan-500" />
              MISSION DIRECTIVES
            </h2>
            <div className="h-64 flex flex-col justify-center">
              <div className="text-center">
                <div className="inline-block p-6 bg-black/50 border border-cyan-500/50 rounded-lg mb-6">
                  <p className="text-2xl font-bold text-cyan-400 font-mono">
                    <Typewriter
                      options={{
                        strings: [missions[currentMission]],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 30,
                        delay: 60,
                      }}
                    />
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {missions.slice(0, 4).map((mission, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border font-mono text-sm ${index === currentMission ? 'border-neon-green bg-neon-green/10' : 'border-gray-800'}`}
                    >
                      <p className={index === currentMission ? 'text-neon-green' : 'text-gray-400'}>
                        {mission}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { icon: Shield, label: 'Active Members', value: '256', color: 'neon-green' },
            { icon: Lock, label: 'CTF Wins', value: '42', color: 'cyan-500' },
            { icon: Cpu, label: 'Hackathons', value: '18', color: 'purple-500' },
            { icon: Users, label: 'Workshops', value: '36', color: 'yellow-500' },
          ].map((stat, index) => (
            <div key={index} className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <stat.icon className={`w-10 h-10 mx-auto mb-3 text-${stat.color}`} />
              <p className="text-3xl font-bold text-white font-mono">{stat.value}</p>
              <p className="text-gray-400 text-sm font-mono">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Quick Access */}
        <div className="text-center">
          <p className="text-gray-400 font-mono mb-4">SELECT YOUR NEXT MISSION</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['DASHBOARD', 'EVENTS', 'ROADMAP', 'RESOURCES', 'UPDATES', 'PROFILE'].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="px-6 py-3 bg-black/50 border border-neon-green/30 rounded-lg hover:bg-neon-green/10 hover:border-neon-green transition-all duration-300"
              >
                <span className="text-neon-green font-bold font-mono">{item}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
