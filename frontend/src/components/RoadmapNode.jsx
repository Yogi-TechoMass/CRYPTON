import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Shield, Cpu, Cloud, Users, Lock, Target, AlertTriangle } from 'lucide-react';

const RoadmapNode = ({ domain, roles }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getIcon = (domain) => {
    switch(domain) {
      case 'Red Team': return <Target className="w-5 h-5" />;
      case 'Blue Team': return <Shield className="w-5 h-5" />;
      case 'Cloud Security': return <Cloud className="w-5 h-5" />;
      case 'GRC': return <Users className="w-5 h-5" />;
      case 'Security Engineering': return <Cpu className="w-5 h-5" />;
      case 'IAM': return <Lock className="w-5 h-5" />;
      case 'Awareness': return <AlertTriangle className="w-5 h-5" />;
      default: return <Shield className="w-5 h-5" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-4"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 bg-black/50 backdrop-blur-sm border border-neon-green/30 rounded-lg hover:border-neon-green transition-all duration-300"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-neon-green">
              {getIcon(domain)}
            </div>
            <h3 className="text-xl font-bold text-white font-mono">{domain}</h3>
          </div>
          <ChevronDown className={`w-5 h-5 text-neon-green transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 space-y-3"
          >
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="ml-8 p-4 bg-black/30 border border-cyan-500/20 rounded-lg"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="text-lg font-bold text-white">{role.title}</h4>
                      {role.level === 'Fresher Friendly' && (
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded">
                          FRESHER FRIENDLY
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 mb-3">{role.description}</p>
                    
                    <div className="mb-3">
                      <h5 className="text-sm font-bold text-cyan-400 mb-1">Prerequisites:</h5>
                      <div className="flex flex-wrap gap-2">
                        {role.prerequisites.map((prereq, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                            {prereq}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-bold text-cyan-400 mb-1">Certifications:</h5>
                      <div className="flex flex-wrap gap-2">
                        {role.certs.map((cert, i) => (
                          <span key={i} className="px-2 py-1 bg-neon-green/20 text-neon-green text-xs rounded">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      role.level === 'Fresher Friendly' 
                        ? 'bg-green-500/20 text-green-400' 
                        : role.level === 'Intermediate'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {role.level}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default RoadmapNode;
