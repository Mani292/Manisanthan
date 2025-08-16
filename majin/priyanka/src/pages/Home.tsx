export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
          Tech Hub – B.Tech Students Hub
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl">
          One-stop platform for B.Tech students: Notes, Roadmaps, Coding Practice,
          Placement Preparation & Career Growth 🚀
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4">
          <a
            href="/about"
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200"
          >
            Explore More
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-pink-600 font-semibold rounded-lg shadow-lg hover:bg-pink-700"
          >
            Join Community
          </a>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-20 px-6 bg-white text-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">📚 Student Resources</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-indigo-100 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-3">Semester Notes</h3>
            <p className="text-gray-700">
              Get detailed notes & important questions for all 8 semesters.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-pink-100 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-3">Coding Roadmap</h3>
            <p className="text-gray-700">
              Learn DSA, Web Dev, and prepare for coding interviews step-by-step.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-yellow-100 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-3">Placement Prep</h3>
            <p className="text-gray-700">
              Previous year papers, interview guides & company-specific questions.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900 text-gray-400">
        © {new Date().getFullYear()} Priyanka – B.Tech Students Hub. All Rights Reserved.
      </footer>
    </div>
  );
}
