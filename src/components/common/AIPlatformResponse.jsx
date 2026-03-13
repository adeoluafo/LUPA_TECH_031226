import React from "react";

const platformColors = {
  chatgpt: "border-l-gray-800",
  gemini: "border-l-blue-500",
  perplexity: "border-l-purple-500",
};

const platformNames = {
  chatgpt: "ChatGPT",
  gemini: "Gemini",
  perplexity: "Perplexity",
};

export default function AIPlatformResponse({ platformKey, data }) {
  return (
    <div className={`border-l-4 ${platformColors[platformKey]} pl-4 py-2`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-semibold text-gray-900">{platformNames[platformKey]}</span>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
          Prompt: &ldquo;{data.prompt}&rdquo;
        </span>
      </div>
      <div className="space-y-1">
        {data.results.map((result) => (
          <div key={result.rank} className="flex items-center gap-2 text-sm">
            <span className="text-gray-400 text-xs">#{result.rank}</span>
            <span className={result.isClient ? "text-blue-600 font-medium" : "text-gray-700"}>
              {result.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}