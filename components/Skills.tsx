import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';

export default function Skills() {
  const skillCategories = [
    {
      id: 'cloud',
      title: 'Cloud Platforms',
      icon: '☁️',
      skills: [
        { name: 'AWS', color: 'from-orange-500 to-yellow-500' },
        { name: 'Azure', color: 'from-blue-500 to-cyan-500' },
        { name: 'Databricks', color: 'from-red-500 to-pink-500' },
        { name: 'Snowflake', color: 'from-blue-400 to-indigo-500' }
      ],
      gradient: 'from-orange-500 to-yellow-500',
      borderColor: 'border-orange-500/50'
    },
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'Python', color: 'from-green-500 to-blue-500' },
        { name: 'SQL', color: 'from-blue-500 to-purple-500' },
        { name: 'Scala', color: 'from-red-500 to-orange-500' },
        { name: 'TypeScript', color: 'from-blue-600 to-cyan-500' },
        { name: 'C#', color: 'from-purple-500 to-pink-500' }
      ],
      gradient: 'from-green-500 to-blue-500',
      borderColor: 'border-green-500/50'
    },
    {
      id: 'data',
      title: 'Big Data & Analytics',
      icon: '📊',
      skills: [
        { name: 'Apache Spark', color: 'from-orange-500 to-red-500' },
        { name: 'Delta Lake', color: 'from-blue-500 to-teal-500' },
        { name: 'Apache Beam', color: 'from-purple-500 to-indigo-500' },
        { name: 'Kafka', color: 'from-gray-600 to-gray-800' },
        { name: 'dbt', color: 'from-orange-600 to-yellow-500' }
      ],
      gradient: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/50'
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure & DevOps',
      icon: '🛠️',
      skills: [
        { name: 'Terraform', color: 'from-purple-600 to-blue-600' },
        { name: 'Docker', color: 'from-blue-500 to-cyan-500' },
        { name: 'Kubernetes', color: 'from-blue-600 to-purple-600' },
        { name: 'GitLab CI/CD', color: 'from-orange-500 to-red-500' },
        { name: 'Jenkins', color: 'from-blue-400 to-blue-600' }
      ],
      gradient: 'from-cyan-500 to-blue-500',
      borderColor: 'border-cyan-500/50'
    },
    {
      id: 'databases',
      title: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL', color: 'from-blue-600 to-indigo-600' },
        { name: 'MongoDB', color: 'from-green-500 to-emerald-500' },
        { name: 'Redis', color: 'from-red-500 to-pink-500' },
        { name: 'DynamoDB', color: 'from-orange-500 to-yellow-500' }
      ],
      gradient: 'from-emerald-500 to-green-500',
      borderColor: 'border-emerald-500/50'
    },
    {
      id: 'tools',
      title: 'Tools & Platforms',
      icon: '⚡',
      skills: [
        { name: 'Airflow', color: 'from-teal-500 to-cyan-500' },
        { name: 'MLflow', color: 'from-blue-500 to-purple-500' },
        { name: 'Grafana', color: 'from-orange-500 to-red-500' },
        { name: 'RabbitMQ', color: 'from-orange-600 to-yellow-500' },
        { name: 'Kinesis', color: 'from-purple-500 to-pink-500' }
      ],
      gradient: 'from-indigo-500 to-purple-500',
      borderColor: 'border-indigo-500/50'
    }
  ];

  const SkillCard = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1
      }}
      viewport={{ once: true, margin: '-100px' }}
      className="group relative bg-black/40 backdrop-blur-xl border border-gray-700 rounded-2xl p-4 hover:border-gray-500 transition-all duration-300"
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
      />
      <div className="relative z-10 text-center">
        <h4 className="text-white font-semibold text-sm group-hover:text-gray-100 transition-colors duration-300">
          {skill.name}
        </h4>
      </div>
    </motion.div>
  );

  const SkillSection = ({ category, index }) => {
    const skillCount = category.skills?.length || 0;

    const animationConfig = useMemo(
      () => ({
        x: [0, -1200]
      }),
      []
    );

    const transitionConfig = useMemo(
      () => ({
        duration: 15,
        repeat: Infinity,
        ease: 'linear'
      }),
      []
    );

    if (skillCount === 0) return null;

    return (
      <motion.div
        key={`section-${category.id}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: index * 0.2
        }}
        viewport={{ once: true, margin: '-200px' }}
        className="relative"
      >
        <div className="flex items-center gap-4 mb-8">
          <div
            className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}
          >
            {category.icon}
          </div>
          <h3 className="text-2xl font-bold text-white">{category.title}</h3>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={animationConfig}
            transition={transitionConfig}
          >
            {category.skills.map((skill, skillIndex) => (
              <div key={`first-${skill.name}`} className="w-48 flex-shrink-0">
                <SkillCard skill={skill} index={skillIndex} />
              </div>
            ))}
            {category.skills.map((skill, skillIndex) => (
              <div key={`second-${skill.name}`} className="w-48 flex-shrink-0">
                <SkillCard skill={skill} index={skillIndex} />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto py-24 px-6 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Technical Skills
        </h2>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto">
          A toolkit for building scalable data solutions and
          modern applications
        </p>
      </motion.div>

      <div className="space-y-16">
        {skillCategories.map((category, index) => (
          <SkillSection key={category.id} category={category} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true, margin: '-100px' }}
        className="mt-24 text-center"
      >
        <h3 className="text-3xl font-bold text-white mb-12">Core Competencies</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { name: 'Problem Solving', icon: '🧩', color: 'from-blue-500 to-cyan-500' },
            { name: 'Team Leadership', icon: '👥', color: 'from-green-500 to-emerald-500' },
            { name: 'Communication', icon: '💬', color: 'from-purple-500 to-pink-500' },
            { name: 'Adaptability', icon: '🔄', color: 'from-orange-500 to-red-500' }
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="group relative bg-black/40 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 hover:border-gray-500 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              />
              <div className="relative z-10 text-center">
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h4 className="text-white font-semibold group-hover:text-gray-100 transition-colors duration-300">
                  {skill.name}
                </h4>
                </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}