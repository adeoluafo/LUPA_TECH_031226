// src/components/dashboard/DashboardHeader.jsx

import { Search, ChevronDown, Activity } from "lucide-react";

export default function DashboardHeader({ data }) {
  return (
    <header>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Dell VeriPrompt</h1>
          <p className="mt-2 text-2xl text-slate-500">
            AI Discovery Intelligence &amp; Product Data Gateway Platform
          </p>
        </div>

        <button className="inline-flex items-center gap-3 rounded-2xl bg-[#050A2B] px-5 py-4 text-lg font-semibold text-white shadow-sm">
          <Search className="h-5 w-5" />
          Run New Analysis
        </button>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base">
          <span className="text-slate-400">Client:</span>
          <span className="font-semibold">{data.client}</span>
          <ChevronDown className="h-4 w-4 text-slate-400" />
        </div>

        <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base">
          <span className="text-slate-400">Industry:</span>
          <span className="font-semibold">{data.industry}</span>
          <ChevronDown className="h-4 w-4 text-slate-400" />
        </div>

        <div className="inline-flex items-center gap-2 rounded-2xl bg-emerald-50 px-4 py-3 text-base font-semibold text-emerald-700">
          <Activity className="h-4 w-4" />
          Monitoring Active
        </div>

        <div className="inline-flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base">
          <span className="text-slate-400">AI Platforms:</span>
          {data.platforms.map((platform) => (
            <span
              key={platform}
              className="rounded-xl border border-slate-200 px-3 py-1 text-sm font-medium"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}