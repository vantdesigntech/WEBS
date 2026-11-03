import React from 'react';

interface TechIllustrationProps {
  type: 'rig' | 'gpu' | 'cooler' | 'core' | 'chassis' | 'terminal';
  className?: string;
}

export const TechIllustration: React.FC<TechIllustrationProps> = ({ type, className = '' }) => {
  switch (type) {
    case 'rig':
      return (
        <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="30" y="20" width="260" height="240" stroke="#ff5500" strokeWidth="1.5" strokeDasharray="6 3" />
          <rect x="40" y="30" width="240" height="220" fill="#0c0e12" stroke="#2a303c" strokeWidth="1" />
          {/* Internal Chamber */}
          <rect x="60" y="50" width="140" height="180" fill="#07090b" stroke="#1d222b" />
          {/* 3x Radiator Fans */}
          <circle cx="130" cy="85" r="24" stroke="#ff5500" strokeWidth="1" opacity="0.8" />
          <circle cx="130" cy="85" r="10" fill="#ff5500" opacity="0.2" />
          <circle cx="130" cy="140" r="24" stroke="#4a5568" strokeWidth="1" />
          <circle cx="130" cy="195" r="24" stroke="#4a5568" strokeWidth="1" />
          {/* GPU horizontal unit */}
          <rect x="70" y="150" width="120" height="28" fill="#151921" stroke="#ff5500" strokeWidth="1" />
          <path d="M75 164 H185" stroke="#ff5500" strokeWidth="0.8" strokeDasharray="3 3" />
          <text x="82" y="168" fill="#ff5500" fontSize="8" fontFamily="monospace" letterSpacing="1">MULE//RTX-5090T</text>
          {/* Liquid cooling tubes with neon nodes */}
          <path d="M130 85 C190 85, 190 150, 150 150" stroke="#00e5ff" strokeWidth="2.5" fill="none" opacity="0.7" />
          <path d="M110 85 C50 85, 50 150, 90 150" stroke="#00e5ff" strokeWidth="2.5" fill="none" opacity="0.7" />
          {/* Side PSU and Cable Harness */}
          <rect x="210" y="50" width="60" height="90" fill="#10131a" stroke="#2d3748" />
          <text x="215" y="75" fill="#a0aec0" fontSize="7" fontFamily="monospace">1650W TITAN</text>
          <line x1="215" y1="90" x2="260" y2="90" stroke="#ff5500" strokeWidth="2" />
          {/* Target reticle corners */}
          <path d="M25 35 V15 H45" stroke="#ff5500" strokeWidth="2" fill="none" />
          <path d="M295 35 V15 H275" stroke="#ff5500" strokeWidth="2" fill="none" />
          <path d="M25 245 V265 H45" stroke="#ff5500" strokeWidth="2" fill="none" />
          <path d="M295 245 V265 H275" stroke="#ff5500" strokeWidth="2" fill="none" />
          {/* Industrial label */}
          <text x="45" y="260" fill="#718096" fontSize="7" fontFamily="monospace">SEC-4 // STANAG HULL 24.6KG</text>
          <text x="200" y="260" fill="#ff5500" fontSize="7" fontFamily="monospace">CRYOLITE-OK</text>
        </svg>
      );

    case 'gpu':
      return (
        <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="35" y="60" width="250" height="160" rx="4" fill="#0d1017" stroke="#2d3748" strokeWidth="1.5" />
          {/* Heat dissipation fins */}
          <g opacity="0.3">
            {Array.from({ length: 24 }).map((_, i) => (
              <line key={i} x1={55 + i * 9} y1="75" x2={55 + i * 9} y2="205" stroke="#a0aec0" strokeWidth="1.5" />
            ))}
          </g>
          {/* Triple High-Velocity Fans */}
          <circle cx="95" cy="140" r="34" fill="#07090d" stroke="#ff5500" strokeWidth="1.5" />
          <circle cx="160" cy="140" r="34" fill="#07090d" stroke="#a0aec0" strokeWidth="1.2" />
          <circle cx="225" cy="140" r="34" fill="#07090d" stroke="#a0aec0" strokeWidth="1.2" />
          {/* Rotor blades */}
          <circle cx="95" cy="140" r="10" fill="#ff5500" opacity="0.3" />
          <circle cx="160" cy="140" r="10" fill="#ff5500" opacity="0.3" />
          <circle cx="225" cy="140" r="10" fill="#ff5500" opacity="0.3" />
          {/* Gold contact fingers (PCIe 6.0) */}
          <rect x="70" y="220" width="180" height="12" fill="#d97706" />
          {Array.from({ length: 22 }).map((_, i) => (
            <line key={i} x1={75 + i * 8} y1="220" x2={75 + i * 8} y2="232" stroke="#000" strokeWidth="1.5" />
          ))}
          {/* Dual 12V-2x6 Power connectors */}
          <rect x="230" y="46" width="40" height="14" fill="#1a202c" stroke="#ff5500" strokeWidth="1" />
          <text x="235" y="56" fill="#ff5500" fontSize="7" fontFamily="monospace">650W PWR</text>
          {/* Cyberpunk branding badge */}
          <rect x="45" y="70" width="100" height="16" fill="#ff5500" />
          <text x="50" y="81" fill="#000" fontSize="8" fontWeight="bold" fontFamily="monospace">STRAND TITAN 32GB</text>
        </svg>
      );

    case 'cooler':
      return (
        <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Triple 420 Radiator */}
          <rect x="30" y="50" width="260" height="110" fill="#0d1117" stroke="#2d3748" strokeWidth="1.5" />
          <circle cx="75" cy="105" r="36" stroke="#00e5ff" strokeWidth="1" strokeDasharray="4 2" />
          <circle cx="160" cy="105" r="36" stroke="#00e5ff" strokeWidth="1" strokeDasharray="4 2" />
          <circle cx="245" cy="105" r="36" stroke="#00e5ff" strokeWidth="1" strokeDasharray="4 2" />
          {/* Heavy braided tubes with neon coolant */}
          <path d="M75 160 C75 220, 130 230, 140 230" stroke="#00e5ff" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
          <path d="M245 160 C245 220, 190 230, 180 230" stroke="#ff5500" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
          {/* CPU Coldplate & LCD block */}
          <rect x="135" y="200" width="50" height="50" rx="6" fill="#161b22" stroke="#ff5500" strokeWidth="1.5" />
          <circle cx="160" cy="225" r="14" fill="#05070a" stroke="#00e5ff" strokeWidth="1" />
          <text x="151" y="228" fill="#00e5ff" fontSize="9" fontFamily="monospace" fontWeight="bold">-35°</text>
          <text x="40" y="42" fill="#a0aec0" fontSize="8" fontFamily="monospace">EXO-CRYO 420 // MAG-LEV 750W TDP</text>
        </svg>
      );

    case 'core':
      return (
        <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Gold Socket substrate */}
          <rect x="70" y="40" width="180" height="180" rx="4" fill="#111827" stroke="#d97706" strokeWidth="2" />
          {/* Pin grid array pattern */}
          <g opacity="0.25">
            {Array.from({ length: 8 }).map((_, r) => (
              Array.from({ length: 8 }).map((__, c) => (
                <rect key={`${r}-${c}`} x={90 + c * 17} y={60 + r * 17} width="9" height="9" fill="#e2e8f0" />
              ))
            ))}
          </g>
          {/* Integrated Heat Spreader (IHS) */}
          <rect x="95" y="65" width="130" height="130" fill="#1f2937" stroke="#4b5563" strokeWidth="1.5" />
          {/* Laser etched die markings */}
          <path d="M105 75 H215" stroke="#ff5500" strokeWidth="1" />
          <text x="110" y="95" fill="#ff5500" fontSize="10" fontWeight="bold" fontFamily="monospace">M.U.L.E. STRAND</text>
          <text x="110" y="112" fill="#e2e8f0" fontSize="8" fontFamily="monospace">128-THREAD HYPERCORE</text>
          <text x="110" y="126" fill="#718096" fontSize="7" fontFamily="monospace">1.8NM EUV // 5.8GHZ ALL-CORE</text>
          {/* QR/DataMatrix simulation */}
          <rect x="185" y="145" width="30" height="30" fill="#000" stroke="#4a5568" />
          <rect x="190" y="150" width="8" height="8" fill="#fff" />
          <rect x="202" y="150" width="8" height="8" fill="#fff" />
          <rect x="190" y="162" width="8" height="8" fill="#fff" />
          <text x="75" y="245" fill="#d97706" fontSize="8" fontFamily="monospace">SOCKET LGA-9200 DIRECT DIE</text>
        </svg>
      );

    case 'chassis':
      return (
        <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Military Case Hull with ribbing */}
          <rect x="40" y="30" width="240" height="210" rx="8" fill="#141820" stroke="#4b5563" strokeWidth="2" />
          {/* Ergonomic handle on top */}
          <rect x="110" y="15" width="100" height="15" rx="3" fill="#0b0e14" stroke="#ff5500" strokeWidth="1.5" />
          {/* Reinforced Corner Bumpers */}
          <rect x="35" y="25" width="25" height="25" fill="#000" stroke="#ff5500" />
          <rect x="260" y="25" width="25" height="25" fill="#000" stroke="#ff5500" />
          <rect x="35" y="220" width="25" height="25" fill="#000" stroke="#ff5500" />
          <rect x="260" y="220" width="25" height="25" fill="#000" stroke="#ff5500" />
          {/* Stenciled cargo markings */}
          <text x="75" y="80" fill="#ff5500" fontSize="16" fontWeight="900" fontFamily="monospace" letterSpacing="3">M.U.L.E.</text>
          <text x="75" y="100" fill="#a0aec0" fontSize="9" fontFamily="monospace">BRIDGES // CARGO CLASS 09</text>
          <rect x="75" y="115" width="170" height="80" fill="#0d1117" stroke="#2d3748" strokeDasharray="4 2" />
          <text x="90" y="145" fill="#718096" fontSize="8" fontFamily="monospace">TIME-FALL HERMETIC SEAL</text>
          <text x="90" y="160" fill="#00e5ff" fontSize="8" fontFamily="monospace">IP68 / CHIRAL DAMPENED</text>
          {/* Barcode */}
          <g transform="translate(75, 205)">
            <rect x="0" y="0" width="2" height="18" fill="#e2e8f0" />
            <rect x="5" y="0" width="4" height="18" fill="#e2e8f0" />
            <rect x="12" y="0" width="1" height="18" fill="#e2e8f0" />
            <rect x="16" y="0" width="5" height="18" fill="#e2e8f0" />
            <rect x="25" y="0" width="2" height="18" fill="#e2e8f0" />
            <rect x="30" y="0" width="6" height="18" fill="#e2e8f0" />
            <rect x="40" y="0" width="3" height="18" fill="#e2e8f0" />
            <rect x="46" y="0" width="2" height="18" fill="#e2e8f0" />
            <rect x="52" y="0" width="4" height="18" fill="#e2e8f0" />
            <text x="65" y="14" fill="#a0aec0" fontSize="7" fontFamily="monospace">MLE-CARGO-99</text>
          </g>
        </svg>
      );

    case 'terminal':
      return (
        <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="40" y="40" width="240" height="170" rx="6" fill="#0f131a" stroke="#374151" strokeWidth="2" />
          {/* Screen area with CRT lines */}
          <rect x="55" y="55" width="210" height="120" fill="#05070a" stroke="#ff5500" strokeWidth="1" />
          <line x1="55" y1="80" x2="265" y2="80" stroke="#1f2937" />
          <line x1="55" y1="110" x2="265" y2="110" stroke="#1f2937" />
          <line x1="55" y1="140" x2="265" y2="140" stroke="#1f2937" />
          {/* Terminal Code lines */}
          <text x="65" y="73" fill="#00e5ff" fontSize="7" fontFamily="monospace">RECON RADAR // LIVE TELEMETRY</text>
          <text x="65" y="98" fill="#ff5500" fontSize="8" fontFamily="monospace">&gt; CHIRAL STRAND DETECTED: 0.015</text>
          <text x="65" y="125" fill="#a0aec0" fontSize="7" fontFamily="monospace">&gt; 300Wh LiFePO4 CELLS: 98% READY</text>
          {/* Antenna and Mil-spec dials */}
          <line x1="250" y1="40" x2="275" y2="15" stroke="#ff5500" strokeWidth="2" strokeLinecap="round" />
          <circle cx="275" cy="15" r="3" fill="#ff5500" />
          <rect x="55" y="185" width="60" height="15" fill="#1f2937" />
          <circle cx="70" cy="192" r="4" fill="#ff5500" />
          <circle cx="85" cy="192" r="4" fill="#00e5ff" />
          <circle cx="100" cy="192" r="4" fill="#a0aec0" />
          <text x="130" y="197" fill="#718096" fontSize="7" fontFamily="monospace">OBSIDIAN FIELD-TAC 07</text>
        </svg>
      );
  }
};
