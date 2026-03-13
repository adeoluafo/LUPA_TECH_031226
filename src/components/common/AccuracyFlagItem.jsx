import React from "react";

const severityConfig = {
  high: { bg: "bg-red-50", border: "border-l-red-500", badge: "bg-red-600 text-white" },
  medium: { bg: "bg-orange-50", border: "border-l-orange-400", badge: "bg-orange-500 text-white" },
  low: { bg: "bg-yellow-50", border: "border-l-yellow-400", badge: "bg-green-600 text-white" },
};

export default function AccuracyFlagItem({ flag }) {
  const config = severityConfig[flag.severity];

  return (
    <div className={`${config.bg} ${config.border} border-l-4 rounded-lg p-4`}>
      <div className="flex items-center gap-2 mb-1">
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${config.badge}`}>
          {flag.severity}
        </span>
        <span className="text-sm font-semibold text-gray-900">{flag.platform}</span>
        <span className="text-sm text-gray-500">— {flag.product}</span>
      </div>
      <p className="text-sm text-gray-600 mb-3">{flag.issue}</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-gray-400 mb-0.5">AI Response:</p>
          <p className="text-sm font-medium text-red-600">{flag.aiResponse}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-0.5">Verified Data:</p>
          <p className="text-sm font-medium text-green-700">{flag.verifiedData}</p>
        </div>
      </div>
    </div>
  );
}