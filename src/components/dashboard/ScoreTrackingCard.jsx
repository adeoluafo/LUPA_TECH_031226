// src/components/dashboard/ScoreTrackingCard.jsx

export default function ScoreTrackingCard({ scores }) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-7">
      <h2 className="text-2xl font-semibold">Score Tracking</h2>
      <p className="mt-1 text-xl text-slate-500">Client AI performance metrics</p>

      <div className="mt-8 space-y-6">
        {scores.map((item) => (
          <div key={item.label}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-lg font-medium">{item.label}</span>
              <span className="text-3xl font-bold">{item.value}</span>
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

      <div className="mt-8 rounded-2xl bg-emerald-50 px-4 py-4">
        <p className="text-xl font-semibold text-emerald-700">↗ +12% improvement</p>
        <p className="mt-1 text-sm text-slate-500">Since VeriPrompt gateway deployment</p>
      </div>
    </section>
  );
}