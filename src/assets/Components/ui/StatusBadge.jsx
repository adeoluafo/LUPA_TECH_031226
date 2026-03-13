export default function StatusBadge({ text, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${className}`}
    >
      {text}
    </span>
  );
}