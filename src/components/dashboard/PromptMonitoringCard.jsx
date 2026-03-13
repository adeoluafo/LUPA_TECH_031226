// src/components/dashboard/PromptMonitoringCard.jsx

import { Search } from "lucide-react";

export default function PromptMonitoringCard({ items }) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex items-start gap-3">
        <Search className="mt-1 h-6 w-6 text-violet-600" />
        <div>
          <h2 className="text-2xl font-semibold">Prompt Monitoring Engine</h2>
          <p className="mt-1 text-xl text-slate-500">
            AI responses tracked across shopping query categories
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <div key={item.prompt} className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-xl bg-slate-100 px-3 py-1 text-sm font-semibold">
                    {item.category}
                  </span>
                  <span className="text-lg font-medium">"{item.prompt}"</span>
                </div>

                <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">
                  <span>Frequency: {item.frequency}</span>
                  <span>Capital One appears: {item.appears}</span>
                  <span>Avg ranking: {item.ranking}</span>
                </div>
              </div>

              <div className="flex gap-2">
                {["C", "G", "P"].map((t) => (
                  <span
                    key={t}
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-sm font-semibold text-blue-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}