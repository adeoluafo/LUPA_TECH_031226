// src/pages/LandingPage.jsx
// Updated with brighter blue palette that matches the logo

import logo from "../assets/transparent-logo.png";

import {
  Search,
  Target,
  Activity,
  Database,
  Brain,
  ChevronRight,
} from "lucide-react";

/*
COLOR PALETTE (logo-friendly)

Primary Blue:   #2563EB
Light Blue:     #EFF6FF
Accent Blue:    #3B82F6
Background:     #F8FAFF
*/

const capabilities = [
  {
    icon: Search,
    title: "Prompt Monitoring",
    desc: "Track real shopping queries and how AI models respond.",
  },
  {
    icon: Target,
    title: "Accuracy Detection",
    desc: "Verify AI product claims against trusted product data.",
  },
  {
    icon: Activity,
    title: "Signal Diagnostics",
    desc: "Analyze representation quality and consistency.",
  },
  {
    icon: Database,
    title: "Data Gateway",
    desc: "Centralized product knowledge and synchronization.",
  },
  {
    icon: Brain,
    title: "Trust Metrics",
    desc: "Measure confidence in AI product representation.",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFF] text-gray-900">

      {/* HEADER */}
      <header className="border-b bg-white">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          <div className="flex items-center gap-4">

            <img
              src={logo}
              alt="VeriPrompt Logo"
              className="h-10 w-auto"
            />

            <div>
              <h1 className="font-bold text-lg text-[#2563EB]">
                Dell VeriPrompt
              </h1>

              <p className="text-sm text-gray-500">
                AI Product Representation Intelligence
              </p>
            </div>

          </div>

          <div className="flex gap-3">

            <button className="border border-[#2563EB] text-[#2563EB] px-4 py-2 rounded-lg hover:bg-[#EFF6FF]">
              Login
            </button>

            <button className="bg-[#2563EB] text-white px-4 py-2 rounded-lg hover:bg-[#1D4ED8]">
              Sign Up
            </button>

          </div>

        </div>

      </header>


      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">

        <h2 className="text-6xl font-bold leading-tight">

          Monitor How AI Represents

          <span className="block text-[#2563EB]">
            Your Products
          </span>

        </h2>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">

          Track and optimize product visibility across AI shopping experiences.
          Detect inaccurate claims and improve product trust signals.

        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button className="bg-[#2563EB] text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-[#1D4ED8]">
            Sign Up
            <ChevronRight size={18} />
          </button>

          <button className="border border-[#2563EB] text-[#2563EB] px-6 py-3 rounded-xl hover:bg-[#EFF6FF]">
            Login
          </button>

        </div>

      </section>


      {/* CHALLENGE */}
      <section className="bg-white py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h3 className="text-4xl font-bold text-[#2563EB]">
            The Challenge
          </h3>

          <p className="mt-6 text-xl text-gray-600">

            Customers increasingly ask AI assistants for product recommendations
            instead of visiting company websites. Without visibility into these
            AI interactions businesses risk inaccurate representation or
            complete invisibility in AI marketplaces.

          </p>

        </div>

      </section>


      {/* CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">

          <h3 className="text-4xl font-bold text-[#2563EB]">
            Platform Capabilities
          </h3>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {capabilities.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white border rounded-2xl p-8 hover:shadow-xl transition"
              >

                <div className="bg-[#EFF6FF] w-12 h-12 flex items-center justify-center rounded-xl text-[#2563EB]">
                  <Icon size={22} />
                </div>

                <h4 className="mt-5 text-xl font-semibold">
                  {item.title}
                </h4>

                <p className="mt-3 text-gray-600">
                  {item.desc}
                </p>

              </div>
            );

          })}

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="bg-white py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h3 className="text-4xl font-bold text-center mb-14 text-[#2563EB]">
            How It Works
          </h3>

          <div className="grid md:grid-cols-4 gap-10 text-center">

            {[
              "Submit Prompts",
              "Query AI Models",
              "Extract Claims",
              "Verify Product Data",
            ].map((step, index) => (

              <div key={index}>

                <div className="w-12 h-12 mx-auto rounded-full bg-[#2563EB] text-white flex items-center justify-center">
                  {index + 1}
                </div>

                <h4 className="mt-4 font-semibold text-lg">
                  {step}
                </h4>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t bg-[#F8FAFF] py-8">

        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          <div className="flex items-center gap-3">

            <img
              src={logo}
              className="h-8"
            />

            <span className="font-semibold text-[#2563EB]">
              Dell VeriPrompt
            </span>

          </div>

          <p className="text-sm text-gray-500">
            © 2026 Dell VeriPrompt
          </p>

        </div>

      </footer>

    </main>
  );
}