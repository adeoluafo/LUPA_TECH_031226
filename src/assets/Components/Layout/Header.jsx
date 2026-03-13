import StatusBadge from "../ui/StatusBadge";

export default function Header({ data }) {
  return (
    <header className="border-b border-slate-200 bg-white px-6 py-8">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">{data.title}</h1>
          <p className="mt-3 text-2xl text-slate-500">{data.subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="rounded-2xl bg-slate-100 px-6 py-4 text-lg">
              <span className="text-slate-500">Client:</span>{" "}
              <span className="font-semibold">{data.client}</span>
            </div>

            <div className="rounded-2xl bg-slate-100 px-6 py-4 text-lg">
              <span className="text-slate-500">Industry:</span>{" "}
              <span className="font-semibold">{data.industry}</span>
            </div>

            <StatusBadge
              text={data.status}
              className="bg-green-100 text-green-700 text-lg px-6 py-4"
            />

            <div className="rounded-2xl bg-slate-100 px-6 py-4 text-lg">
              <span className="text-slate-500 mr-3">AI Platforms:</span>
              <div className="inline-flex gap-2">
                {data.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="rounded-full border border-slate-300 bg-white px-4 py-1 text-base font-medium"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button className="rounded-2xl bg-[#060826] px-8 py-5 text-lg font-semibold text-white shadow-sm">
          Run New Analysis
        </button>
      </div>
    </header>
  );
}