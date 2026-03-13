// src/components/dashboard/SignalDiagnosticsCard.jsx

import { Activity } from "lucide-react";

export default function SignalDiagnosticsCard({ items }) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-7">
      <div className="flex items-start gap-3">
        <Activity className="mt-1 h-6 w-6 text-violet-600" />
        <div>
          <h2 className="text-2xl font-semibold">Signal Diagnostics</h2>
          <p className="mt-1 text-xl text-slate-500">What influences AI responses</p>
        </div>
      </div>

      <div className="mt-8 space-y-5">
        {items.map((item) => (
          <div key={item.label}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-lg font-medium">{item.label}</span>
              <span className="text-2xl font-bold">{item.value}%</span>
            </div>
            <div className="h-3 rounded-full bg-slate-200">
              <div
                className={`h-3 rounded-full ${item.color}`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-blue-50 px-4 py-4">
        <p className="text-lg font-semibold text-blue-700">Insight:</p>
        <p className="mt-1 text-sm leading-6 text-blue-700">
          Comparison articles drive 42% of AI responses. VeriPrompt is prioritizing
          structured data distribution to these sources.
        </p>
      </div>
    </section>
  );
}