export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-white border border-slate-200/70 rounded-2xl shadow-soft ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
