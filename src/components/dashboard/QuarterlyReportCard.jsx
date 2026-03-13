export default function QuarterlyReportCard() {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 p-8 text-white shadow-sm">
      <h2 className="text-3xl font-semibold">Quarterly Trend Report</h2>
      <p className="mt-2 text-2xl text-white/90">Track score improvements over time</p>

      <button className="mt-8 w-full rounded-2xl bg-white py-4 text-2xl font-medium text-blue-600">
        View Quarterly Report
      </button>
    </div>
  );
}