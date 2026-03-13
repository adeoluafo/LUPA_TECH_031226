import Card from "../ui/Card";

export default function AIResponseMonitorCard({ responses }) {
  return (
    <Card>
      <h2 className="text-3xl font-semibold">AI Response Monitor</h2>
      <p className="mt-2 text-xl text-slate-500">Latest AI responses from each platform</p>

      <div className="mt-8 space-y-8">
        {responses.map((response) => (
          <div key={response.platform} className="border-l-4 border-blue-500 pl-6">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-3xl font-semibold">{response.platform}</h3>
              <span className="rounded-full border border-slate-300 px-4 py-1 text-lg">
                Prompt: "{response.prompt}"
              </span>
            </div>

            <div className="mt-4 space-y-2">
              {response.items.map((item, index) => (
                <p
                  key={item}
                  className={`text-2xl ${index === 2 ? "text-blue-600 font-medium" : ""}`}
                >
                  #{index + 1} {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
