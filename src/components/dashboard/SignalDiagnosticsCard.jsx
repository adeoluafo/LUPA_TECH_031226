import Card from "../ui/Card";
import ProgressBar from "../ui/ProgressBar";

export default function SignalDiagnosticsCard({ items, insight }) {
  return (
    <Card>
      <h2 className="text-3xl font-semibold">Signal Diagnostics</h2>
      <p className="mt-2 text-xl text-slate-500">What influences AI responses</p>

      <div className="mt-8 space-y-6">
        {items.map((item) => (
          <div key={item.label}>
            <div className="flex items-center justify-between">
              <p className="text-2xl">{item.label}</p>
              <p className="text-2xl font-bold">{item.value}%</p>
            </div>
            <ProgressBar value={item.value} color={item.color} />
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-blue-50 p-5 text-lg text-blue-900">
        <span className="font-semibold">Insight:</span> {insight}
      </div>
    </Card>
  );
}
