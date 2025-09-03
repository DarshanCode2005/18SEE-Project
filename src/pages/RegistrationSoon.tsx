import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function RegistrationSoon() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 animate-gradient-motion">
      {/* Animated Illustration */}
      <div className="mb-8">
        <svg className="w-32 h-32 animate-bounce" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" fill="url(#grad)" />
          <path d="M30 60 Q50 80 70 60" stroke="#fff" strokeWidth="4" fill="none" />
          <ellipse cx="50" cy="45" rx="18" ry="10" fill="#fff" opacity="0.2" />
          <defs>
            <radialGradient id="grad" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="#a78bfa" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg mb-4 animate-fade-in">Registrations Opening Soon</h1>
      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-white/80 mb-8 animate-fade-in-delay">Stay tuned for updates!</p>
      {/* Action Button */}
      <Button size="lg" className="bg-white text-purple-600 font-bold shadow-lg hover:bg-purple-100 transition-all animate-fade-in-delay" onClick={() => navigate("/")}>Go Back to Home</Button>
    </div>
  );
}

// Tailwind animation utilities
// Add these to your global CSS if not present:
// .animate-gradient-motion { background-size: 200% 200%; animation: gradientMotion 6s ease-in-out infinite; }
// @keyframes gradientMotion { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
// .animate-fade-in { animation: fadeIn 1s ease; }
// .animate-fade-in-delay { animation: fadeIn 2s ease; }
// @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
