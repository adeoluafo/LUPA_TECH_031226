// src/components/dashboard/RightRailCards.jsx

import { Database, CheckCircle2 } from "lucide-react";

export default function RightRailCards({ updates }) {
  return (
    <div className="space-y-6">
      <section className="rounded-[28px] bg-gradient-to-r from-blue-600 to-fuchsia-600 p-6 text-white shadow-sm">
        <h3 className="text-2xl font-semibold">Quarterly Trend Report</h3>
        <p className="mt-2 text-lg text-blue-50">Track score improvements over time</p>
        <button className="mt-6 w-full rounded-2xl bg-white px-5 py-3 text-lg font-semibold text-blue-700">
          View Quarterly Report
        </button>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <Database className="mt-1 h-6 w-6 text-emerald-600" />
          <div>
            <h3 className="text-2xl font-semibold">Gateway Data Status</h3>
            <p className="mt-1 text-xl text-slate-500">VeriPrompt interventions</p>
          </div>
        </div>

        <div className="mt-6 space-y-5">
          {updates.map((item, index) => (
            <div key={item} className={index !== updates.length - 1 ? "border-b border-slate-200 pb-4" : ""}>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-500" />
                <div>
                  <p className="text-lg font-medium">{item}</p>
                  <p className="mt-1 text-sm text-slate-500">{index + 2} days ago</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}