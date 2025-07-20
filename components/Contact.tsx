import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id='contact' className='max-w-xl mx-auto py-24 px-6 text-center'>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='text-3xl font-semibold text-white mb-6'
      >
        Get In Touch
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='text-gray-300 mb-6'
      >
        Whether you’re looking for a collaboration or just want to say hi — my inbox is open.
      </motion.p>
      <motion.a
        href='mailto:Avi@example.com'
        whileHover={{ scale: 1.05 }}
        className='inline-block bg-primary px-6 py-3 rounded text-black font-semibold'
      >
        Say Hello
      </motion.a>
    </section>
  );
}