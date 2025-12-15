"use client";
import { useEffect, useState } from "react";

export default function BackgroundBars() {
  const [bars, setBars] = useState(() =>
    Array.from({ length: 80 }).map(() => ({
      height: Math.floor(Math.random() * 90) + 10,
      color: Math.random() > 0.5 ? "bg-green-500" : "bg-red-500",
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setBars((prev) =>
        prev.map((x) => ({
          ...x,
          height: Math.floor(Math.random() * 90) + 10,
          color: Math.random() > 0.5 ? "bg-green-500" : "bg-red-500",
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-end gap-[3px] overflow-hidden -z-10 opacity-40 blur-md">
      {bars.map((b, i) => (
        <div
          key={i}
          className={`${b.color} w-[1.25%] transition-all duration-300`}
          style={{ height: `${b.height}%` }}
        />
      ))}
    </div>
  );
}
