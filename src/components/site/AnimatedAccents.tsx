export function AnimatedLightbulb() {
  return (
    <div className="w-32 h-32 md:w-40 md:h-40">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="bulbGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="var(--brand-green)" />
            <stop offset="100%" stopColor="var(--brand-blue)" />
          </linearGradient>
        </defs>
        {/* Glow rays */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <line
            key={angle}
            x1="100"
            y1="100"
            x2={100 + 70 * Math.cos((angle * Math.PI) / 180)}
            y2={100 + 70 * Math.sin((angle * Math.PI) / 180)}
            stroke="var(--brand-blue)"
            strokeWidth="4"
            strokeLinecap="round"
            className="bulb-ray"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
        {/* Bulb */}
        <path
          d="M70,100 C70,65 90,45 100,45 C110,45 130,65 130,100 C130,125 120,135 115,140 L85,140 C80,135 70,125 70,100 Z"
          fill="url(#bulbGrad)"
          className="bulb-body"
        />
        {/* Base */}
        <rect x="85" y="142" width="30" height="8" rx="2" fill="var(--brand-grey)" />
        <rect x="88" y="152" width="24" height="8" rx="2" fill="var(--brand-grey)" />
        <style>{`
          @keyframes bulbRay {
            0%, 100% { opacity: 0.25; transform: scale(0.85); }
            50% { opacity: 1; transform: scale(1.1); }
          }
          .bulb-ray {
            transform-origin: 100px 100px;
            animation: bulbRay 2s ease-in-out infinite;
          }
          @keyframes bulbPulse {
            0%, 100% { opacity: 0.9; }
            50% { opacity: 1; }
          }
          .bulb-body {
            animation: bulbPulse 2s ease-in-out infinite;
          }
        `}</style>
      </svg>
    </div>
  );
}

export function AnimatedPeopleGrowth() {
  return (
    <div className="w-32 h-32 md:w-40 md:h-40">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="peopleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--brand-blue)" />
            <stop offset="100%" stopColor="var(--brand-green)" />
          </linearGradient>
        </defs>
        {/* Upward arrow path */}
        <path
          d="M40,160 Q40,80 100,60 Q160,80 160,160"
          fill="none"
          stroke="var(--brand-beige)"
          strokeWidth="3"
          strokeDasharray="8 6"
        />
        {/* Person 1 */}
        <g className="people-node" style={{ animationDelay: "0s" }}>
          <circle cx="60" cy="150" r="16" fill="var(--brand-green)" />
          <path d="M40,190 L60,166 L80,190 Z" fill="var(--brand-green)" />
        </g>
        {/* Person 2 */}
        <g className="people-node" style={{ animationDelay: "0.4s" }}>
          <circle cx="100" cy="110" r="18" fill="var(--brand-blue)" />
          <path d="M78,155 L100,128 L122,155 Z" fill="var(--brand-blue)" />
        </g>
        {/* Person 3 */}
        <g className="people-node" style={{ animationDelay: "0.8s" }}>
          <circle cx="140" cy="150" r="16" fill="var(--brand-green)" />
          <path d="M120,190 L140,166 L160,190 Z" fill="var(--brand-green)" />
        </g>
        {/* Rising arrow */}
        <path
          d="M100,40 L90,60 L110,60 Z"
          fill="url(#peopleGrad)"
          className="people-arrow"
        />
        <style>{`
          @keyframes peopleNode {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .people-node {
            animation: peopleNode 3s ease-in-out infinite;
            transform-box: fill-box;
            transform-origin: center bottom;
          }
          @keyframes peopleArrow {
            0%, 100% { transform: translateY(0); opacity: 0.8; }
            50% { transform: translateY(-6px); opacity: 1; }
          }
          .people-arrow {
            animation: peopleArrow 2s ease-in-out infinite;
            transform-box: fill-box;
            transform-origin: center bottom;
          }
        `}</style>
      </svg>
    </div>
  );
}

export function AnimatedNetwork() {
  return (
    <div className="w-32 h-32 md:w-40 md:h-40">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Connection lines */}
        <line x1="100" y1="60" x2="60" y2="120" stroke="var(--brand-beige)" strokeWidth="2" />
        <line x1="100" y1="60" x2="140" y2="120" stroke="var(--brand-beige)" strokeWidth="2" />
        <line x1="60" y1="120" x2="140" y2="120" stroke="var(--brand-beige)" strokeWidth="2" />
        <line x1="100" y1="60" x2="100" y2="140" stroke="var(--brand-beige)" strokeWidth="2" />
        <line x1="60" y1="120" x2="100" y2="140" stroke="var(--brand-beige)" strokeWidth="2" />
        <line x1="140" y1="120" x2="100" y2="140" stroke="var(--brand-beige)" strokeWidth="2" />
        {/* Nodes */}
        <circle cx="100" cy="60" r="14" fill="var(--brand-blue)" className="net-node" style={{ animationDelay: "0s" }} />
        <circle cx="60" cy="120" r="12" fill="var(--brand-green)" className="net-node" style={{ animationDelay: "0.2s" }} />
        <circle cx="140" cy="120" r="12" fill="var(--brand-green)" className="net-node" style={{ animationDelay: "0.4s" }} />
        <circle cx="100" cy="140" r="14" fill="var(--brand-grey)" className="net-node" style={{ animationDelay: "0.6s" }} />
        {/* Pulse rings */}
        <circle cx="100" cy="100" r="60" fill="none" stroke="var(--brand-blue)" strokeWidth="2" opacity="0.2" className="net-ring" />
        <circle cx="100" cy="100" r="80" fill="none" stroke="var(--brand-green)" strokeWidth="2" opacity="0.15" className="net-ring" style={{ animationDelay: "0.5s" }} />
        <style>{`
          @keyframes netPulse {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.15); opacity: 0.4; }
          }
          .net-node {
            animation: netPulse 2.5s ease-in-out infinite;
            transform-box: fill-box;
            transform-origin: center;
          }
          @keyframes netRing {
            0% { transform: scale(0.8); opacity: 0.3; }
            100% { transform: scale(1.3); opacity: 0; }
          }
          .net-ring {
            transform-origin: 100px 100px;
            animation: netRing 3s ease-out infinite;
          }
        `}</style>
      </svg>
    </div>
  );
}

export function AnimatedRisingChart() {
  return (
    <div className="w-32 h-32 md:w-40 md:h-40">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Bars */}
        <rect x="30" y="120" width="24" height="50" rx="4" fill="var(--brand-green)" className="chart-bar" style={{ animationDelay: "0s" }} />
        <rect x="66" y="90" width="24" height="80" rx="4" fill="var(--brand-blue)" className="chart-bar" style={{ animationDelay: "0.3s" }} />
        <rect x="102" y="60" width="24" height="110" rx="4" fill="var(--brand-green)" className="chart-bar" style={{ animationDelay: "0.6s" }} />
        <rect x="138" y="40" width="24" height="130" rx="4" fill="var(--brand-blue)" className="chart-bar" style={{ animationDelay: "0.9s" }} />
        {/* Trend line */}
        <path
          d="M42,115 L78,85 L114,55 L150,35"
          fill="none"
          stroke="var(--brand-grey)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="chart-trend"
        />
        <style>{`
          @keyframes chartBar {
            0%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(1.08); }
          }
          .chart-bar {
            transform-origin: bottom;
            animation: chartBar 2s ease-in-out infinite;
            transform-box: fill-box;
          }
          @keyframes chartTrend {
            0% { stroke-dashoffset: 200; }
            100% { stroke-dashoffset: 0; }
          }
          .chart-trend {
            stroke-dasharray: 200;
            animation: chartTrend 3s ease-out infinite;
          }
        `}</style>
      </svg>
    </div>
  );
}

export function AnimatedCalendar() {
  return (
    <div className="w-32 h-32 md:w-40 md:h-40">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Calendar body */}
        <rect x="30" y="50" width="140" height="130" rx="12" fill="white" stroke="var(--brand-green)" strokeWidth="4" />
        <rect x="30" y="50" width="140" height="40" rx="12" fill="var(--brand-green)" />
        {/* Hanging rings */}
        <rect x="60" y="30" width="10" height="30" rx="5" fill="var(--brand-grey)" />
        <rect x="130" y="30" width="10" height="30" rx="5" fill="var(--brand-grey)" />
        {/* Date dots that pulse */}
        <circle cx="60" cy="115" r="6" fill="var(--brand-blue)" className="cal-dot" style={{ animationDelay: "0s" }} />
        <circle cx="100" cy="115" r="6" fill="var(--brand-beige)" className="cal-dot" style={{ animationDelay: "0.2s" }} />
        <circle cx="140" cy="115" r="6" fill="var(--brand-blue)" className="cal-dot" style={{ animationDelay: "0.4s" }} />
        <circle cx="60" cy="145" r="6" fill="var(--brand-beige)" className="cal-dot" style={{ animationDelay: "0.6s" }} />
        <circle cx="100" cy="145" r="6" fill="var(--brand-green)" className="cal-dot" style={{ animationDelay: "0.8s" }} />
        <circle cx="140" cy="145" r="6" fill="var(--brand-beige)" className="cal-dot" style={{ animationDelay: "1s" }} />
        {/* Highlighted event marker */}
        <circle cx="100" cy="115" r="16" fill="none" stroke="var(--brand-green)" strokeWidth="2" className="cal-ring" />
        <style>{`
          @keyframes calDot {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.4); opacity: 1; }
          }
          .cal-dot {
            animation: calDot 2s ease-in-out infinite;
            transform-box: fill-box;
            transform-origin: center;
          }
          @keyframes calRing {
            0% { transform: scale(0.8); opacity: 0.6; }
            100% { transform: scale(1.6); opacity: 0; }
          }
          .cal-ring {
            transform-origin: 100px 115px;
            animation: calRing 2s ease-out infinite;
          }
        `}</style>
      </svg>
    </div>
  );
}

export function AnimatedDisc() {
  return (
    <div className="w-32 h-32 md:w-40 md:h-40">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Orbiting circles */}
        <circle cx="100" cy="100" r="70" fill="none" stroke="var(--brand-beige)" strokeWidth="2" strokeDasharray="8 8" className="disc-orbit" />
        <circle cx="100" cy="100" r="50" fill="none" stroke="var(--brand-green)" strokeWidth="2" opacity="0.4" className="disc-orbit" style={{ animationDirection: "reverse", animationDuration: "10s" }} />
        {/* D-I-S-C nodes */}
        <g className="disc-node" style={{ animationDelay: "0s" }}>
          <circle cx="100" cy="30" r="18" fill="#E4572E" />
          <text x="100" y="36" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">D</text>
        </g>
        <g className="disc-node" style={{ animationDelay: "0.5s" }}>
          <circle cx="170" cy="100" r="18" fill="#F2B134" />
          <text x="170" y="106" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">I</text>
        </g>
        <g className="disc-node" style={{ animationDelay: "1s" }}>
          <circle cx="100" cy="170" r="18" fill="#4C9F70" />
          <text x="100" y="176" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">S</text>
        </g>
        <g className="disc-node" style={{ animationDelay: "1.5s" }}>
          <circle cx="30" cy="100" r="18" fill="#3B7BB8" />
          <text x="30" y="106" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">C</text>
        </g>
        {/* Center */}
        <circle cx="100" cy="100" r="20" fill="var(--brand-blue)" className="disc-center" />
        <style>{`
          @keyframes discOrbit {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .disc-orbit {
            transform-origin: 100px 100px;
            animation: discOrbit 15s linear infinite;
          }
          @keyframes discNode {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.15); }
          }
          .disc-node {
            animation: discNode 2s ease-in-out infinite;
            transform-box: fill-box;
            transform-origin: center;
          }
          @keyframes discCenter {
            0%, 100% { opacity: 0.9; }
            50% { opacity: 1; }
          }
          .disc-center {
            animation: discCenter 2s ease-in-out infinite;
          }
        `}</style>
      </svg>
    </div>
  );
}

export function AnimatedMessage() {
  return (
    <div className="w-32 h-32 md:w-40 md:h-40">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Envelope */}
        <rect x="30" y="60" width="140" height="90" rx="10" fill="white" stroke="var(--brand-green)" strokeWidth="4" />
        <path d="M30,70 L100,120 L170,70" fill="none" stroke="var(--brand-green)" strokeWidth="4" strokeLinejoin="round" />
        {/* Floating message dots */}
        <circle cx="70" cy="45" r="5" fill="var(--brand-blue)" className="msg-dot" style={{ animationDelay: "0s" }} />
        <circle cx="100" cy="35" r="5" fill="var(--brand-green)" className="msg-dot" style={{ animationDelay: "0.3s" }} />
        <circle cx="130" cy="45" r="5" fill="var(--brand-blue)" className="msg-dot" style={{ animationDelay: "0.6s" }} />
        {/* Notification ring */}
        <circle cx="160" cy="60" r="0" fill="var(--brand-blue)" className="msg-notify" />
        <style>{`
          @keyframes msgDot {
            0%, 100% { transform: translateY(0); opacity: 0.6; }
            50% { transform: translateY(-10px); opacity: 1; }
          }
          .msg-dot {
            animation: msgDot 2s ease-in-out infinite;
            transform-box: fill-box;
            transform-origin: center;
          }
          @keyframes msgNotify {
            0% { r: 0; opacity: 1; }
            100% { r: 30; opacity: 0; }
          }
          .msg-notify {
            animation: msgNotify 2s ease-out infinite;
          }
        `}</style>
      </svg>
    </div>
  );
}
