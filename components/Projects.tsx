import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Streaming ETL Pipeline',
    description: 'Real‑time ingestion from RabbitMQ into AWS Kinesis & Databricks Delta Lake.',
    tags: ['AWS', 'Databricks', 'Spark', 'Delta', 'Python'],
    link: '#'
  },
  {
    title: 'Infrastructure as Code',
    description: 'Modular Terraform to provision multi‑tenant data platform infrastructure.',
    tags: ['Terraform', 'AWS', 'CI/CD'],
    link: '#'
  },
  {
    title: 'Big Data Cost Optimisation',
    description: 'Reduced S3 data lake costs by 15% with intelligent partitioning & Z‑Ordering.',
    tags: ['Databricks', 'Delta Lake', 'Cost Engineering'],
    link: '#'
  },
];

export default function Projects() {
  return (
    <section id='projects' className='max-w-6xl mx-auto py-24 px-6'>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='text-3xl font-semibold text-white mb-10 text-center'
      >
        Projects
      </motion.h3>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}