const pulseStyle = `
  @keyframes wpDrawPulse {
    0%   { stroke-dashoffset: 300; opacity: 0; }
    10%  { opacity: 1; }
    70%  { stroke-dashoffset: 0; opacity: 1; }
    90%  { stroke-dashoffset: 0; opacity: 0; }
    100% { stroke-dashoffset: 0; opacity: 0; }
  }
  .wp-pulse-path {
    fill: none;
    stroke: url(#wpPulseGrad);
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
    animation: wpDrawPulse 1.8s ease-in-out infinite;
  }
`;

const WorkPulseLoader = () => {
  return (
    <>
      <style>{pulseStyle}</style>
      <div className="bg-background flex h-full min-h-svh w-full items-center justify-center">
        <svg
          viewBox="0 0 200 60"
          xmlns="http://www.w3.org/2000/svg"
          className="w-40"
          aria-label="Loading"
          role="img"
        >
          <defs>
            <linearGradient id="wpPulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#378ADD" />
              <stop offset="100%" stopColor="#1D9E75" />
            </linearGradient>
          </defs>

          <path
            className="wp-pulse-path"
            d="M10,30 L60,30 L72,30 L80,10 L88,50 L96,20 L104,30 L116,30 L124,22 L132,38 L138,30 L190,30"
          />
        </svg>
      </div>
    </>
  );
};

export default WorkPulseLoader;
