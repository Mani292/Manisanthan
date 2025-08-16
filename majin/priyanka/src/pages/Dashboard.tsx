import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  // Filters
  const filters = ["All", "Year1", "Year2", "Year3", "Year4"];

  // Card Data
  const yearCards = [
    {
      year: "Year1",
      title: "Year 1 – Foundation",
      desc: "Learn C, Python, Problem Solving, and Basics of Engineering.",
    },
    {
      year: "Year2",
      title: "Year 2 – Core Subjects",
      desc: "Master DSA, OOPs, DBMS, and explore core CS fundamentals.",
    },
    {
      year: "Year3",
      title: "Year 3 – Advanced Tracks",
      desc: "Dive into Web Dev, Cloud, AI/ML, and specialization choices.",
    },
    {
      year: "Year4",
      title: "Year 4 – Career Prep",
      desc: "Focus on internships, projects, and placement preparation.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
      {/* Hero Section */}
      <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full mb-4">
        🎓 Made for Students
      </span>

      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
        Discover your <span className="text-blue-600">B.Tech Roadmap</span>
      </h1>

      <p className="text-gray-600 text-lg md:text-xl text-center max-w-2xl mb-6">
        Browse, learn, and explore semester-wise guides to master DSA, Web Dev,
        AI/ML, Cloud, and more 🚀
      </p>

      {/* Search */}
      <div className="flex items-center w-full max-w-md mb-8">
        <input
          type="text"
          placeholder="🔍 Search topics..."
          className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">
          Search
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => {
              setActiveFilter(filter);
              if (filter !== "All") navigate(`/${filter.toLowerCase()}`);
            }}
            className={`px-5 py-2 rounded-full border transition ${
              activeFilter === filter
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-100"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-5xl">
        {yearCards
          .filter((card) => activeFilter === "All" || card.year === activeFilter)
          .map((card) => (
            <div
              key={card.year}
              className="p-6 border rounded-2xl shadow hover:shadow-lg transition bg-white flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                  {card.title}
                </h2>
                <p className="text-gray-600 mb-4">{card.desc}</p>
              </div>
              <button
                onClick={() => navigate(`/${card.year.toLowerCase()}`)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 self-start"
              >
                Explore →
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
