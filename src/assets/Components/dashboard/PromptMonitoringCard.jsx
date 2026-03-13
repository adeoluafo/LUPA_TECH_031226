import Card from "../ui/Card";

export default function PromptMonitoringCard({ items }) {
  return (
    <Card>
      <h2 className="text-3xl font-semibold">Prompt Monitoring Engine</h2>
      <p className="mt-2 text-xl text-slate-500">
        AI responses tracked across shopping query categories
      </p>

      <div className="mt-8 space-y-5">
        {items.map((item) => (
          <div key={item.query} className="rounded-2xl border border-slate-200 px-5 py-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-base font-medium">
                    {item.tag}
                  </span>
                  <p className="text-2xl font-medium">"{item.query}"</p>
                </div>

                <p className="text-lg text-slate-500">
                  Frequency: {item.frequency} <span className="mx-2">•</span>
                  Capital One appears: {item.appearance} <span className="mx-2">•</span>
                  Avg ranking: {item.ranking}
                </p>
              </div>

              <div className="flex gap-2">
                {["C", "G", "P"].map((letter) => (
                  <div
                    key={letter}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 font-semibold text-blue-600"
                  >
                    {letter}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}