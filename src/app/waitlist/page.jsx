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
          <form onSubmit={handleSubmit} className="email-container">
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </form>
          <div className="button-container">
          <button type="submit" className="join-waitlist-container">
              <div className="join-waitlist">
                <div className="join-waitlist-text">Join Waitlist</div>
              </div>
            </button>
          </div>
          {/* Response Message */}
          {message && (
            <div className="user-info text-sm text-center mt-3">{message}</div>
          )}
        </div>
      </div>
    </>
  );
}
