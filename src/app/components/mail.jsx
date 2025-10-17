"use client";

import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!email.includes("@")) {
      setMessage("❌ Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage("✅ Email saved successfully!");
        setEmail("");
      } else if (res.status === 400) {
        setMessage("⚠️ Email already exists.");
      } else {
        setMessage("❌ Failed to save email.");
      }
    } catch (err) {
      setMessage("⚠️ Error connecting to server.");
    }
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-2 items-center"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 w-60 sm:w-72 text-sm outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-all"
        >
          Submit
        </button>
      </form>

      {message && (
        <p className="mt-2 text-center text-sm text-gray-700">{message}</p>
      )}
    </div>
  );
}
