import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinkClasses = 'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300';
  const activeLinkClasses = 'bg-brand-primary text-white';
  const inactiveLinkClasses = 'text-brand-light hover:bg-brand-secondary hover:text-white';

  const mobileNavLinkClasses = 'block px-3 py-2 rounded-md text-base font-medium';

  const menuVariants = {
    closed: { opacity: 0, height: 0, y: -20 },
    open: { opacity: 1, height: 'auto', y: 0 }
  };

  return (
    <header className="bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-brand-primary/10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-brand-primary hover:text-white transition-colors duration-300">
              Tech Hub
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>Home</NavLink>
              <NavLink to="/roadmaps" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>Roadmaps</NavLink>
              <NavLink to="/academics" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>Academics</NavLink>
              <NavLink to="/quiz" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>Quiz</NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-brand-secondary inline-flex items-center justify-center p-2 rounded-md text-brand-light hover:text-white hover:bg-brand-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <MotionDiv
            className="md:hidden"
            id="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `${mobileNavLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>Home</NavLink>
              <NavLink to="/roadmaps" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `${mobileNavLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>Roadmaps</NavLink>
              <NavLink to="/academics" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `${mobileNavLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>Academics</NavLink>
              <NavLink to="/quiz" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `${mobileNavLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>Quiz</NavLink>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;