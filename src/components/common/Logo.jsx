const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="url(#logoGrad)" />
        <path
          d="M6 18l4-6 4 8 4-10 4 6 4-4"
          stroke="#fff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="logoGrad"
            x1="0"
            y1="0"
            x2="32"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-[18px] font-bold tracking-tight text-[#1e1b4b]">
        Work<span className="text-indigo-500">Pulse</span>
      </span>
    </div>
  );
};

export default Logo;
