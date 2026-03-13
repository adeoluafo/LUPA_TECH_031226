import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function ProductListItem({ product }) {
  return (
    <div className="flex items-center justify-between py-3 px-4 border border-gray-100 rounded-lg">
      <div>
        <p className="text-sm font-medium text-gray-900">{product.name}</p>
        <p className="text-xs text-gray-400 mt-0.5">{product.category}</p>
      </div>
      {product.verified && (
        <CheckCircle2 className="w-5 h-5 text-green-500" />
      )}
    </div>
  );
}