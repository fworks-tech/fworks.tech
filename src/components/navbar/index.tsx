import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import Footer from '../footer';
import Language from '../language';
import Logo from '../shared/Logo';

import NavLinks from './NavLinks';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Detect window size to determine if the device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000); // Consider small device if width < 1000
    };

    // Run on mount and on resize
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between bg-transparent p-12 md:justify-start md:p-8">
      <Logo />

      {isMobile ? (
        <>
          <button
            className="text-3xl text-cyan-400 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                transition={{ duration: 0.3 }}
                className="absolute right-0 top-0 z-20 flex h-full w-full flex-col items-start justify-between gap-6 rounded-l-xl p-12 shadow-xl"
                style={{ backgroundColor: '#120052' }}
              >
                <div className="flex w-full flex-col gap-4">
                  <div className="mb-4 flex w-full items-center justify-between gap-2">
                    <Logo />
                    <Language />
                    <button
                      className="text-3xl text-white"
                      onClick={toggleMenu}
                      aria-label="Close Menu"
                    >
                      ×
                    </button>
                  </div>

                  <NavLinks onClick={toggleMenu} />
                </div>
                <div className="flex w-full items-center justify-center text-center">
                  <Footer />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <div
          className={`z-20 flex w-full flex-col items-center gap-2 transition-transform duration-300 md:static md:w-auto md:flex-row md:gap-4 md:bg-transparent ${
            isMenuOpen || !isMobile ? 'translate-y-0' : '-translate-y-full md:translate-y-0'
          }`}
        >
          <NavLinks />
          <Language />
        </div>
      )}
    </nav>
  );
}
