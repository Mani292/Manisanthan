import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ROADMAPS } from '../data/roadmaps';
import { useLocalStorage } from '../hooks/useLocalStorage';

const MotionDiv = motion.div;

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  duration: 0.5,
};

const RoadmapDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const roadmap = ROADMAPS.find((r) => r.id === id);
  
  const [completedSteps, setCompletedSteps] = useLocalStorage<{ [key: string]: boolean }>(`roadmap-progress-${id}`, {});

  const toggleStep = (stepId: string) => {
    setCompletedSteps(prev => ({
      ...prev,
      [stepId]: !prev[stepId]
    }));
  };

  const progress = useMemo(() => {
    if (!roadmap) return 0;
    const completedCount = Object.values(completedSteps).filter(Boolean).length;
    return (completedCount / roadmap.steps.length) * 100;
  }, [completedSteps, roadmap]);

  if (!roadmap) {
    return (
      <div className="text-center">
        <h2 className="text-2xl text-white">Roadmap not found!</h2>
        <Link to="/roadmaps" className="text-brand-primary hover:underline mt-4 inline-block">Back to Roadmaps</Link>
      </div>
    );
  }

  return (
    <MotionDiv
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="mb-8 flex items-center gap-4">
        <div className="text-brand-primary">{roadmap.icon}</div>
        <div>
          <h1 className="text-4xl font-extrabold text-white">{roadmap.title}</h1>
          <p className="mt-2 text-lg text-gray-300">{roadmap.description}</p>
        </div>
      </div>
      
      <div className="mb-8">
          <h3 className="text-white">Progress</h3>
          <div className="w-full bg-brand-secondary rounded-full h-4 mt-2">
              <MotionDiv 
                  className="bg-brand-primary h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%`}}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
              />
          </div>
          <p className="text-right text-sm text-gray-400 mt-1">{Math.round(progress)}% Complete</p>
      </div>

      <div className="space-y-6">
        {roadmap.steps.map((step, index) => (
          <MotionDiv
            key={step.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start gap-4 p-6 bg-brand-secondary rounded-lg"
          >
            <div className="flex-shrink-0">
                <input 
                    type="checkbox" 
                    id={step.id}
                    checked={!!completedSteps[step.id]}
                    onChange={() => toggleStep(step.id)}
                    className="h-6 w-6 rounded border-gray-300 text-brand-primary focus:ring-brand-primary bg-brand-dark cursor-pointer"
                />
            </div>
            <div className={`flex-grow ${completedSteps[step.id] ? 'opacity-50 line-through' : ''}`}>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="text-gray-300 mt-1">{step.description}</p>
            </div>
          </MotionDiv>
        ))}
      </div>
    </MotionDiv>
  );
};

export default RoadmapDetail;