import Card from "../ui/Card";

const severityStyles = {
  low: {
    badge: "bg-yellow-600 text-white",
    panel: "bg-yellow-50 border-l-4 border-yellow-500",
  },
  medium: {
    badge: "bg-orange-500 text-white",
    panel: "bg-orange-50 border-l-4 border-orange-500",
  },
  high: {
    badge: "bg-red-600 text-white",
    panel: "bg-red-50 border-l-4 border-red-500",
  },
};

export default function AccuracyDetectionCard({ items }) {
  return (
    <Card>
      <h2 className="text-3xl font-semibold">Accuracy & Hallucination Detection</h2>
      <p className="mt-2 text-xl text-slate-500">Incorrect claims flagged across AI platforms</p>

      <div className="mt-8 space-y-5">
        {items.map((item, index) => {
          const styles = severityStyles[item.severity];

          return (
            <div key={index} className={`rounded-2xl p-5 ${styles.panel}`}>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className={`rounded-full px-4 py-1 text-base font-semibold ${styles.badge}`}>
                  {item.severity}
                </span>
                <p className="text-2xl font-medium">
                  {item.platform} — {item.product}
                </p>
              </div>

              <p className="text-2xl">{item.issue}</p>

              <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white p-4">
                  <p className="text-lg text-slate-500">AI Response:</p>
                  <p className="mt-2 text-3xl font-semibold text-red-600">{item.aiResponse}</p>
                </div>

                <div className="rounded-2xl bg-white p-4">
                  <p className="text-lg text-slate-500">Verified Data:</p>
                  <p className="mt-2 text-3xl font-semibold text-green-600">
                    {item.verifiedData}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}