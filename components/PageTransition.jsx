'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="relative z-10" // Apply z-index here to layer it properly
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
