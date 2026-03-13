import Card from "../ui/Card";

export default function ClientProfileCard({ products, gatewayStatus }) {
  return (
    <Card>
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-semibold">Client Profile & Verified Data Gateway</h2>
          <p className="mt-2 text-xl text-slate-500">
            Product data ingestion and AI knowledge feed status
          </p>
        </div>

        <button className="rounded-2xl border border-slate-300 px-5 py-3 font-medium">
          Manage Data
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 text-2xl font-semibold">Products Monitored</h3>
          <div className="space-y-4">
            {products.map((product) => (
              <div
                key={product.name}
                className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4"
              >
                <div>
                  <p className="text-xl font-medium">{product.name}</p>
                  <p className="text-lg text-slate-500">{product.category}</p>
                </div>
                <span className="text-green-600 text-2xl">✓</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-2xl font-semibold">Verified Data Gateway Status</h3>

          <div className="space-y-4">
            <div className="rounded-2xl bg-green-50 px-5 py-5">
              <div className="flex items-center justify-between">
                <p className="text-xl font-medium">{gatewayStatus.dataIngestion.label}</p>
                <span className="rounded-full bg-green-600 px-4 py-1 text-white">
                  {gatewayStatus.dataIngestion.status}
                </span>
              </div>
              <p className="mt-2 text-lg text-slate-500">{gatewayStatus.dataIngestion.updateText}</p>
            </div>

            <div className="rounded-2xl bg-blue-50 px-5 py-5">
              <div className="flex items-center justify-between">
                <p className="text-xl font-medium">{gatewayStatus.knowledgeFeed.label}</p>
                <span className="rounded-full bg-blue-600 px-4 py-1 text-white">
                  {gatewayStatus.knowledgeFeed.status}
                </span>
              </div>
              <p className="mt-2 text-lg text-slate-500">{gatewayStatus.knowledgeFeed.records}</p>
            </div>

            <div className="rounded-2xl bg-slate-50 px-5 py-5 flex items-center justify-between">
              <div>
                <p className="text-xl font-medium">Coverage</p>
                <p className="mt-2 text-lg text-slate-500">{gatewayStatus.coverageText}</p>
              </div>
              <p className="text-4xl font-bold text-blue-600">{gatewayStatus.coverage}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}