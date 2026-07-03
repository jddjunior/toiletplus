export function Logo({ light = false }: { light?: boolean } = {}) {
  return (
    <span className="flex items-center gap-2">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="17" cy="17" r="17" fill={light ? "#ffffff" : "#0b3347"} />
        <path
          d="M9 20c1.6 1.6 3.2 1.6 4.8 0s3.2-1.6 4.8 0 3.2 1.6 4.8 0"
          stroke={light ? "#0b3347" : "#3fbdd9"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M9 15c1.6 1.6 3.2 1.6 4.8 0s3.2-1.6 4.8 0 3.2 1.6 4.8 0"
          stroke={light ? "#0b3347" : "#ffb020"}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
      <span
        className={`font-display text-lg font-extrabold leading-none tracking-tight ${
          light ? "text-white" : "text-brand-950"
        }`}
      >
        POOLS<span className={light ? "text-sun-300" : "text-brand-500"}>of</span>Pompano
      </span>
    </span>
  );
}
