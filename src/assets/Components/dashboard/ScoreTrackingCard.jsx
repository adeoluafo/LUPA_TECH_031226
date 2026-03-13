import Card from "../ui/Card";
import ProgressBar from "../ui/ProgressBar";

export default function ScoreTrackingCard({ scores, improvement }) {
  return (
    <Card>
      <h2 className="text-3xl font-semibold">Score Tracking</h2>
      <p className="mt-2 text-xl text-slate-500">Client AI performance metrics</p>

      <div className="mt-8 space-y-7">
        {scores.map((score) => (
          <div key={score.label}>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-medium">{score.label}</p>
              <p className="text-3xl font-bold">{score.value}</p>
            </div>
            <ProgressBar value={score.value} color={score.color} />
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-6">
        <p className="text-3xl font-semibold text-green-600">{improvement.text}</p>
        <p className="mt-2 text-lg text-slate-500">{improvement.subtext}</p>
      </div>
    </Card>
  );
}