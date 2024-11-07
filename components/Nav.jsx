'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const links = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'resume', path: '/resume' },
  { name: 'work', path: '/work' },
  { name: 'contact', path: '/contact' },
];

const Nav = () => {
  const pathname = usePathname();

  // Floating animation properties
  const floatAnimation = {
    y: [0, -5, 0], // Move up by 5px, then return to the original position
    transition: {
      duration: 1.5, // Total duration of the float animation
      repeat: Infinity, // Loop the animation
      repeatType: 'loop', // Keep looping
      ease: 'easeInOut',
    },
  };

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link key={index} href={link.path}>
            {isActive ? (
              <motion.div
                initial={{ y: 0 }}
                animate={floatAnimation}
                className="capitalize font-medium text-accent border-b-2 border-accent"
              >
                {link.name}
              </motion.div>
            ) : (
              <div className="capitalize font-medium hover:text-accent transition-all">
                {link.name}
              </div>
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
