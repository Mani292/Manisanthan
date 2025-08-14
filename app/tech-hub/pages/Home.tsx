import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionSection = motion.section;

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const cardVariants = {
    offscreen: {
        y: 50,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const FeatureCard: React.FC<{ to: string, title: string, description: string, icon: React.ReactNode }> = ({ to, title, description, icon }) => (
    <MotionDiv variants={cardVariants}>
        <Link to={to} className="block group p-6 bg-brand-secondary rounded-lg hover:bg-brand-primary transition-all duration-300 transform hover:-translate-y-2 shadow-lg">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-dark text-white mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300 group-hover:text-white">{description}</p>
        </Link>
    </MotionDiv>
);

const Home: React.FC = () => {
    return (
        <MotionDiv
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="text-center"
        >
            <section className="py-20">
                <MotionH1
                    className="text-5xl md:text-6xl font-extrabold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-light to-brand-primary animate-gradient-x"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Welcome to Tech Hub
                </MotionH1>
                <MotionP
                    className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    Your all-in-one guide to navigating your B.Tech journey. Explore career roadmaps, access academic resources, and test your knowledge.
                </MotionP>
                <MotionDiv
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Link to="/roadmaps" className="inline-block bg-brand-primary text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
                        Get Started
                    </Link>
                </MotionDiv>
            </section>
            
            <MotionSection 
                className="py-16"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ staggerChildren: 0.2 }}
            >
                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        to="/roadmaps"
                        title="Career Roadmaps"
                        description="Step-by-step guides to master in-demand tech skills and launch your career."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>}
                    />
                    <FeatureCard
                        to="/academics"
                        title="Academics"
                        description="Access semester-wise subjects, notes, and resources to excel in your coursework."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
                    />
                    <FeatureCard
                        to="/quiz"
                        title="Knowledge Quiz"
                        description="Test your understanding of core concepts with our interactive quizzes."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    />
                </div>
            </MotionSection>
        </MotionDiv>
    );
};

export default Home;