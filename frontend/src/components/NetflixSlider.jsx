import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NetflixSlider = ({ title, items, category }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-neon-green font-mono">{title}</h2>
      <div className="relative group">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 p-2 rounded-r-lg opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-6 h-6 text-neon-green" />
        </button>
        
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scrollbar-hide space-x-4 py-4 px-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-64"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative overflow-hidden rounded-lg border border-neon-green/30 bg-black/50 backdrop-blur-sm">
                <div className="h-40 bg-gradient-to-br from-cyan-500/20 to-neon-green/20 flex items-center justify-center">
                  <div className="text-4xl">
                    {category === 'hackathons' && '👨‍💻'}
                    {category === 'ctf' && '🏴‍☠️'}
                    {category === 'workshops' && '🎓'}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-1 bg-neon-green/20 text-neon-green text-xs rounded">
                      {item.date}
                    </span>
                    <button className="px-3 py-1 bg-neon-green text-black text-sm font-bold rounded hover:bg-cyan-400 transition-colors">
                      REGISTER
                    </button>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-4">
                  <h4 className="text-lg font-bold text-neon-green mb-2">Details</h4>
                  <p className="text-sm text-center text-gray-300 mb-4">{item.details}</p>
                  <button className="px-4 py-2 bg-neon-green text-black font-bold rounded hover:bg-cyan-400 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 p-2 rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-6 h-6 text-neon-green" />
        </button>
      </div>
    </div>
  );
};

export default NetflixSlider;
