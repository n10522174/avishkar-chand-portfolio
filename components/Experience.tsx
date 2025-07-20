import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      id: 1,
      title: "Data Platform Engineer",
      company: "Transmax Pty Ltd",
      period: "2022 – Present",
      type: "Full-time",
      summary: "Designing and implementing scalable data solutions across AWS and Databricks, supporting real-time analytics and ML initiatives.",
      details: {
        description: "Working within the Data Platform team to design and implement scalable data solutions across AWS and Databricks. Initially worked part-time (30 hours per week) while completing university studies, before transitioning into a full-time role upon graduation. Contributed to key projects supporting real-time analytics, infrastructure automation, and machine learning initiatives in the intelligent transport systems domain.",
        achievements: [
          "Developed Python connectors to stream data from RabbitMQ into AWS Kinesis Firehose",
          "Designed and built ETL pipelines in Databricks to support large-scale analytics and reporting",
          "Reduced data lake costs by 15% through optimised S3 storage structures and partitioning strategies",
          "Improved CI/CD processes in GitLab, enabling faster, more reliable deployments",
          "Built automated testing frameworks to maintain data pipeline integrity and system reliability",
          "Designed scalable infrastructure using Terraform and AWS best practices",
          "Deployed microservices using C#/.NET Core to support real-time traffic signal control",
          "Applied machine learning techniques to optimise arterial traffic flow, resulting in a 12% improvement in network performance"
        ],
        technologies: ["AWS", "Databricks", "Python", "Terraform", "GitLab CI/CD", "RabbitMQ", "Kinesis", "C#/.NET Core", "Machine Learning"]
      },
      gradient: "from-blue-500 to-cyan-400",
      borderColor: "border-blue-500/50",
      hoverColor: "hover:border-blue-400",
      shadowColor: "shadow-blue-500/25"
    },
    {
      id: 2,
      title: "Retail Supervisor",
      company: "Bunnings Newstead",
      period: "2019 – 2022",
      type: "Full-time",
      summary: "Led operations across the 'Inside the Home' department, managing a 15-member team in a high-volume retail environment.",
      details: {
        description: "Led operations across the 'Inside the Home' department in a high-volume retail setting, managing a 15-member team and supporting store-wide initiatives.",
        achievements: [
          "Oversaw rostering and onboarding, improving team productivity and reducing training time",
          "Delivered technical customer solutions and complex quotes, demonstrating strong communication and problem-solving skills",
          "Spearheaded cross-departmental projects and safety-compliant refits, showcasing end-to-end planning and execution"
        ],
        technologies: ["Team Leadership", "Project Management", "Customer Service", "Process Optimization"]
      },
      gradient: "from-emerald-500 to-teal-400",
      borderColor: "border-emerald-500/50",
      hoverColor: "hover:border-emerald-400",
      shadowColor: "shadow-emerald-500/25"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  const openModal = (experience) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id='experience' className='max-w-7xl mx-auto py-24 px-6 relative overflow-hidden'>
      {/* Animated background elements */}
      <motion.div
        className='absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl'
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className='text-4xl md:text-5xl font-bold text-white mb-16 text-center bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent'
      >
        What Adventures Have I Been On?
      </motion.h3>

      <div className='relative'>
        {/* Experience Cards Container */}
        <div className='overflow-hidden rounded-3xl'>
          <motion.div 
            className='flex transition-transform duration-700 ease-out'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className='w-full flex-shrink-0 px-6'
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div
                  className={`group relative bg-black/40 backdrop-blur-xl border-2 ${experience.borderColor} ${experience.hoverColor} rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer`}
                  whileHover={{ 
                    scale: 1.02,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated background fill on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  
                  {/* Glowing border effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${experience.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                  />
                  
                  <div className='relative p-8 min-h-[450px] flex flex-col'>

                    {/* Header */}
                    <div className='mb-8'>
                      <div className='flex items-center justify-between mb-4'>
                        <motion.span 
                          className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${experience.gradient} text-white shadow-lg ${experience.shadowColor}`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {experience.type}
                        </motion.span>
                        <span className='text-gray-400 text-sm font-medium'>{experience.period}</span>
                      </div>
                      
                      <motion.h4 
                        className='text-3xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300'
                      >
                        {experience.title}
                      </motion.h4>
                      
                      <p className='text-xl text-gray-300 font-medium'>{experience.company}</p>
                    </div>

                    {/* Summary */}
                    <div className='flex-1 mb-8'>
                      <p className='text-gray-300 leading-relaxed text-lg'>{experience.summary}</p>
                    </div>

                    {/* Learn More Button */}
                    <motion.button
                      onClick={() => openModal(experience)}
                      className={`relative overflow-hidden bg-transparent border-2 ${experience.borderColor} text-white py-4 px-8 rounded-2xl font-semibold transition-all duration-300 group-hover:border-white group-hover:shadow-2xl ${experience.shadowColor}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${experience.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />
                      <span className='relative flex items-center justify-center gap-3 text-lg'>
                        Learn More
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </span>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <motion.button
          onClick={prevSlide}
          className='absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-xl border border-gray-700 p-4 rounded-2xl text-white hover:bg-gray-800/70 hover:border-gray-600 transition-all duration-300 z-10 group'
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeftIcon className='w-6 h-6 group-hover:text-blue-400 transition-colors duration-300' />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          className='absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-xl border border-gray-700 p-4 rounded-2xl text-white hover:bg-gray-800/70 hover:border-gray-600 transition-all duration-300 z-10 group'
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRightIcon className='w-6 h-6 group-hover:text-blue-400 transition-colors duration-300' />
        </motion.button>

        {/* Enhanced Dots Indicator */}
        <div className='flex justify-center gap-3 mt-12'>
          {experiences.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-12 h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full' 
                  : 'w-4 h-4 bg-gray-600 rounded-full hover:bg-gray-500'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {index === currentIndex && (
                <motion.div
                  className='absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full blur-sm opacity-50'
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

    {/* Enhanced Modal */}
    <AnimatePresence>
    {selectedExperience && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4'
        onClick={closeModal}
        >
        <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`relative bg-black/80 backdrop-blur-xl border-2 ${selectedExperience.borderColor} rounded-3xl max-w-5xl w-full max-h-[85vh] overflow-y-auto shadow-2xl ${selectedExperience.shadowColor}`}
            onClick={(e) => e.stopPropagation()}
        >
            {/* Enhanced close button */}
            <motion.button
            onClick={closeModal}
            className='absolute top-6 right-6 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 p-3 rounded-2xl text-red-400 hover:text-red-300 transition-all duration-300 z-10'
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            >
            <XMarkIcon className='w-6 h-6' />
            </motion.button>

            <div className='p-8 overflow-y-auto max-h-full'>
            {/* Enhanced Header */}
            <motion.div 
                className='mb-8'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <div className='flex items-center gap-4 mb-6'>
                <span className={`px-6 py-3 rounded-2xl text-sm font-semibold bg-gradient-to-r ${selectedExperience.gradient} text-white shadow-lg`}>
                    {selectedExperience.type}
                </span>
                <span className='text-gray-400 text-lg'>{selectedExperience.period}</span>
                </div>
                <h3 className='text-4xl font-bold text-white mb-3'>{selectedExperience.title}</h3>
                <p className='text-2xl text-gray-300 font-medium mb-6'>{selectedExperience.company}</p>
                <p className='text-gray-300 leading-relaxed text-lg'>{selectedExperience.details.description}</p>
            </motion.div>

            {/* Enhanced Achievements */}
            <motion.div 
                className='mb-8'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h4 className='text-2xl font-semibold text-white mb-6'>Key Achievements</h4>
                <div className='space-y-4'>
                {selectedExperience.details.achievements.map((achievement, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className='flex items-start gap-4 text-gray-300 group hover:text-white transition-colors duration-300'
                    >
                    <motion.div
                        className={`w-3 h-3 bg-gradient-to-r ${selectedExperience.gradient} rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}
                        whileHover={{ scale: 1.3 }}
                    />
                    <span className='text-lg leading-relaxed'>{achievement}</span>
                    </motion.div>
                ))}
                </div>
            </motion.div>

            {/* Enhanced Technologies */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <h4 className='text-2xl font-semibold text-white mb-6'>Technologies & Skills</h4>
                <div className='flex flex-wrap gap-3'>
                {selectedExperience.details.technologies.map((tech, index) => (
                    <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className='px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white rounded-xl text-sm font-medium transition-all duration-300 cursor-default'
                    whileHover={{ scale: 1.05, y: -2 }}
                    >
                    {tech}
                    </motion.span>
                ))}
                </div>
            </motion.div>
            </div>
        </motion.div>
        </motion.div>
    )}
    </AnimatePresence>
    </section>
  );
}