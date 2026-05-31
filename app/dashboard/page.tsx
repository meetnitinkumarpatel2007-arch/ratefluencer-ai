"use client";

import { useState } from "react";

export default function Dashboard() {
  const [username, setUsername] = useState("");

  const handleAnalyze = () => {
    alert(`Analyzing ${username}`);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">
        RateFluencer Dashboard 🚀
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-md max-w-lg">
        <h2 className="text-xl font-semibold mb-4">
          Analyze Influencer
        </h2>

        <input
          type="text"
          placeholder="Enter Instagram username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <button
          onClick={handleAnalyze}
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          Analyze
        </button>
      </div>
    </main>
  );
}