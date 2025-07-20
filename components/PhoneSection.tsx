'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaGraduationCap, FaCertificate, FaUser, FaCode, FaBriefcase } from 'react-icons/fa';
import About from './About'; // Import the About component

const apps = [
  { name: 'About', icon: FaUser, color: 'from-blue-500 to-purple-600' },
  { name: 'Skills', icon: FaCode, color: 'from-green-500 to-blue-500' },
  { name: 'Experience', icon: FaBriefcase, color: 'from-orange-500 to-red-500' },
  { name: 'Education', icon: FaGraduationCap, color: 'from-purple-500 to-pink-500' },
  { name: 'Certifications', icon: FaCertificate, color: 'from-yellow-500 to-orange-500' },
  { name: 'GitHub', icon: FaGithub, color: 'from-gray-700 to-gray-900' },
  { name: 'LinkedIn', icon: FaLinkedin, color: 'from-blue-600 to-blue-800' },
  { name: 'YouTube', icon: FaYoutube, color: 'from-red-500 to-red-700' },
];

export default function PhoneSection() {
  const [activeScreen, setActiveScreen] = useState<string | null>(null);

  return (
    <section id="phone" className="min-h-screen bg-black flex items-center justify-center py-16">
      <motion.div 
        className="relative w-[375px] h-[812px] rounded-[2rem] bg-black border-8 border-gray-800 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Dynamic Island / Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-20 flex items-center justify-center">
          <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
        </div>
        
        {/* Screen */}
        <div className="h-full w-full pt-8 pb-6 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-y-auto">
          {/* Status Bar */}
          <div className="flex justify-between items-center text-white text-xs mb-4 px-2">
            <span className="font-semibold">9:41</span>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-2 border border-white rounded-sm">
                <div className="w-3 h-1 bg-white rounded-sm m-[1px]"></div>
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!activeScreen ? (
              <motion.div 
                key="home"
                className="grid grid-cols-4 gap-4 text-center h-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {apps.map((app, index) => (
                  <motion.div
                    key={app.name}
                    onClick={() => setActiveScreen(app.name)}
                    className="flex flex-col items-center justify-center p-2 rounded-2xl hover:bg-gray-700/50 cursor-pointer transition-all duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.05,
                      ease: "easeOut"
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className={`w-12 h-12 bg-gradient-to-br ${app.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      whileTap={{ scale: 0.95 }}
                    >
                      <app.icon className="text-xl text-white" />
                    </motion.div>
                    <span className="text-xs text-gray-300 mt-1 font-medium">{app.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            ) : activeScreen === 'About' ? (
              <About /> // Render the About component when "About" is clicked
            ) : (
              <motion.div 
                key="app"
                className="flex flex-col items-center justify-center text-center text-gray-300 h-full"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.button
                  onClick={() => setActiveScreen(null)}
                  className="absolute top-16 left-4 text-primary text-lg font-semibold flex items-center"
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                >
                  ← Back
                </motion.button>
                
                <motion.div
                  className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4, ease: "backOut" }}
                >
                  <span className="text-4xl text-primary">📱</span>
                </motion.div>
                
                <motion.h2 
                  className="text-2xl font-bold mb-4 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  {activeScreen}
                </motion.h2>
                
                <motion.p
                  className="text-gray-400 px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  This is the {activeScreen} section content. Tap back to return to the home screen.
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
        </div>

        {/* Footer outside the screen */}
        <motion.div 
          className="absolute -bottom-12 w-full text-center text-xs text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Built With <span className="text-primary font-semibold">Flutter</span> Using <span className="text-primary">💙</span>
        </motion.div>
      </motion.div>
    </section>
  );
}