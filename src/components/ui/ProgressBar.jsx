export default function ProgressBar({ value, color = "bg-blue-500" }) {
  return (
    <div className="mt-2 h-3 w-full rounded-full bg-slate-200 overflow-hidden">
      <div
        className={`h-full rounded-full ${color}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}