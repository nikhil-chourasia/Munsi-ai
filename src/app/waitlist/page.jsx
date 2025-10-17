"use client";

import { useState } from "react";

export default function WaitlistPage() {
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
    <>
      <a href="/">
        <div className="back-button"></div>
      </a>

      <div className="join-waitlist-box-container">
        <div className="join-waitlist-box">
          {/* Mail Icon */}
          <div className="mail-logo-container">
            <div className="mail-logo"></div>
          </div>

          {/* Title */}
          <div className="JTWL-text">Join the Waitlist</div>

          {/* Info Text */}
          <div className="infotext-cont">
            <div className="infotext">
              Enter your email and we will notify you for early access
            </div>
          </div>

          {/* Email Form */}

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-4  items-center space-y-4 max-w-sm mx-auto"
          >
            <input
              type="email"
              placeholder="youremail@gmail.com"
              /* behenchoo.. isme border radius kyu nhi lg raha hai?*/
              className="w-64 rounded-full h-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              // Increased vertical padding (py-3) and decreased width to match the input
              className="w-64 h-10 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              <span className="font-semibold">Join Waitlist</span>
            </button>
          </form>

          {/* Response Message */}
          {message && (
            <div className="user-info text-sm text-center mt-3">{message}</div>
          )}
        </div>
      </div>
    </>
  );
}
