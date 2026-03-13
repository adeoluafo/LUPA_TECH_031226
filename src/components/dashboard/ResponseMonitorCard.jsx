// src/components/dashboard/ResponseMonitorCard.jsx

import { Globe } from "lucide-react";

export default function ResponseMonitorCard({ items }) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex items-start gap-3">
        <Globe className="mt-1 h-6 w-6 text-emerald-600" />
        <div>
          <h2 className="text-2xl font-semibold">AI Response Monitor</h2>
          <p className="mt-1 text-xl text-slate-500">Latest AI responses from each platform</p>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {items.map((item) => (
          <div key={item.platform} className="border-l-4 border-blue-600 pl-4">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-semibold">{item.platform}</h3>
              <span className="rounded-xl bg-slate-100 px-3 py-1 text-sm">
                Prompt: "{item.prompt}"
              </span>
            </div>

            <ol className="mt-4 space-y-2 text-lg">
              {item.results.map((result, index) => (
                <li key={result}>
                  <span className="mr-2 text-slate-400">#{index + 1}</span>
                  <span className={index === 0 ? "text-blue-700" : ""}>{result}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}