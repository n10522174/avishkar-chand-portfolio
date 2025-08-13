'use client';
import { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { FaMobileAlt, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import PhoneSimulator from './PhoneSection';
import NintendoSwitch from '../components/NintendoSwitch';
import localFont from 'next/font/local';

const jetBrainsMono = localFont({
  src: '../public/fonts/JetBrainsMono-Regular.ttf',
  display: 'swap',
});

/* ------------- 3-D Scene (placeholder) ------------- */
const PipelineScene = dynamic(
  () => import('../components/PipelineScene'),
  { ssr: false, suspense: true }
);

// Fix: Add proper TypeScript types
interface TypewriterProps {
  text: string;
  speed?: number;
}

function Typewriter({ text, speed = 50 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  
  return <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>{displayedText}</pre>;
}

// Fix: Add proper TypeScript types for ContactModal
interface ContactModalProps {
  onClose: () => void;
}

function ContactModal({ onClose }: ContactModalProps) {
  // Fix: Add form submission handler with proper typing
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />
      <motion.div
        className="relative bg-gray-900 rounded-2xl p-4 md:p-6 w-full max-w-md border border-gray-700"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg md:text-xl font-bold text-white">Send Message</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary text-sm md:text-base"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary text-sm md:text-base"
          />
          <textarea
            rows={4}
            placeholder="Message"
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary resize-none text-sm md:text-base"
          />
          <button
            type="submit"
            className="w-full py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm md:text-base"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const [showPhone, setShowPhone] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showGames, setShowGames] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const waveVariants = {
    wave: {
      rotate: [0, 14, -8, 14, -4, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut",
      },
    },
  };

  const cliText = `Welcome to my corner of the web!
Data, Cloud, AI/ML, and a little
bit of 🎉🎉🎉`;

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Radial spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,#01375e,transparent_70%)] pointer-events-none" />

      {/* ====== MAIN FLEX ====== */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center gap-6 lg:gap-10 px-4 md:px-6 lg:px-12 py-16 lg:py-0 lg:flex-row lg:items-start">
        {/* ---------- Left copy ---------- */}
        <motion.div 
          className="w-full max-w-xl text-center lg:text-left order-2 lg:order-1 lg:pt-40"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 md:mb-4"
            variants={slideInLeft}
          >
            <motion.span 
              role="img" 
              aria-label="wave"
              variants={waveVariants}
              animate="wave"
              className="inline-block origin-bottom-right"
            >
              👋
            </motion.span>{' '}
            I'm&nbsp;
            <motion.span 
              className="text-primary"
              animate={{
                textShadow: [
                  "0 0 0px #00C6FF",
                  "0 0 10px #00C6FF",
                  "0 0 20px #00C6FF",
                  "0 0 10px #00C6FF",
                  "0 0 0px #00C6FF",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              Avi
            </motion.span>
          </motion.h1>

          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-gray-200/60 to-gray-400/10 text-transparent bg-clip-text mb-4 md:mb-8"
            variants={slideInUp}
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-gradient-to-r from-gray-200 via-blue-200 to-gray-400 bg-300% text-transparent bg-clip-text"
            >
              Data&nbsp;Platform&nbsp;/
            </motion.span>
            <br />
            <motion.span
              animate={{
                backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="bg-gradient-to-r from-blue-200 via-gray-200 to-blue-400 bg-300% text-transparent bg-clip-text"
            >
              ML&nbsp;Engineer
            </motion.span>
          </motion.h2>

          <motion.p 
            className={`${jetBrainsMono.className} text-[#E0F2FE] font-light mb-4 md:mb-6 max-w-md mx-auto lg:mx-0 text-sm md:text-base`}
            variants={fadeIn}
          >
            <Typewriter text={cliText} speed={50} />
          </motion.p>

          {/* Social Links */}
          <motion.div 
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4"
            variants={fadeIn}
          >
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 md:p-3 bg-gray-800/50 border border-gray-700 rounded-full text-[#E0F2FE] hover:text-primary hover:border-primary transition-colors"
            >
              <FaGithub className="text-lg md:text-xl" />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 md:p-3 bg-gray-800/50 border border-gray-700 rounded-full text-[#E0F2FE] hover:text-primary hover:border-primary transition-colors"
            >
              <FaLinkedin className="text-lg md:text-xl" />
            </motion.a>
            
            <motion.button
              onClick={() => setShowContact(true)}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-2 md:px-4 md:py-3 bg-primary text-black rounded-full font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm md:text-base"
            >
              <FaEnvelope className="text-base md:text-lg" />
              Message Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ---------- Right illustration stack ---------- */}
        <motion.div 
          className="w-full max-w-sm md:max-w-md lg:w-[500px] h-[250px] sm:h-[300px] md:h-[380px] lg:h-[780px] flex flex-col gap-4 order-1 lg:order-2 relative"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* 3D Scene */}
          <div className="flex-1">
            <Suspense fallback={<div className="w-full h-full bg-gray-800/30 rounded-xl" />}>
              <PipelineScene />
            </Suspense>
          </div>
          
          {/* Nintendo Switch - Only show on larger screens due to positioning complexity */}
          <motion.div
            className="absolute hidden lg:block"
            animate={{
              x: ["0%", "100%", "100%", "0%", "0%"],
              y: ["0%", "0%", "100%", "100%", "0%"],
              rotate: [0, 15, -15, 15, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowGames(true)}
              className="cursor-pointer flex flex-col items-center"
            >
              <Image
                src="/switch.png"
                alt="Nintendo Switch"
                width={150}
                height={75}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ====== Bottom metrics row ====== */}
      <motion.div 
        className="absolute bottom-4 md:bottom-10 left-0 right-0 mx-auto w-full max-w-5xl px-4 md:px-6 lg:px-0"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="grid grid-cols-2 md:flex md:justify-center md:items-center text-center gap-4 md:gap-6 lg:gap-8">
          {/* Years of experience */}
          <motion.div 
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              3<span className="align-top text-2xl md:text-3xl">+</span>
            </span>
            <span className="text-xs md:text-sm lg:text-lg text-[#E0F2FE] font-light mt-1 md:mt-2">
              Years of Experience
            </span>
          </motion.div>
      
          {/* Databricks */}
          <motion.div 
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-white">
              Databricks
            </span>
            <span className="text-xs md:text-sm lg:text-lg text-[#E0F2FE] font-light mt-1 md:mt-2">
              Data Engineer (Professional)
            </span>
          </motion.div>
      
          {/* AWS */}
          <motion.div 
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-white">
              AWS
            </span>
            <span className="text-xs md:text-sm lg:text-lg text-[#E0F2FE] font-light mt-1 md:mt-2">
              Solution Architect (Associate)
            </span>
          </motion.div>
      
          {/* Terraform */}
          <motion.div 
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-white">
              Terraform
            </span>
            <span className="text-xs md:text-sm lg:text-lg text-[#E0F2FE] font-light mt-1 md:mt-2">
              Infrastructure as Code
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* ====== Floating phone FAB ====== */}
      <motion.button
        onClick={() => setShowPhone(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 md:bottom-6 left-4 md:left-6 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-primary text-black shadow-xl"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <FaMobileAlt className="text-xl md:text-2xl" />
      </motion.button>


      {/* ====== Contact modal ====== */}
      <AnimatePresence>
        {showContact && <ContactModal onClose={() => setShowContact(false)} />}
      </AnimatePresence>

      {/* ====== Nintendo Switch Games ====== */}
      <AnimatePresence>
        {showGames && <NintendoSwitch onClose={() => setShowGames(false)} />}
      </AnimatePresence>
    </section>
  );
}