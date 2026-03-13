// src/components/dashboard/AccuracyDetectionCard.jsx

import { AlertTriangle } from "lucide-react";

function boxTone(tone) {
  if (tone === "red") return "border-red-200 bg-red-50";
  if (tone === "orange") return "border-orange-200 bg-orange-50";
  return "border-yellow-200 bg-yellow-50";
}

function badgeTone(tone) {
  if (tone === "red") return "bg-red-600";
  if (tone === "orange") return "bg-orange-500";
  return "bg-amber-500";
}

export default function AccuracyDetectionCard({ items }) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-1 h-6 w-6 text-red-500" />
        <div>
          <h2 className="text-2xl font-semibold">Accuracy &amp; Hallucination Detection</h2>
          <p className="mt-1 text-xl text-slate-500">
            Incorrect claims flagged across AI platforms
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <div key={`${item.platform}-${item.product}`} className={`rounded-2xl border p-4 ${boxTone(item.tone)}`}>
            <div className="flex flex-wrap items-center gap-3">
              <span className={`rounded-xl px-3 py-1 text-sm font-semibold text-white ${badgeTone(item.tone)}`}>
                {item.severity}
              </span>
              <p className="text-lg font-medium">
                {item.platform} — {item.product}
              </p>
            </div>

            <p className="mt-3 text-lg">{item.issue}</p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl bg-white/70 px-4 py-3">
                <p className="text-sm text-slate-500">AI Response:</p>
                <p className="mt-1 text-lg font-semibold text-red-600">{item.aiResponse}</p>
              </div>

              <div className="rounded-xl bg-white/70 px-4 py-3">
                <p className="text-sm text-slate-500">Verified Data:</p>
                <p className="mt-1 text-lg font-semibold text-emerald-600">{item.verified}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}