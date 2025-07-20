import Link from 'next/link';
import { motion } from 'framer-motion';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className='fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/40'
    >
      <div className='max-w-6xl mx-auto px-4 py-3 flex items-center justify-between text-white'>
        <h1 className='font-bold text-lg tracking-wide'>Avi Chand</h1>
        <ul className='flex space-x-6'>
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className='hover:text-primary transition-colors'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}