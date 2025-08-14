import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [progress, setProgress] = useState(
    JSON.parse(localStorage.getItem("progress")) || []
  );

  const roadmaps = {
    "Web Development": [
      { id: 1, title: "HTML Basics", desc: "Learn HTML tags & structure" },
      { id: 2, title: "CSS Fundamentals", desc: "Learn styling & layouts" },
      { id: 3, title: "JavaScript Essentials", desc: "Variables, loops, DOM" },
      { id: 4, title: "React Basics", desc: "Components, props, state" },
    ],
    "Data Science": [
      { id: 5, title: "Python Basics", desc: "Variables, loops, data types" },
      { id: 6, title: "Data Analysis", desc: "Pandas, NumPy" },
      { id: 7, title: "Visualization", desc: "Matplotlib, Seaborn" },
      { id: 8, title: "Machine Learning", desc: "Scikit-learn basics" },
    ],
    "Mobile Development": [
      { id: 9, title: "Java/Kotlin Basics", desc: "Android fundamentals" },
      { id: 10, title: "Swift Basics", desc: "iOS fundamentals" },
      { id: 11, title: "Flutter", desc: "Cross-platform UI" },
      { id: 12, title: "App Deployment", desc: "Play Store & App Store" },
    ],
    "AI/ML": [
      { id: 13, title: "Math for ML", desc: "Linear algebra, calculus" },
      { id: 14, title: "Deep Learning", desc: "Neural networks, TensorFlow" },
      { id: 15, title: "NLP", desc: "Text, language models" },
      { id: 16, title: "AI Ethics", desc: "Fairness, bias, privacy" },
    ],
  };

  const toggleProgress = (id) => {
    let updated;
    if (progress.includes(id)) {
      updated = progress.filter((step) => step !== id);
    } else {
      updated = [...progress, id];
    }
    setProgress(updated);
    localStorage.setItem("progress", JSON.stringify(updated));
  };

  const academicSemesters = [
    {
      sem: 1,
      subjects: [
        "Basic Electrical",
        "Engineering Math",
        "Physics",
        "Environmental Science",
      ],
    },
    {
      sem: 2,
      subjects: [
        "Data Structures",
        "Digital Electronics",
        "Discrete Math",
        "Communication Skills",
      ],
    },
    {
      sem: 3,
      subjects: ["OOP", "DBMS", "Computer Networks", "Microprocessors"],
    },
    {
      sem: 4,
      subjects: [
        "Operating Systems",
        "Software Engineering",
        "Design & Analysis of Algorithms",
        "Probability & Stats",
      ],
    },
    {
      sem: 5,
      subjects: [
        "Machine Learning",
        "Web Technologies",
        "Compiler Design",
        "Mobile Computing",
      ],
    },
    {
      sem: 6,
      subjects: [
        "Cloud Computing",
        "Big Data",
        "Cyber Security",
        "Elective I",
      ],
    },
    {
      sem: 7,
      subjects: ["IoT", "Blockchain", "Elective II", "Project Phase I"],
    },
    {
      sem: 8,
      subjects: [
        "Final Year Project",
        "Industry Training",
        "Seminar",
        "Elective III",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6 font-sans">
      <header className="text-center mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-blue-700"
        >
          Tech Hub
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-700 mt-2"
        >
          Your interactive guide to mastering tech and academics.
        </motion.p>
      </header>

      {Object.entries(roadmaps).map(([title, steps], idx) => (
        <motion.section
          key={title}
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">{title} Roadmap</h2>
          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            <AnimatePresence>
              {steps.map((step) => (
                <motion.div
                  key={step.id}
                  className={`p-4 border rounded-xl shadow-sm cursor-pointer transition ${
                    progress.includes(step.id)
                      ? "bg-green-100 border-green-400"
                      : "bg-white"
                  }`}
                  onClick={() => toggleProgress(step.id)}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-bold text-lg">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          <div className="mt-4 text-sm text-gray-700">
            Progress:{" "}
            {progress.filter((p) => steps.some((s) => s.id === p)).length} /{" "}
            {steps.length} steps completed
          </div>
        </motion.section>
      ))}

      <motion.section
        className="mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Academics</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {academicSemesters.map((sem) => (
            <motion.li
              key={sem.sem}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: sem.sem * 0.1 }}
            >
              <strong>Semester {sem.sem}:</strong> {sem.subjects.join(", ")}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Quick Quiz</h2>
        <Quiz />
      </motion.section>
    </div>
  );
}

function Quiz() {
  const questions = [
    {
      q: "Which language is used for styling web pages?",
      options: ["HTML", "CSS", "JavaScript"],
      answer: "CSS",
    },
    {
      q: "Which tag is used for creating a hyperlink in HTML?",
      options: ["<a>", "<link>", "<href>"],
      answer: "<a>",
    },
    {
      q: "Which library is popular for building user interfaces in JavaScript?",
      options: ["React", "Django", "Laravel"],
      answer: "React",
    },
    {
      q: "Which language is commonly used for Data Science?",
      options: ["Python", "Java", "C++"],
      answer: "Python",
    },
    {
      q: "Which framework is used for cross-platform mobile development?",
      options: ["Flutter", "Spring", "Rails"],
      answer: "Flutter",
    },
    {
      q: "Which concept is essential for Machine Learning?",
      options: ["Linear Regression", "Recursion", "Sorting"],
      answer: "Linear Regression",
    },
  ];

  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState({});

  const handleSelect = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleSubmit = () => {
    let sc = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) sc++;
    });
    setScore(sc);
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 border rounded-xl bg-white shadow-sm"
    >
      {questions.map((q, i) => (
        <motion.div
          key={i}
          className="mb-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        >
          <p className="font-medium">{q.q}</p>
          <div className="flex gap-3 mt-2 flex-wrap">
            {q.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleSelect(i, opt)}
                className={`px-3 py-1 rounded border text-sm transition ${
                  answers[i] === opt ? "bg-blue-500 text-white" : "bg-gray-100"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </motion.div>
      ))}
      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        >
          Submit
        </button>
      ) : (
        <motion.p
          className="mt-4 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Your Score: {score} / {questions.length}
        </motion.p>
      )}
    </motion.div>
  );
}
