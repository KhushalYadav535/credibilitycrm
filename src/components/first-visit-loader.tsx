"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "credibility_loader_seen_v1";

export default function FirstVisitLoader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(true);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasSeenLoader = window.localStorage.getItem(STORAGE_KEY);
    if (hasSeenLoader) return;

    setDone(false);
    document.body.style.overflow = "hidden";

    let frame = 0;
    const total = 80;
    const timer = setInterval(() => {
      frame++;
      setProgress(Math.min(100, Math.round((frame / total) * 100)));
      if (frame >= total) {
        clearInterval(timer);
        setTimeout(() => {
          setDone(true);
          document.body.style.overflow = "";
          window.localStorage.setItem(STORAGE_KEY, "true");
        }, 400);
      }
    }, 18);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "#030D1C",
        transition: done ? "opacity 0.6s ease, transform 0.6s ease" : "",
        opacity: done ? 0 : 1,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,106,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,106,0,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className="absolute"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(ellipse at center, rgba(255,106,0,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
        }}
      />

      <div ref={canvasRef} className="relative mb-12 flex items-center justify-center" style={{ width: 200, height: 200 }}>
        <div
          className="absolute rounded-full border-2"
          style={{
            width: 190,
            height: 190,
            borderColor: "rgba(255,106,0,0.15)",
            borderTopColor: "#FF6A00",
            animation: "spin3d1 2s linear infinite",
            transform: "rotateX(60deg)",
          }}
        />
        <div
          className="absolute rounded-full border-2"
          style={{
            width: 140,
            height: 140,
            borderColor: "rgba(255,106,0,0.1)",
            borderRightColor: "rgba(79,195,247,0.8)",
            animation: "spin3d2 1.5s linear infinite reverse",
            transform: "rotateX(60deg) rotateY(20deg)",
          }}
        />
        <div
          className="absolute rounded-full border"
          style={{
            width: 90,
            height: 90,
            borderColor: "rgba(255,255,255,0.08)",
            borderBottomColor: "rgba(155,126,255,0.8)",
            animation: "spin3d3 1s linear infinite",
            transform: "rotateX(60deg) rotateZ(45deg)",
          }}
        />

        <div
          className="absolute rounded-full"
          style={{
            width: 48,
            height: 48,
            background: "radial-gradient(circle at 35% 35%, rgba(255,150,50,0.95), rgba(255,106,0,0.7), rgba(11,31,58,0.9))",
            boxShadow: "0 0 30px rgba(255,106,0,0.6), 0 0 60px rgba(255,106,0,0.25), inset 0 0 20px rgba(255,255,255,0.1)",
            animation: "orbPulse 2s ease-in-out infinite",
          }}
        />

        <div
          className="absolute"
          style={{
            width: 190,
            height: 190,
            animation: "orbitDot 2s linear infinite",
          }}
        >
          <div
            className="absolute rounded-full"
            style={{
              width: 10,
              height: 10,
              background: "#FF6A00",
              top: -5,
              left: "50%",
              transform: "translateX(-50%)",
              boxShadow: "0 0 12px rgba(255,106,0,0.9)",
            }}
          />
        </div>

        <div
          className="absolute"
          style={{
            width: 140,
            height: 140,
            animation: "orbitDot 1.5s linear infinite reverse",
            animationDelay: "0.5s",
          }}
        >
          <div
            className="absolute rounded-full"
            style={{
              width: 7,
              height: 7,
              background: "#4FC3F7",
              top: -3.5,
              left: "50%",
              transform: "translateX(-50%)",
              boxShadow: "0 0 10px rgba(79,195,247,0.9)",
            }}
          />
        </div>
      </div>

      <div className="mb-8 flex flex-col items-center gap-3">
        <div
          className="text-2xl font-black tracking-tight text-white"
          style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", letterSpacing: "-0.04em" }}
        >
          Credibility
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-white/30">AI Voice Platform</div>
      </div>

      <div className="flex w-48 flex-col items-center gap-3">
        <div className="h-px w-full rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
          <div
            className="h-full rounded-full transition-all duration-75"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #FF6A00, #FF3D00)",
              boxShadow: "0 0 10px rgba(255,106,0,0.6)",
            }}
          />
        </div>
        <div className="tabular-nums text-xs text-white/25">{progress}%</div>
      </div>

      {[
        { top: 16, left: 16 },
        { top: 16, right: 16 },
        { bottom: 16, left: 16 },
        { bottom: 16, right: 16 },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute h-6 w-6"
          style={{
            ...pos,
            borderTop: i < 2 ? "2px solid rgba(255,106,0,0.3)" : "none",
            borderBottom: i >= 2 ? "2px solid rgba(255,106,0,0.3)" : "none",
            borderLeft: i % 2 === 0 ? "2px solid rgba(255,106,0,0.3)" : "none",
            borderRight: i % 2 === 1 ? "2px solid rgba(255,106,0,0.3)" : "none",
          }}
        />
      ))}

      <style>{`
        @keyframes spin3d1 {
          0% { transform: rotateX(60deg) rotate(0deg); }
          100% { transform: rotateX(60deg) rotate(360deg); }
        }
        @keyframes spin3d2 {
          0% { transform: rotateX(60deg) rotateY(20deg) rotate(0deg); }
          100% { transform: rotateX(60deg) rotateY(20deg) rotate(360deg); }
        }
        @keyframes spin3d3 {
          0% { transform: rotateX(60deg) rotateZ(45deg) rotate(0deg); }
          100% { transform: rotateX(60deg) rotateZ(45deg) rotate(360deg); }
        }
        @keyframes orbPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 30px rgba(255,106,0,0.6), 0 0 60px rgba(255,106,0,0.25); }
          50% { transform: scale(1.12); box-shadow: 0 0 50px rgba(255,106,0,0.9), 0 0 100px rgba(255,106,0,0.4); }
        }
        @keyframes orbitDot {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
