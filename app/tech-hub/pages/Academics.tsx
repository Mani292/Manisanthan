import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEMESTERS } from '../data/academics';
import { SubjectType } from '../types';

const MotionDiv = motion.div;

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 },
};

const pageTransition = {
  type: 'spring',
  stiffness: 100,
  duration: 0.5,
};

const AccordionItem: React.FC<{
    subject: SubjectType;
    isOpen: boolean;
    onClick: () => void;
}> = ({ subject, isOpen, onClick }) => {
    return (
        <MotionDiv className="bg-brand-dark rounded-lg overflow-hidden">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center p-4 text-left"
            >
                <h4 className="font-semibold text-white">{subject.name}</h4>
                <MotionDiv
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </MotionDiv>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <MotionDiv
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="px-4 pb-4"
                    >
                        <div className="border-t border-brand-secondary pt-3 flex flex-wrap gap-4">
                            {subject.notesUrl && <a href={subject.notesUrl} target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline text-sm font-medium">Notes</a>}
                            {subject.papersUrl && <a href={subject.papersUrl} target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline text-sm font-medium">Previous Papers</a>}
                            {subject.manualsUrl && <a href={subject.manualsUrl} target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline text-sm font-medium">Lab Manuals</a>}
                            {!subject.notesUrl && !subject.papersUrl && !subject.manualsUrl && <p className="text-gray-400 text-sm">Resources coming soon...</p>}
                        </div>
                    </MotionDiv>
                )}
            </AnimatePresence>
        </MotionDiv>
    );
};

const Academics: React.FC = () => {
  const [selectedSem, setSelectedSem] = useState(SEMESTERS[0].id);
  const [openSubject, setOpenSubject] = useState<string | null>(null);

  const activeTabClass = 'bg-brand-primary text-white';
  const inactiveTabClass = 'text-gray-300 hover:bg-brand-secondary hover:text-white';

  const handleAccordionClick = (subjectName: string) => {
      setOpenSubject(openSubject === subjectName ? null : subjectName);
  };
  
  const handleSemClick = (semId: number) => {
      setSelectedSem(semId);
      setOpenSubject(null);
  }

  return (
    <MotionDiv
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white">Academic Resources</h1>
        <p className="mt-4 text-lg text-gray-300">Semester-wise breakdown of subjects for your B.Tech course.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
            {SEMESTERS.map(sem => (
              <button
                key={sem.id}
                onClick={() => handleSemClick(sem.id)}
                className={`w-full text-left p-3 my-1 rounded-lg transition-colors duration-200 whitespace-nowrap ${selectedSem === sem.id ? activeTabClass : inactiveTabClass}`}
              >
                {sem.title}
              </button>
            ))}
          </div>
        </div>

        <div className="md:w-3/4">
            <AnimatePresence mode="wait">
                <MotionDiv
                    key={selectedSem}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 bg-brand-secondary rounded-xl"
                >
                    <h2 className="text-2xl font-bold text-white mb-4">
                        {SEMESTERS.find(s => s.id === selectedSem)?.title} Subjects
                    </h2>
                    <div className="space-y-4">
                        {SEMESTERS.find(s => s.id === selectedSem)?.subjects.map(subject => (
                            <AccordionItem
                                key={subject.name}
                                subject={subject}
                                isOpen={openSubject === subject.name}
                                onClick={() => handleAccordionClick(subject.name)}
                            />
                        ))}
                    </div>
                </MotionDiv>
            </AnimatePresence>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Academics;