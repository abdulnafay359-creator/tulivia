"use client";

import { useRef, useState, useEffect } from "react";

/* ─────────────────────────────────────────────
   TULIVIA – Hero Section
   Fully responsive, self-contained, with 3D flip book
───────────────────────────────────────────── */

/* ── floating confetti dots ── */
const DOTS = [
  { x: 10, y: 15, r: 5, c: "#FF6B6B" },
  { x: 85, y: 10, r: 4, c: "#FFD93D" },
  { x: 20, y: 70, r: 3, c: "#6BCB77" },
  { x: 92, y: 45, r: 6, c: "#4D96FF" },
  { x: 45, y: 90, r: 4, c: "#FF922B" },
  { x: 75, y: 85, r: 3, c: "#CC5DE8" },
];

/* ── star SVG ── */
function StarIcon({ size = 32, color = "#FFD93D" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
}

/* ── heart SVG ── */
function HeartIcon({ size = 22, color = "#FF6B6B" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

/* ── shield icon ── */
function ShieldIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

/* ── brain icon ── */
function BrainIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.04-4.79A2.5 2.5 0 0 1 5 12a2.5 2.5 0 0 1 1-1.99V8.5A2.5 2.5 0 0 1 9.5 2z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.04-4.79A2.5 2.5 0 0 0 19 12a2.5 2.5 0 0 0-1-1.99V8.5A2.5 2.5 0 0 0 14.5 2z" />
    </svg>
  );
}

/* ── love/heart outline icon ── */
function HeartOutlineIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

/* ── Paper Plane SVG ── */
function PaperPlane() {
  return (
    <svg width="64" height="54" viewBox="0 0 64 54" fill="none" className="paper-plane">
      <polygon points="0,54 64,27 0,0 0,21 46,27 0,33" fill="#9B59B6" />
      <polygon points="0,54 16,36 0,33" fill="#7D3C98" />
    </svg>
  );
}

/* ── Cloud SVG ── */
function Cloud({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 60 36" fill="none">
      <ellipse cx="30" cy="28" rx="26" ry="10" fill="#87CEEB" />
      <ellipse cx="20" cy="22" rx="14" ry="12" fill="#B0E0E6" />
      <ellipse cx="38" cy="20" rx="16" ry="13" fill="#ADD8E6" />
      <ellipse cx="30" cy="18" rx="18" ry="14" fill="#E0F3FB" />
    </svg>
  );
}

/* ── Lamp SVG ── */
function DeskLamp() {
  return (
    <svg width="70" height="100" viewBox="0 0 70 100" fill="none">
      <ellipse cx="35" cy="94" rx="25" ry="6" fill="#D4A017" />
      <rect x="30" y="55" width="10" height="42" rx="5" fill="#E8B84B" />
      <line x1="35" y1="55" x2="12" y2="25" stroke="#E8B84B" strokeWidth="5" strokeLinecap="round" />
      <path d="M0 16 Q12 4 24 16 L20 40 Q12 46 4 40 Z" fill="#F5C842" />
      <ellipse cx="12" cy="30" rx="8" ry="5" fill="#FFFAE0" opacity="0.8" />
    </svg>
  );
}

/* ── Girl character SVG ── */
function GirlCharacter() {
  return (
    <svg width="110" height="150" viewBox="0 0 110 150" fill="none">
      <rect x="32" y="70" width="46" height="50" rx="8" fill="#5DADE2" />
      <rect x="36" y="68" width="10" height="18" rx="4" fill="#2E86C1" />
      <rect x="64" y="68" width="10" height="18" rx="4" fill="#2E86C1" />
      <rect x="32" y="88" width="46" height="32" rx="6" fill="#F1948A" />
      <ellipse cx="55" cy="50" rx="24" ry="26" fill="#FDEBD0" />
      <ellipse cx="55" cy="32" rx="24" ry="14" fill="#6E2F00" />
      <ellipse cx="30" cy="42" rx="7" ry="10" fill="#6E2F00" transform="rotate(-15 30 42)" />
      <ellipse cx="80" cy="42" rx="7" ry="10" fill="#6E2F00" transform="rotate(15 80 42)" />
      <circle cx="31" cy="52" r="3.5" fill="#E74C3C" />
      <circle cx="79" cy="52" r="3.5" fill="#E74C3C" />
      <ellipse cx="46" cy="52" rx="4.5" ry="5" fill="white" />
      <ellipse cx="64" cy="52" rx="4.5" ry="5" fill="white" />
      <circle cx="47" cy="54" r="2.5" fill="#2C3E50" />
      <circle cx="65" cy="54" r="2.5" fill="#2C3E50" />
      <path d="M48 62 Q55 68 62 62" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" fill="none" />
      <ellipse cx="40" cy="60" rx="5" ry="3" fill="#F1948A" opacity="0.5" />
      <ellipse cx="70" cy="60" rx="5" ry="3" fill="#F1948A" opacity="0.5" />
      <path d="M76 80 Q95 55 100 40" stroke="#FDEBD0" strokeWidth="10" strokeLinecap="round" fill="none" />
      <rect x="94" y="25" width="7" height="24" rx="3" fill="#F5C842" transform="rotate(20 94 25)" />
      <polygon points="94,46 101,46 97.5,53" fill="#F0A500" transform="rotate(20 97.5 46)" />
      <path d="M36 85 Q18 98 16 110" stroke="#FDEBD0" strokeWidth="10" strokeLinecap="round" fill="none" />
      <rect x="38" y="116" width="12" height="30" rx="6" fill="#2E86C1" />
      <rect x="60" y="116" width="12" height="30" rx="6" fill="#2E86C1" />
      <ellipse cx="44" cy="146" rx="9" ry="5" fill="#2C3E50" />
      <ellipse cx="66" cy="146" rx="9" ry="5" fill="#2C3E50" />
    </svg>
  );
}

/* ── Pencil cup SVG ── */
function PencilCup() {
  return (
    <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
      <path d="M8 25 L12 65 L48 65 L52 25 Z" fill="#F5C842" />
      <path d="M6 23 Q30 17 54 23 L52 27 Q30 21 8 27 Z" fill="#E8B84B" />
      <path d="M24 44 Q30 38 36 44 Q30 50 24 44Z" fill="#E74C3C" opacity="0.7" />
      <rect x="16" y="4" width="5" height="26" rx="2" fill="#E74C3C" />
      <rect x="23" y="2" width="5" height="28" rx="2" fill="#27AE60" />
      <rect x="30" y="3" width="5" height="25" rx="2" fill="#3498DB" />
      <rect x="37" y="5" width="5" height="23" rx="2" fill="#F39C12" />
      <polygon points="16,30 21,30 18.5,37" fill="#FDEBD0" />
      <polygon points="23,30 28,30 25.5,37" fill="#FDEBD0" />
      <polygon points="30,28 35,28 32.5,36" fill="#FDEBD0" />
      <polygon points="37,28 42,28 39.5,36" fill="#FDEBD0" />
    </svg>
  );
}

/* ── Book stack SVG ── */
function BookStack() {
  return (
    <svg width="100" height="70" viewBox="0 0 100 70" fill="none">
      <rect x="5" y="48" width="90" height="18" rx="4" fill="#27AE60" />
      <text x="50" y="60" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">ANIMALS</text>
      <rect x="7" y="32" width="86" height="18" rx="4" fill="#E67E22" />
      <text x="50" y="44" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">ABC FUN</text>
      <rect x="4" y="15" width="92" height="19" rx="4" fill="#8E44AD" />
      <text x="50" y="27" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">MY WORLD</text>
    </svg>
  );
}

/* ── Scattered crayons SVG ── */
function Crayons() {
  return (
    <svg width="180" height="45" viewBox="0 0 180 45" fill="none">
      {[
        { x: 0, y: 15, rot: -30, color: "#9B59B6" },
        { x: 25, y: 28, rot: -15, color: "#E74C3C" },
        { x: 55, y: 8, rot: 10, color: "#27AE60" },
        { x: 85, y: 20, rot: -5, color: "#3498DB" },
        { x: 115, y: 5, rot: 20, color: "#F39C12" },
        { x: 145, y: 25, rot: -20, color: "#E91E63" },
      ].map((c, i) => (
        <g key={i} transform={`translate(${c.x},${c.y}) rotate(${c.rot})`}>
          <rect width="10" height="35" rx="3" fill={c.color} />
          <polygon points="0,35 10,35 5,45" fill={c.color} opacity="0.7" />
          <rect width="10" height="7" rx="2" fill="white" opacity="0.3" />
        </g>
      ))}
    </svg>
  );
}

/* ── Sharpener SVG ── */
function Sharpener() {
  return (
    <svg width="30" height="28" viewBox="0 0 30 28" fill="none">
      <rect x="2" y="4" width="22" height="18" rx="4" fill="#6BCB77" />
      <rect x="7" y="9" width="12" height="8" rx="2" fill="#2ECC71" />
      <polygon points="24,6 29,12 24,18" fill="#95A5A6" />
    </svg>
  );
}

/* ══════════════════════════════════════════════
   3-D COLORING BOOK COMPONENT
══════════════════════════════════════════════ */

function ColoringBook() {
  const bookRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!bookRef.current) return;
    const rect = bookRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rx = ((e.clientY - cy) / (rect.height / 2)) * 8;
    const ry = -((e.clientX - cx) / (rect.width / 2)) * 10;
    setTilt({ x: rx, y: ry });
  };

  return (
    <div
      ref={bookRef}
      className="book-wrapper"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setTilt({ x: 0, y: 0 }); }}
      onMouseMove={handleMouseMove}
      style={{
        perspective: "900px",
        width: "min(380px, 85vw)",
        height: "min(285px, 64vw)",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: hover ? "transform 0.1s ease" : "transform 0.6s ease",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, #2980B9 0%, #1A5276 100%)",
            borderRadius: 12,
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            transformStyle: "preserve-3d",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "5%", right: "2%", width: "48%", height: "90%",
            background: "#FAFAF5",
            borderRadius: "2px 10px 10px 2px",
            transformStyle: "preserve-3d",
            transformOrigin: "left center",
            transform: hover ? "rotateY(28deg) translateZ(6px)" : "rotateY(0deg) translateZ(2px)",
            transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
            boxShadow: hover ? "6px 0 20px rgba(0,0,0,0.15)" : "none",
            overflow: "hidden",
            padding: "2%",
          }}
        >
          <CastlePage />
        </div>
        <div
          style={{
            position: "absolute",
            top: "5%", left: "2%", width: "48%", height: "90%",
            background: "#FFFEF0",
            borderRadius: "10px 2px 2px 10px",
            transformStyle: "preserve-3d",
            transformOrigin: "right center",
            transform: hover ? "rotateY(-25deg) translateZ(8px)" : "rotateY(0deg) translateZ(4px)",
            transition: "transform 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.05s",
            boxShadow: hover ? "-6px 0 20px rgba(0,0,0,0.15)" : "none",
            overflow: "hidden",
            padding: "2%",
          }}
        >
          <DinoPage />
        </div>
        <div
          style={{
            position: "absolute",
            top: "7%", left: "50%", width: "46%", height: "86%",
            background: "#F5F5E8",
            borderRadius: 4,
            transformOrigin: "left center",
            transform: hover ? "rotateY(14deg) translateZ(1px) translateX(-50%)" : "rotateY(0deg) translateZ(0px) translateX(-50%)",
            transition: "transform 0.5s ease 0.02s",
            opacity: hover ? 1 : 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0, left: "calc(50% - 5px)",
            width: 10, height: "100%",
            background: "linear-gradient(180deg,#1A5276,#2980B9,#1A5276)",
            borderRadius: 2,
            zIndex: 10,
          }}
        />
      </div>
      {!hover && (
        <div style={{
          position: "absolute",
          bottom: -28, left: "50%", transform: "translateX(-50%)",
          fontSize: 11, color: "#9B59B6", fontWeight: 700, whiteSpace: "nowrap",
        }}>
          ✦ hover to flip pages ✦
        </div>
      )}
    </div>
  );
}

function DinoPage() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 170 260" preserveAspectRatio="xMidYMid meet">
      <rect width="170" height="260" fill="#E8F4FD" rx="4" />
      <ellipse cx="50" cy="30" rx="28" ry="12" fill="white" />
      <ellipse cx="65" cy="25" rx="20" ry="14" fill="white" />
      <ellipse cx="35" cy="28" rx="18" ry="10" fill="white" />
      <circle cx="145" cy="20" r="14" fill="#FFD93D" />
      <ellipse cx="85" cy="240" rx="80" ry="25" fill="#7DBD5F" />
      <rect x="5" y="215" width="160" height="50" rx="8" fill="#7DBD5F" />
      <polygon points="90,70 120,200 60,200" fill="#C0392B" />
      <polygon points="90,70 105,120 75,120" fill="#E74C3C" />
      <ellipse cx="90" cy="68" rx="14" ry="8" fill="#E74C3C" />
      <path d="M80,68 Q85,55 90,65 Q95,55 100,68" fill="#FF6B35" />
      <ellipse cx="40" cy="210" rx="30" ry="10" fill="#5DADE2" opacity="0.7" />
      <rect x="20" y="140" width="8" height="70" rx="4" fill="#8B6914" />
      <ellipse cx="15" cy="140" rx="20" ry="12" fill="#27AE60" transform="rotate(-20 15 140)" />
      <ellipse cx="35" cy="135" rx="18" ry="10" fill="#2ECC71" transform="rotate(15 35 135)" />
      <circle cx="16" cy="148" r="4" fill="#8B6914" />
      <circle cx="28" cy="144" r="4" fill="#8B6914" />
      <ellipse cx="100" cy="175" rx="36" ry="28" fill="#6BCB77" />
      <path d="M82,152 Q75,120 88,100" stroke="#6BCB77" strokeWidth="22" strokeLinecap="round" fill="none" />
      <ellipse cx="92" cy="96" rx="22" ry="18" fill="#6BCB77" />
      <ellipse cx="108" cy="100" rx="14" ry="10" fill="#7ED99A" />
      <circle cx="96" cy="90" r="7" fill="white" />
      <circle cx="98" cy="90" r="4" fill="#2C3E50" />
      <circle cx="99" cy="88" r="1.5" fill="white" />
      <circle cx="112" cy="98" r="2.5" fill="#5DBD72" />
      <path d="M98 104 Q108 112 118 104" stroke="#4CAF50" strokeWidth="2" fill="none" strokeLinecap="round" />
      {[0,1,2,3].map(i => <polygon key={i} points={`${85+i*12},152 ${91+i*12},152 ${88+i*12},138`} fill="#E67E22" />)}
      <path d="M68,170 Q50,175 48,190" stroke="#6BCB77" strokeWidth="14" strokeLinecap="round" fill="none" />
      <path d="M68,170 Q50,160 52,145" stroke="#6BCB77" strokeWidth="12" strokeLinecap="round" fill="none" />
      <path d="M46,190 Q42,195 40,192" stroke="#5DBD72" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M134,180 Q160,185 165,205 Q158,215 152,208" stroke="#6BCB77" strokeWidth="16" strokeLinecap="round" fill="none" />
      <path d="M82,200 Q80,225 75,235" stroke="#6BCB77" strokeWidth="16" strokeLinecap="round" fill="none" />
      <path d="M118,200 Q120,225 125,235" stroke="#6BCB77" strokeWidth="16" strokeLinecap="round" fill="none" />
      <ellipse cx="74" cy="237" rx="12" ry="6" fill="#5DBD72" />
      <ellipse cx="126" cy="237" rx="12" ry="6" fill="#5DBD72" />
      {[30,80,140].map((x,i) => (
        <g key={i}>
          <circle cx={x} cy="217" r="5" fill={["#FF6B6B","#FFD93D","#9B59B6"][i]} />
          {[0,60,120,180,240,300].map(a => (
            <ellipse key={a} cx={x + Math.cos(a*Math.PI/180)*8} cy={217 + Math.sin(a*Math.PI/180)*8}
              rx="4" ry="3" fill={["#FF6B6B","#FFD93D","#9B59B6"][i]} opacity="0.7"
              transform={`rotate(${a} ${x + Math.cos(a*Math.PI/180)*8} ${217 + Math.sin(a*Math.PI/180)*8})`}
            />
          ))}
        </g>
      ))}
      <text x="85" y="15" textAnchor="middle" fill="#9B59B6" fontSize="9" fontWeight="bold">DINO WORLD</text>
    </svg>
  );
}

function CastlePage() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 170 260" preserveAspectRatio="xMidYMid meet">
      <rect width="170" height="260" fill="#FAFAF8" rx="4" />
      {[20,30,40].map(y => <line key={y} x1="10" y1={y} x2="160" y2={y} stroke="#EEE" strokeWidth="0.5" />)}
      <circle cx="140" cy="25" r="14" stroke="#DDD" strokeWidth="1.5" fill="none" />
      {[0,45,90,135,180,225,270,315].map(a => (
        <line key={a}
          x1={140 + Math.cos(a*Math.PI/180)*18} y1={25 + Math.sin(a*Math.PI/180)*18}
          x2={140 + Math.cos(a*Math.PI/180)*23} y2={25 + Math.sin(a*Math.PI/180)*23}
          stroke="#DDD" strokeWidth="1.5" strokeLinecap="round"
        />
      ))}
      <path d="M0,220 Q85,205 170,220 L170,260 L0,260Z" stroke="#CCC" strokeWidth="1" fill="none" />
      <path d="M0,220 Q40,185 80,220" stroke="#CCC" strokeWidth="1.5" fill="none" />
      <path d="M90,220 Q130,190 170,220" stroke="#CCC" strokeWidth="1.5" fill="none" />
      <path d="M85,260 Q85,240 85,220" stroke="#DDD" strokeWidth="8" fill="none" />
      <rect x="55" y="90" width="60" height="130" stroke="#AAA" strokeWidth="2" fill="none" rx="2" />
      {[55,65,75,85,95,105].map(x => <rect key={x} x={x} y="80" width="8" height="14" stroke="#AAA" strokeWidth="1.5" fill="none" rx="1" />)}
      <path d="M72,220 L72,175 Q85,162 98,175 L98,220" stroke="#AAA" strokeWidth="2" fill="none" />
      {[76,80,84,88,92].map(x => <line key={x} x1={x} y1="175" x2={x} y2="220" stroke="#CCC" strokeWidth="1" />)}
      {[178,190,202,214].map(y => <line key={y} x1="72" y1={y} x2="98" y2={y} stroke="#CCC" strokeWidth="1" />)}
      <path d="M72,120 L72,105 Q85,97 98,105 L98,120Z" stroke="#AAA" strokeWidth="1.5" fill="none" />
      <circle cx="69" cy="140" r="8" stroke="#BBB" strokeWidth="1.5" fill="none" />
      <circle cx="101" cy="140" r="8" stroke="#BBB" strokeWidth="1.5" fill="none" />
      <rect x="18" y="120" width="40" height="100" stroke="#AAA" strokeWidth="1.5" fill="none" rx="2" />
      <rect x="112" y="120" width="40" height="100" stroke="#AAA" strokeWidth="1.5" fill="none" rx="2" />
      {[18,26,34,42].map(x => <rect key={x} x={x} y="112" width="6" height="12" stroke="#AAA" strokeWidth="1.5" fill="none" rx="1" />)}
      {[112,120,128,136].map(x => <rect key={x} x={x} y="112" width="6" height="12" stroke="#AAA" strokeWidth="1.5" fill="none" rx="1" />)}
      <rect x="28" y="148" width="20" height="24" rx="10" stroke="#BBB" strokeWidth="1.5" fill="none" />
      <rect x="122" y="148" width="20" height="24" rx="10" stroke="#BBB" strokeWidth="1.5" fill="none" />
      <line x1="85" y1="80" x2="85" y2="58" stroke="#AAA" strokeWidth="1.5" />
      <path d="M85,58 L100,64 L85,70Z" stroke="#AAA" strokeWidth="1.5" fill="none" />
      <path d="M10,45 Q20,35 35,42 Q32,30 45,32 Q58,28 55,42 Q65,38 62,48 Q10,52 10,45Z" stroke="#DDD" strokeWidth="1.5" fill="none" />
      <path d="M95,55 Q103,48 114,53 Q112,44 122,46 Q130,44 128,54 Q95,60 95,55Z" stroke="#DDD" strokeWidth="1.5" fill="none" />
      <line x1="15" y1="218" x2="15" y2="185" stroke="#CCC" strokeWidth="2" />
      <path d="M5,185 Q15,165 25,185Z" stroke="#CCC" strokeWidth="1.5" fill="none" />
      <path d="M5,175 Q15,155 25,175Z" stroke="#CCC" strokeWidth="1.5" fill="none" />
      <line x1="155" y1="218" x2="155" y2="185" stroke="#CCC" strokeWidth="2" />
      <path d="M145,185 Q155,165 165,185Z" stroke="#CCC" strokeWidth="1.5" fill="none" />
      <path d="M145,175 Q155,155 165,175Z" stroke="#CCC" strokeWidth="1.5" fill="none" />
      <path d="M15,220 Q85,230 155,220" stroke="#C8E6F5" strokeWidth="6" fill="none" />
      <text x="85" y="15" textAnchor="middle" fill="#AAA" fontSize="8" fontWeight="bold" letterSpacing="1">MAGIC CASTLE</text>
    </svg>
  );
}

/* ══════════════════════════════════════════════
   MAIN HERO COMPONENT (FULLY RESPONSIVE)
══════════════════════════════════════════════ */

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes floatDot {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(180deg); }
        }
        @keyframes flyPlane {
          0% { transform: translate(0,0) rotate(-8deg); }
          50% { transform: translate(18px,-14px) rotate(4deg); }
          100% { transform: translate(0,0) rotate(-8deg); }
        }
        .paper-plane { animation: flyPlane 4s ease-in-out infinite; }
        @keyframes bounceStar {
          0%,100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.15); }
        }
        .star-bounce { animation: bounceStar 2.4s ease-in-out infinite; }
        @keyframes bounceStar2 {
          0%,100% { transform: translateY(0) rotate(-10deg) scale(1); }
          50% { transform: translateY(-12px) rotate(10deg) scale(1.1); }
        }
        .star-bounce2 { animation: bounceStar2 3s ease-in-out infinite; }
        @keyframes pulseHeart {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.25); }
        }
        .heart-pulse { animation: pulseHeart 1.4s ease-in-out infinite; }
        @keyframes driftCloud {
          0%,100% { transform: translateX(0); }
          50% { transform: translateX(12px); }
        }
        .cloud-drift { animation: driftCloud 5s ease-in-out infinite; }
        @keyframes girlPop {
          0% { transform: translateY(30px) scale(0.85); opacity: 0; }
          70% { transform: translateY(-8px) scale(1.03); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        .girl-popin { animation: girlPop 0.9s cubic-bezier(0.34,1.56,0.64,1) 0.4s both; }
        @keyframes girlFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .girl-float { animation: girlFloat 3.2s ease-in-out infinite; }
        @keyframes scatterIn {
          from { opacity:0; transform: translateY(20px) rotate(10deg); }
          to { opacity:1; transform: translateY(0) rotate(0deg); }
        }
        .scatter-in { animation: scatterIn 0.7s ease 0.8s both; }
        @keyframes dashDraw {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }
        .dash-path {
          stroke-dasharray: 8 6;
          stroke-dashoffset: 200;
          animation: dashDraw 2s linear infinite;
        }
      `}</style>

<div className="relative min-h-screen bg-[#FDF6EE] overflow-hidden z-0">        {/* Floating confetti */}
        {DOTS.map((d, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none z-10"
            style={{
              left: `${d.x}%`,
              top: `${d.y}%`,
              width: d.r * 2,
              height: d.r * 2,
              background: d.c,
              animation: `floatDot ${2.2 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}

        {/* Decorative wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-[#EDD5F8] rounded-t-[100%] z-0" />

        <div className="container mx-auto px-4 relative z-10 py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* LEFT CONTENT */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white border border-pink-200 rounded-full px-4 py-1.5 text-sm font-bold text-gray-600 mb-6 shadow-sm">
                <span className="heart-pulse inline-flex">
                  <HeartIcon size={16} />
                </span>
                Inspire Creativity. Nurture Imagination.
              </div>

              <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-2">
                Color Their World.<br />
                <span className="text-[#CC2F8A]">Shape Their Future.</span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto lg:mx-0 mt-6 mb-8">
                Premium coloring books, activity books, and creative toys that make learning fun, engaging, and meaningful for every child.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
                <a href="/shop" className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold py-3 px-7 rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition-all">
                  Shop Coloring Books <span className="text-xl">→</span>
                </a>
                <a href="/story" className="inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-800 font-bold py-3 px-7 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <span className="w-6 h-6 bg-gray-800 text-white rounded-full inline-flex items-center justify-center text-xs">▶</span>
                  Watch Our Story
                </a>
              </div>

              {/* Feature cards */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                {[
                  { icon: <ShieldIcon />, bg: "#F0EBFF", title: "Safe & Child Friendly", desc: "Non-toxic & eco-friendly materials" },
                  { icon: <BrainIcon />, bg: "#FFF7E6", title: "Supports Learning", desc: "Designed to boost creativity and development" },
                  { icon: <HeartOutlineIcon />, bg: "#E6FFF4", title: "Loved by Parents", desc: "Trusted by thousands of happy families" },
                ].map((f, i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 shadow-md w-36 sm:w-40 hover:-translate-y-2 transition-all">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-2" style={{ background: f.bg }}>
                      {f.icon}
                    </div>
                    <div className="font-extrabold text-gray-800 text-sm">{f.title}</div>
                    <div className="text-gray-500 text-xs mt-1">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT VISUAL AREA - Hidden on mobile, visible on lg */}
            <div className="flex-1 relative hidden lg:block min-h-[550px]">
              {/* Dashed path */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 550">
                <path d="M420,40 Q500,20 540,80 Q570,140 480,160" stroke="#C8A2E0" strokeWidth="2" fill="none" className="dash-path" strokeLinecap="round" />
              </svg>

              {/* Paper plane */}
              <div className="absolute top-5 left-[60%] z-20">
                <PaperPlane />
              </div>

              {/* Cloud */}
              <div className="absolute top-16 right-12 z-10 cloud-drift">
                <Cloud size={65} />
              </div>

              {/* Desk lamp */}
              <div className="absolute -top-5 right-5 z-10">
                <DeskLamp />
              </div>

              {/* Heart pulse */}
              <div className="absolute top-20 left-[55%] z-20 heart-pulse">
                <HeartIcon size={32} color="#FF6B6B" />
              </div>

              {/* Star bounce */}
              <div className="absolute top-24 left-[35%] z-20 star-bounce">
                <StarIcon size={40} color="#FFD93D" />
              </div>

              {/* Smiley star */}
              <div className="absolute top-44 left-[15%] z-20 star-bounce2">
                <svg width="36" height="36" viewBox="0 0 36 36">
                  <polygon points="18,2 22.5,13 35,14 26,22 28.5,34 18,28 7.5,34 10,22 1,14 13.5,13" fill="#FFD93D" />
                  <circle cx="14" cy="17" r="2" fill="#333" />
                  <circle cx="22" cy="17" r="2" fill="#333" />
                  <path d="M13 22 Q18 26 23 22" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
              </div>

              {/* Pencil cup */}
              <div className="absolute top-12 right-10 z-10">
                <PencilCup />
              </div>

              {/* 3D BOOK */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-[52%] -translate-y-[48%] z-20">
                <ColoringBook />
              </div>

              {/* Girl character */}
              <div className="absolute top-5 left-[45%] z-30 girl-popin girl-float">
                <GirlCharacter />
              </div>

              {/* Crayons bottom scatter */}
              <div className="absolute bottom-5 left-8 z-10 scatter-in">
                <Crayons />
              </div>

              {/* Sharpener */}
              <div className="absolute bottom-16 left-[38%] z-10">
                <Sharpener />
              </div>

              {/* Book stack */}
              <div className="absolute bottom-0 left-0 z-10">
                <BookStack />
              </div>

              {/* Mini drawing */}
              <div className="absolute bottom-20 right-12 z-10">
                <svg width="80" height="70" viewBox="0 0 80 70" fill="none">
                  <rect width="80" height="70" rx="4" fill="#FFF8E7" />
                  <circle cx="60" cy="15" r="8" fill="#FFD93D" opacity="0.8" />
                  <rect x="20" y="35" width="35" height="25" fill="#FF8A65" opacity="0.7" rx="2" />
                  <polygon points="17,36 37.5,18 58,36" fill="#E53935" opacity="0.8" />
                  <rect x="30" y="47" width="10" height="13" rx="2" fill="#8B4513" opacity="0.7" />
                  <rect x="40" y="40" width="9" height="9" rx="1" fill="#87CEEB" opacity="0.8" />
                  <rect x="5" y="60" width="70" height="8" rx="4" fill="#7DBD5F" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}