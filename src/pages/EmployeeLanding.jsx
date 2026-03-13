// src/pages/EmployeeLanding.jsx

import logo from "../assets/transparent-logo.png";

export default function EmployeeLanding() {
  return (
    <main className="min-h-screen bg-[#EFF6FF] flex items-center justify-center px-6">
      <section className="w-full max-w-4xl rounded-3xl bg-white shadow-xl shadow-blue-100/60 border border-blue-100 p-10 md:p-16 text-center">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="VeriPrompt Logo"
            className="h-20 w-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1E3A8A]">
          AI Discovery Intelligence
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-lg md:text-xl text-[#3B82F6] max-w-2xl mx-auto">
          Access the internal platform to monitor, review, and improve AI product representation.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          <button className="w-full sm:w-auto rounded-xl bg-[#2563EB] px-8 py-3 text-white font-semibold hover:bg-[#1D4ED8] transition">
            Login
          </button>

          <button className="w-full sm:w-auto rounded-xl border-2 border-[#3B82F6] bg-white px-8 py-3 text-[#2563EB] font-semibold hover:bg-[#EFF6FF] transition">
            Sign Up
          </button>

        </div>

      </section>
    </main>
  );
}