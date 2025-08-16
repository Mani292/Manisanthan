// src/pages/Placement.tsx
import React from "react";

export default function Placement() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">
        🚀 Placement Preparation
      </h1>
      <p className="text-gray-700 mb-6">
        Find all the resources and guides for cracking placements.
      </p>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>Aptitude Practice (Quant, Logical, Verbal)</li>
        <li>DSA Roadmap + Practice Problems</li>
        <li>Interview Prep Websites (InterviewBit, LeetCode, GeeksforGeeks)</li>
        <li>Resume Building Guides</li>
        <li>HR & Technical Interview Questions</li>
      </ul>
    </div>
  );
}
