import { motion } from 'framer-motion';

interface Props {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({ title, description, tags, link }: Props) {
  return (
    <motion.a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      whileHover={{ y: -8, scale: 1.02 }}
      className='block bg-gray-800/70 hover:bg-gray-700/80 border border-gray-700 rounded-lg p-6 transition-colors'
    >
      <h4 className='text-xl font-semibold text-white mb-2'>{title}</h4>
      <p className='text-gray-300 text-sm mb-4'>{description}</p>
      <div className='flex flex-wrap gap-2'>
        {tags.map(tag => (
          <span key={tag} className='bg-primary/20 text-primary text-xs px-2 py-1 rounded'>
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}