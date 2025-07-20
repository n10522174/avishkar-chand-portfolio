import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import localFont from 'next/font/local';

const jetBrainsMono = localFont({
  src: '../public/fonts/JetBrainsMono-Regular.ttf',
  display: 'swap',
});

// CLI Typewriter Component
function CLITypewriter({ text, speed = 50, delay = 0, key }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Reset state when key changes
    setDisplayText('');
    setCurrentIndex(0);
  }, [key]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => {
            if (prevIndex < text.length) {
              setDisplayText(text.slice(0, prevIndex + 1));
              return prevIndex + 1;
            }
            clearInterval(interval);
            return prevIndex;
          });
        }, speed);

        return () => clearInterval(interval);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay, currentIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={jetBrainsMono.className}>
      {displayText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
        |
      </span>
    </span>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState('summary');

  const commands = {
    summary: `> whoami
avi@data-engineer:~$ cat about.txt

I'm Avi, a Brisbane-based Data Engineer with a passion for 
building scalable data pipelines, modern data platforms, 
and unlocking insights from big data.

My toolkit spans AWS, Databricks, and Terraform, underpinned 
by solid software engineering principles and a love for 
elegant, performant solutions.`,

    skills: `> skills --list
avi@data-engineer:~$ cat skills.json

{
  "cloud_platforms": ["AWS", "Azure"],
  "big_data": ["Apache Spark", "Databricks", "Delta Lake"],
  "programming": ["Python", "SQL", "Scala", "TypeScript"],
  "infrastructure": ["Terraform", "Docker", "Kubernetes"],
  "databases": ["PostgreSQL", "MongoDB", "Snowflake"],
  "ml_ops": ["MLflow", "Airflow", "Apache Beam"],
  "tools": ["Git", "Jenkins", "Grafana", "dbt"]
}`,

    education: `> education --show
avi@data-engineer:~$ cat education.md

## Education

**Bachelor of Computer Science**
📍 University of Queensland, Brisbane
📅 2018 - 2022
🎯 Majored in Data Science & Software Engineering

**Relevant Coursework:**
- Data Structures & Algorithms
- Database Systems
- Machine Learning
- Cloud Computing
- Software Engineering Principles`,

    certifications: `> certifications --list
avi@data-engineer:~$ ls -la certs/

total 8
-rw-r--r-- aws-solutions-architect.pdf
-rw-r--r-- databricks-data-engineer.pdf
-rw-r--r-- terraform-associate.pdf
-rw-r--r-- snowflake-snowpro-core.pdf

📜 AWS Certified Solutions Architect
📜 Databricks Certified Data Engineer Associate  
📜 HashiCorp Terraform Associate
📜 Snowflake SnowPro Core Certification`
  };

  const tabs = [
    { id: 'summary', label: 'Summary', icon: '👨‍💻' },
    { id: 'skills', label: 'Skills', icon: '🛠️' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'certifications', label: 'Certifications', icon: '📜' }
  ];

  return (
    <section id='about' className='max-w-6xl mx-auto py-16 md:py-24 px-4 md:px-6 relative'>
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 md:mb-16 text-center bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent'
      >
        About Me
      </motion.h3>

      <div className='flex flex-col lg:flex-row items-center gap-8 md:gap-12'>
        {/* Left - Photo with animated background */}
        <motion.div 
          className='relative flex-shrink-0'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Animated square background */}
          <motion.div
            className='absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl'
            animate={{
              rotate: [0, 2, -2, 0],
              scale: [1, 1.02, 0.98, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Glowing border effect */}
          <motion.div
            className='absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-primary rounded-2xl opacity-20'
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Photo */}
          <div className='relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-primary/30'>
            <Image
              src="/avi-chand.jpg"
              alt="Avi - Data Engineer"
              fill
              className="object-cover"
              priority
            />
            
            {/* Overlay gradient */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent' />
          </div>

        </motion.div>

        {/* Right - CLI Terminal */}
        <motion.div 
          className='flex-1 min-h-0 w-full'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
        {/* Navigation Buttons */}
        <motion.div 
          className='grid grid-cols-2 md:flex md:flex-wrap gap-2 mb-4'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-3 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center justify-center gap-1 md:gap-2 overflow-hidden group ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-primary to-blue-500 text-white shadow-lg shadow-primary/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 hover:text-white'
              }`}
            >
              {/* Border effect */}
              <span
                className={`absolute inset-0 rounded-full border-2 ${
                  activeTab === tab.id
                    ? 'border-gradient-to-r from-primary to-blue-500'
                    : 'border-gray-700 group-hover:border-gradient-to-r group-hover:from-gray-700 group-hover:to-gray-900'
                }`}
              ></span>

              {/* Text and icon */}
              <span className="relative z-10 flex items-center gap-1 md:gap-2">
                <span className="text-xs md:text-sm">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden text-xs">{tab.label.slice(0, 4)}</span>
              </span>
            </button>
          ))}
        </motion.div>

          {/* Terminal window */}
          <div className='bg-gray-900/90 border border-gray-700 rounded-lg overflow-hidden shadow-2xl'>
            {/* Terminal header */}
            <div className='bg-gray-800 px-3 md:px-4 py-2 md:py-3 flex items-center gap-2'>
              <div className='w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full'></div>
              <div className='w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full'></div>
              <div className='w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full'></div>
              <span className='ml-2 md:ml-4 text-gray-400 text-xs md:text-sm font-mono truncate'>
                <span className="hidden sm:inline">terminal — avi@portfolio</span>
                <span className="sm:hidden">avi@portfolio</span>
              </span>
            </div>
            
            {/* Terminal content */}
            <div className='p-3 md:p-6 min-h-[300px] md:min-h-[400px] overflow-x-auto'>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className='text-green-400 text-xs md:text-sm leading-relaxed whitespace-pre-line'
              >
                <CLITypewriter 
                  text={commands[activeTab]} 
                  speed={20} 
                  delay={300}
                  key={activeTab}
                />
              </motion.div>
            </div>
          </div>

          {/* Status indicators */}
          <motion.div 
            className='flex gap-4 mt-4 md:mt-6'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            viewport={{ once: true }}
          >
            <div className='flex items-center gap-2 text-gray-400 text-xs md:text-sm'>
              <motion.div 
                className='w-2 h-2 bg-green-500 rounded-full'
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Online
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}