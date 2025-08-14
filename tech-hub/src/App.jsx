import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/**
 * TECH HUB — Functional Website (single-file React app)
 * Features:
 * - Responsive layout (Tailwind)
 * - Router pages: Home, Roadmaps, Academics, Quiz, Resources
 * - Roadmap progress with localStorage persistence
 * - Bookmark resources (localStorage)
 * - Simple contact form (mock submit)
 * - Framer Motion animations
 *
 * Prereqs (already covered earlier):
 *   npm i react-router-dom framer-motion
 *   Tailwind set up in index.css + tailwind.config.js
 */

// ---------- Utilities ----------
const cn = (...classes) => classes.filter(Boolean).join(" ");
const storage = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

// ---------- Data ----------
const ROADMAPS = {
  "Web Development": [
    { id: "html", title: "HTML Basics", desc: "Tags, structure, semantics" },
    { id: "css", title: "CSS Fundamentals", desc: "Flexbox, Grid, responsive" },
    { id: "js", title: "JavaScript Essentials", desc: "ES6, DOM, fetch" },
    { id: "react", title: "React Basics", desc: "Components, hooks, props" },
    { id: "state", title: "State Mgmt", desc: "Context, Redux (optional)" },
    { id: "build", title: "Build Tools", desc: "Vite, bundling, env" },
    { id: "deploy", title: "Deploy", desc: "Vercel/Netlify, CI/CD" },
  ],
  "Data Science": [
    { id: "py", title: "Python", desc: "Syntax, lists, dicts" },
    { id: "np", title: "NumPy", desc: "Arrays, vectorization" },
    { id: "pd", title: "Pandas", desc: "DataFrames, cleaning" },
    { id: "viz", title: "Visualization", desc: "Matplotlib/Plotly" },
    { id: "ml", title: "ML Basics", desc: "Models, metrics, sklearn" },
    { id: "proj", title: "Projects", desc: "EDA + case studies" },
  ],
  "Cybersecurity": [
    { id: "net", title: "Networking", desc: "OSI, TCP/IP, subnets" },
    { id: "sec", title: "Security Basics", desc: "CIA triad, authn/z" },
    { id: "tools", title: "Tools", desc: "nmap, Wireshark, Burp" },
    { id: "websec", title: "Web Security", desc: "OWASP Top 10" },
    { id: "blue", title: "Blue Team", desc: "SIEM, logs, IR basics" },
  ],
};

const SEMESTERS = [
  {
    name: "Semester 1",
    items: ["Engineering Mathematics I", "Basic Electrical", "Physics", "Programming in C", "Workshop"]
  },
  {
    name: "Semester 2",
    items: ["Engineering Mathematics II", "Data Structures", "Digital Electronics", "Python", "Communication Skills"]
  },
  {
    name: "Semester 3",
    items: ["OOP (Java)", "DBMS", "Computer Networks", "Discrete Mathematics", "OS Lab"]
  },
  {
    name: "Semester 4",
    items: ["Operating Systems", "Software Engineering", "Design & Analysis of Algorithms", "CN Lab", "Mini Project"]
  },
  {
    name: "Semester 5",
    items: ["Machine Learning", "Web Technologies", "Cloud Fundamentals", "Elective I", "Minor Project"]
  },
  {
    name: "Semester 6",
    items: ["Cloud Computing", "Big Data", "Elective II", "Professional Ethics", "Internship/Industry Training"]
  },
  { name: "Semester 7", items: ["IoT", "Blockchain", "Elective III", "Research Methodology"] },
  { name: "Semester 8", items: ["Capstone Project", "Seminar", "Comprehensive Viva"] },
];

const RESOURCE_LIBRARY = [
  { id: "yt-freecodecamp", title: "freeCodeCamp", url: "https://www.freecodecamp.org/", tag: "Web" },
  { id: "yt-kdnuggets", title: "KDnuggets", url: "https://www.kdnuggets.com/", tag: "Data" },
  { id: "owasp", title: "OWASP Top 10", url: "https://owasp.org/Top10/", tag: "Security" },
  { id: "mdn", title: "MDN Web Docs", url: "https://developer.mozilla.org/", tag: "Docs" },
];

// ---------- Layout ----------
function Shell({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 lg:p-8">{children}</main>
      <Footer />
    </div>
  );
}

function Header() {
  const linkBase = "px-3 py-2 rounded-xl text-sm font-medium hover:bg-white/20 transition";
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-blue-600/90 text-white shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-3">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight">Tech Hub</span>
        </NavLink>
        <nav className="flex gap-1">
          <NavLink to="/" className={({isActive}) => cn(linkBase, isActive && "bg-white/20")}>Home</NavLink>
          <NavLink to="/roadmaps" className={({isActive}) => cn(linkBase, isActive && "bg-white/20")}>Roadmaps</NavLink>
          <NavLink to="/academics" className={({isActive}) => cn(linkBase, isActive && "bg-white/20")}>Academics</NavLink>
          <NavLink to="/quiz" className={({isActive}) => cn(linkBase, isActive && "bg-white/20")}>Quiz</NavLink>
          <NavLink to="/resources" className={({isActive}) => cn(linkBase, isActive && "bg-white/20")}>Resources</NavLink>
          <NavLink to="/contact" className={({isActive}) => cn(linkBase, isActive && "bg-white/20")}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto p-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Tech Hub — Built for BTech students.</p>
        <p className="opacity-80">Made with React, Tailwind & Framer Motion</p>
      </div>
    </footer>
  );
}

// ---------- Pages ----------
function Home() {
  const navigate = useNavigate();
  return (
    <div className="grid gap-8">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-3xl p-8 shadow-lg"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Level up your BTech journey</h1>
        <p className="mt-3 text-white/90 max-w-2xl">
          Clear roadmaps, semester guides, quizzes, and curated resources — all in one place.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={() => navigate("/roadmaps")} className="px-5 py-2.5 bg-white text-blue-700 rounded-2xl font-semibold shadow hover:shadow-md">Explore Roadmaps</button>
          <button onClick={() => navigate("/quiz")} className="px-5 py-2.5 bg-blue-900/30 border border-white/30 rounded-2xl font-semibold hover:bg-blue-900/40">Find Your Track</button>
        </div>
      </motion.section>

      <section className="grid sm:grid-cols-3 gap-4">
        {[
          { title: "Roadmaps", desc: "Interactive steps with progress tracking.", href: "/roadmaps" },
          { title: "Academics", desc: "Semester-wise syllabus & tips.", href: "/academics" },
          { title: "Resources", desc: "Curated links, bookmark your favs.", href: "/resources" },
        ].map((c) => (
          <Card key={c.title} {...c} />
        ))}
      </section>
    </div>
  );
}

function Card({ title, desc, href }) {
  const navigate = useNavigate();
  return (
    <motion.div whileHover={{ y: -4 }} className="bg-white rounded-2xl p-6 shadow border">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 mt-1">{desc}</p>
      <button onClick={() => navigate(href)} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700">
        Open
      </button>
    </motion.div>
  );
}

function RoadmapsPage() {
  const [completed, setCompleted] = useState(() => storage.get("techhub_progress", {}));
  useEffect(() => storage.set("techhub_progress", completed), [completed]);

  const totalSteps = useMemo(
    () => Object.values(ROADMAPS).reduce((acc, arr) => acc + arr.length, 0),
    []
  );
  const doneCount = useMemo(() => Object.values(completed).flat().length, [completed]);
  const pct = Math.round((doneCount / totalSteps) * 100);

  const toggle = (track, id) => {
    setCompleted((prev) => {
      const trackSet = new Set(prev[track] || []);
      trackSet.has(id) ? trackSet.delete(id) : trackSet.add(id);
      return { ...prev, [track]: Array.from(trackSet) };
    });
  };

  return (
    <div className="grid gap-6">
      <div className="bg-white p-5 rounded-2xl shadow border">
        <h2 className="text-2xl font-bold">Learning Roadmaps</h2>
        <p className="text-gray-600">Track your progress across multiple tracks. Your progress is saved to your browser.</p>
        <div className="mt-4">
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600" style={{ width: `${pct}%` }} />
          </div>
          <p className="mt-2 text-sm text-gray-600">Overall progress: {doneCount}/{totalSteps} ({pct}%)</p>
        </div>
      </div>

      {Object.entries(ROADMAPS).map(([track, steps]) => {
        const done = new Set(completed[track] || []);
        return (
          <motion.section key={track} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-5 rounded-2xl shadow border">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-xl font-bold">{track}</h3>
              <span className="text-sm text-gray-600">{done.size}/{steps.length} complete</span>
            </div>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {steps.map((s) => (
                <button
                  key={s.id}
                  onClick={() => toggle(track, s.id)}
                  className={cn(
                    "text-left p-4 rounded-xl border transition shadow-sm hover:shadow",
                    done.has(s.id) ? "bg-green-50 border-green-400" : "bg-white"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <input type="checkbox" readOnly checked={done.has(s.id)} className="mt-1" />
                    <div>
                      <p className="font-semibold">{s.title}</p>
                      <p className="text-sm text-gray-600">{s.desc}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.section>
        );
      })}
    </div>
  );
}

function AcademicsPage() {
  const [open, setOpen] = useState(() => storage.get("techhub_semesters_open", { 0: true }));
  useEffect(() => storage.set("techhub_semesters_open", open), [open]);

  return (
    <div className="grid gap-4">
      <div className="bg-white p-5 rounded-2xl shadow border">
        <h2 className="text-2xl font-bold">Academics</h2>
        <p className="text-gray-600">Semester-wise syllabus snapshot. Expand to view subjects.</p>
      </div>
      {SEMESTERS.map((sem, idx) => (
        <div key={sem.name} className="bg-white rounded-2xl shadow border">
          <button
            onClick={() => setOpen((o) => ({ ...o, [idx]: !o[idx] }))}
            className="w-full flex items-center justify-between p-5"
          >
            <span className="text-lg font-semibold">{sem.name}</span>
            <span className="text-sm text-gray-600">{open[idx] ? "Hide" : "Show"}</span>
          </button>
          <AnimatePresence initial={false}>
            {open[idx] && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-6 pb-5 space-y-2"
              >
                {sem.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-gray-700">
                    <span className="inline-block h-2 w-2 bg-blue-600 rounded-full" /> {it}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function QuizPage() {
  const QUESTIONS = [
    { q: "Which language styles web pages?", options: ["HTML", "CSS", "SQL"], answer: 1 },
    { q: "Which is a Python library for data?", options: ["Express", "Pandas", "Laravel"], answer: 1 },
    { q: "What does OWASP focus on?", options: ["Web security", "Game dev", "Robotics"], answer: 0 },
    { q: "React uses _____ to manage UI state.", options: ["Hooks", "Triggers", "Wires"], answer: 0 },
  ];

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const best = storage.get("techhub_best_score", 0);

  const score = useMemo(() =>
    Object.entries(answers).reduce((acc, [i, v]) => acc + (v === QUESTIONS[i].answer ? 1 : 0), 0)
  , [answers]);

  const submit = () => {
    setSubmitted(true);
    if (score > best) storage.set("techhub_best_score", score);
  };

  return (
    <div className="grid gap-4">
      <div className="bg-white p-5 rounded-2xl shadow border">
        <h2 className="text-2xl font-bold">Quick Quiz</h2>
        <p className="text-gray-600">Test yourself across web, data, and security.
          <span className="ml-2">Best score saved: <strong>{best}</strong></span>
        </p>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow border">
        {QUESTIONS.map((item, i) => (
          <div key={i} className="mb-5">
            <p className="font-medium">{i + 1}. {item.q}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {item.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => setAnswers((a) => ({ ...a, [i]: idx }))}
                  className={cn(
                    "px-3 py-1.5 rounded-xl border text-sm",
                    answers[i] === idx ? "bg-blue-600 text-white" : "bg-gray-100"
                  )}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}

        {!submitted ? (
          <button onClick={submit} className="mt-2 px-4 py-2 bg-green-600 text-white rounded-xl">Submit</button>
        ) : (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 font-semibold">
            Your Score: {score} / {QUESTIONS.length}
          </motion.p>
        )}
      </div>
    </div>
  );
}

function ResourcesPage() {
  const [bookmarks, setBookmarks] = useState(() => new Set(storage.get("techhub_bookmarks", [])));
  useEffect(() => storage.set("techhub_bookmarks", Array.from(bookmarks)), [bookmarks]);

  const toggle = (id) => {
    setBookmarks((b) => {
      const s = new Set(b);
      s.has(id) ? s.delete(id) : s.add(id);
      return s;
    });
  };

  const filtered = RESOURCE_LIBRARY; // Could add filters by tag later

  return (
    <div className="grid gap-4">
      <div className="bg-white p-5 rounded-2xl shadow border">
        <h2 className="text-2xl font-bold">Resources</h2>
        <p className="text-gray-600">Curated links. Bookmark your favourites.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((r) => (
          <div key={r.id} className="bg-white rounded-2xl border p-5 shadow">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold">{r.title}</p>
                <p className="text-sm text-gray-600">{r.tag}</p>
              </div>
              <button
                onClick={() => toggle(r.id)}
                className={cn("px-3 py-1.5 rounded-xl text-sm border", bookmarks.has(r.id) ? "bg-yellow-100 border-yellow-500" : "bg-gray-100")}
              >
                {bookmarks.has(r.id) ? "Bookmarked" : "Bookmark"}
              </button>
            </div>
            <a href={r.url} target="_blank" rel="noreferrer" className="inline-block mt-3 text-blue-600 hover:underline">Visit →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Mock submit — replace with a real API later
    setSent(true);
  };

  return (
    <div className="grid gap-4">
      <div className="bg-white p-5 rounded-2xl shadow border">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="text-gray-600">Send a message (mock). Wire this up to email/service later.</p>
      </div>

      <form onSubmit={onSubmit} className="bg-white p-5 rounded-2xl shadow border grid gap-3 max-w-xl">
        <input
          className="px-4 py-2 rounded-xl border"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          className="px-4 py-2 rounded-xl border"
          placeholder="Your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          rows={5}
          className="px-4 py-2 rounded-xl border"
          placeholder="Your message"
          value={form.msg}
          onChange={(e) => setForm({ ...form, msg: e.target.value })}
          required
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700">Send</button>
        {sent && <p className="text-green-700">Message queued locally — replace with a real backend to deliver.</p>}
      </form>
    </div>
  );
}

// ---------- App Router ----------
export default function App() {
  return (
    <Router>
      <Shell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmaps" element={<RoadmapsPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Shell>
    </Router>
  );
}
