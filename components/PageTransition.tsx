'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type PageTransitionProps = {
  children: ReactNode;
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { duration: 1, delay: 0.4, ease: 'easeInOut' },
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="h-screen w-screen fixed bg-slate-950 top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};
export default PageTransition;
