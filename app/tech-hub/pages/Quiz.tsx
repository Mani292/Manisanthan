import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUIZ_QUESTIONS } from '../data/quizzes';

const MotionDiv = motion.div;

const pageVariants = {
  initial: { opacity: 0, scale: 0.9 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 0.9 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const Quiz: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (isCorrect: boolean) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < QUIZ_QUESTIONS.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    };

    return (
        <MotionDiv
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="max-w-3xl mx-auto bg-brand-secondary p-8 rounded-2xl shadow-lg"
        >
            <AnimatePresence mode="wait">
                {showScore ? (
                    <MotionDiv
                        key="score"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="text-center"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Quiz Complete!</h2>
                        <p className="text-xl text-brand-primary font-semibold mb-6">
                            You scored {score} out of {QUIZ_QUESTIONS.length}
                        </p>
                        <button
                            onClick={restartQuiz}
                            className="bg-brand-primary text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
                        >
                            Retake Quiz
                        </button>
                    </MotionDiv>
                ) : (
                    <MotionDiv
                        key={currentQuestion}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="mb-6">
                            <div className="text-xl font-semibold text-gray-300 mb-2">
                                <span>Question {currentQuestion + 1}</span>/{QUIZ_QUESTIONS.length}
                            </div>
                            <h2 className="text-2xl text-white">
                                {QUIZ_QUESTIONS[currentQuestion].questionText}
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {QUIZ_QUESTIONS[currentQuestion].answerOptions.map((answerOption, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                                    className="w-full text-left bg-brand-dark p-4 rounded-lg text-white hover:bg-brand-primary transition-colors duration-200"
                                >
                                    {answerOption.answerText}
                                </button>
                            ))}
                        </div>
                    </MotionDiv>
                )}
            </AnimatePresence>
        </MotionDiv>
    );
};

export default Quiz;