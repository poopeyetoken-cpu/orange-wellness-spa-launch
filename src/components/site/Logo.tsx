export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 2c3 6 8 8 14 8-6 0-11 2-14 8-3-6-8-8-14-8 6 0 11-2 14-8z"
          fill="currentColor"
          opacity="0.9"
        />
        <circle cx="16" cy="22" r="2.2" fill="currentColor" />
      </svg>
      <span className="whitespace-nowrap font-display text-fluid-lg tracking-wide leading-none">
        My Spa
        <span className="opacity-70 italic"> Ayurvedic Hub</span>
      </span>
    </span>
  );
}

