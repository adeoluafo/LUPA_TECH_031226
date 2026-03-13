// src/components/dashboard/ProfileGatewayCard.jsx

import { Database, CheckCircle2, Settings } from "lucide-react";

function toneClasses(tone) {
  if (tone === "green") return "bg-emerald-50 text-emerald-700";
  if (tone === "blue") return "bg-blue-50 text-blue-700";
  return "bg-slate-50 text-blue-700";
}

export default function ProfileGatewayCard({ data }) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-start gap-3">
          <Database className="mt-1 h-6 w-6 text-blue-600" />
          <div>
            <h2 className="text-2xl font-semibold">Client Profile &amp; Verified Data Gateway</h2>
            <p className="mt-1 text-xl text-slate-500">
              Product data ingestion and AI knowledge feed status
            </p>
          </div>
        </div>

        <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-medium">
          <Settings className="h-4 w-4" />
          Manage Data
        </button>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 text-xl font-semibold">Products Monitored</h3>
          <div className="space-y-3">
            {data.products.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-4"
              >
                <div>
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.segment}</p>
                </div>
                <CheckCircle2 className="h-6 w-6 text-emerald-500" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold">Verified Data Gateway Status</h3>
          <div className="space-y-3">
            {data.gatewayStatus.map((item) => (
              <div key={item.title} className="rounded-2xl bg-slate-50 px-4 py-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-lg font-medium">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.sub}</p>
                  </div>
                  <span className={`rounded-xl px-3 py-1 text-sm font-semibold ${toneClasses(item.tone)}`}>
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}