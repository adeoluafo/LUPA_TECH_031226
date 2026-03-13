import Card from "../ui/Card";

export default function GatewayDataStatusCard({ actions }) {
  return (
    <Card>
      <h2 className="text-3xl font-semibold">Gateway Data Status</h2>
      <p className="mt-2 text-xl text-slate-500">VeriPrompt interventions</p>

      <div className="mt-8 space-y-5">
        {actions.map((action, index) => (
          <div key={action} className="border-b border-slate-200 pb-4 last:border-b-0">
            <div className="flex gap-3">
              <span className="text-green-600 text-2xl">✓</span>
              <div>
                <p className="text-2xl font-medium">{action}</p>
                <p className="text-lg text-slate-500">
                  {index === 0
                    ? "2 days ago"
                    : index === 1
                    ? "3 days ago"
                    : index === 2
                    ? "5 days ago"
                    : "1 week ago"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-8 w-full rounded-2xl border border-slate-300 py-4 text-xl font-medium">
        View All Gateway Actions
      </button>
    </Card>
  );
}