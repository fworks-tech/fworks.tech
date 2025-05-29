import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavLinks from './NavLinks';
import Logo from '../shared/Logo';
import Language from '../language';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Detect window size to determine if the device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Consider "mobile" if width < 768px
    };

    // Run on mount and on resize
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="w-full top-0 left-0 z-20 bg-transparent flex items-center justify-between h-16 px-4 md:px-10">
      {/* Logo */}
      <Logo />

      {/* Menu Button for Small Screens */}
      {isMobile ? (
        <>
          <button
            className="md:hidden text-cyan-400 text-3xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 right-0 h-full w-full z-20 p-12 flex flex-col items-start gap-6 rounded-l-xl shadow-xl"
                style={{ backgroundColor: '#120052' }}
              >
                <div className="w-full flex justify-between items-center mb-4">
                  <Logo />
                  <button
                    className="text-white text-3xl"
                    onClick={toggleMenu}
                    aria-label="Close Menu"
                  >
                    ×
                  </button>
                </div>
                <NavLinks onClick={toggleMenu} />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto md:bg-transparent flex flex-col md:flex-row items-center gap-2 md:gap-4 transition-transform duration-300 ${
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
