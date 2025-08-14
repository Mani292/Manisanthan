import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ROADMAPS } from '../data/roadmaps';

const MotionDiv = motion.div;

const pageVariants = {
  initial: { opacity: 0, x: -100 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 100 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const Roadmaps: React.FC = () => {
  return (
    <MotionDiv
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white">Choose Your Path</h1>
        <p className="mt-4 text-lg text-gray-300">Select a roadmap to start your learning journey.</p>
      </div>
      <MotionDiv 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        {ROADMAPS.map((roadmap) => (
          <MotionDiv key={roadmap.id} variants={cardVariants}>
            <Link to={`/roadmaps/${roadmap.id}`}>
              <div className="bg-brand-secondary p-8 rounded-xl shadow-lg hover:shadow-brand-primary/40 h-full flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-4">{roadmap.icon}</div>
                <h2 className="text-2xl font-bold text-white mb-2">{roadmap.title}</h2>
                <p className="text-gray-300 flex-grow">{roadmap.description}</p>
              </div>
            </Link>
          </MotionDiv>
        ))}
      </MotionDiv>
    </MotionDiv>
  );
};

export default Roadmaps;