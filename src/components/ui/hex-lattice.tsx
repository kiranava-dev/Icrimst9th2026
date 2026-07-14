export function HexLattice() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.07]" aria-hidden="true">
      <svg
        className="absolute -inset-24 w-[calc(100%+12rem)] h-[calc(100%+12rem)]"
        style={{ animation: 'hex-drift 40s linear infinite alternate' }}
      >
        <defs>
          <pattern id="hexPattern" width="60" height="104" patternUnits="userSpaceOnUse" patternTransform="scale(1)">
            <path
              d="M30 0 L60 17.3 L60 52 L30 69.3 L0 52 L0 17.3 Z"
              fill="none"
              stroke="#00d4ff"
              strokeWidth="1"
            />
            <path
              d="M30 69.3 L60 86.6 L60 104 L30 121.3 L0 104 L0 86.6 Z"
              fill="none"
              stroke="#a78bfa"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexPattern)" />
      </svg>
      {/* coordinate grid, faint */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          opacity: 0.35,
          animation: 'grid-pan 24s linear infinite',
        }}
      />
    </div>
  );
}
