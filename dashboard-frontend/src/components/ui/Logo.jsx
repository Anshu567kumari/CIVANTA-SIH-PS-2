export default function Logo({ size = 36, withText = true }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative" style={{ width: size, height: size }}>
        <svg viewBox="0 0 64 64" className="h-full w-full">
          <defs>
            <linearGradient id="lg" x1="0" y1="0" x2="64" y2="64">
              <stop offset="0" stopColor="#4f46e5" />
              <stop offset="1" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="14" fill="url(#lg)" />
          <path
            d="M40 18a14 14 0 1 0 0 28"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="44" cy="32" r="3" fill="white" />
          <circle cx="22" cy="22" r="2.5" fill="white" opacity=".85" />
          <circle cx="22" cy="42" r="2.5" fill="white" opacity=".85" />
        </svg>
      </div>
      {withText && (
        <div className="flex flex-col leading-none">
          <span
            className="font-extrabold tracking-tight text-slate-900"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            CIVANTA
          </span>
          <span className="text-[10px] text-slate-500 tracking-wide">
            Intelligence · Impact
          </span>
        </div>
      )}
    </div>
  );
}
