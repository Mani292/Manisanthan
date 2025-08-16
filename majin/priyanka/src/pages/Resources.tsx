export default function Resources() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-10">
      <h1 className="text-4xl font-bold mb-8">📚 Resources & Notes</h1>
      <ul className="space-y-4">
        <li>
          <a href="https://drive.google.com/..." className="text-indigo-600 hover:underline">
            Semester 1 Notes (C, Maths, Physics)
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/..." className="text-indigo-600 hover:underline">
            Semester 2 Notes (Data Structures, OOPs, Digital Logic)
          </a>
        </li>
        <li>
          <a href="https://nptel.ac.in" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
            NPTEL Lectures
          </a>
        </li>
        <li>
          <a href="https://www.geeksforgeeks.org" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
            GeeksforGeeks Articles
          </a>
        </li>
      </ul>
    </div>
  );
}
