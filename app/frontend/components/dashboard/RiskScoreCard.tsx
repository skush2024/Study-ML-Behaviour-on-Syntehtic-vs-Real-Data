"use client";
import { motion } from "framer-motion";

export default function RiskScoreCard({ score, label }: { score: number; label: string }) {
  const isHigh = label.toLowerCase().includes("high") || label.toLowerCase().includes("critical");

  return (
    <div className="bg-white/70 backdrop-blur-md p-10 rounded-[2.5rem] border border-white shadow-xl shadow-slate-200/50 flex flex-col items-center justify-center relative overflow-hidden h-full">
      {/* Background Decorative Element */}
      <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-20 ${isHigh ? 'bg-rose-400' : 'bg-emerald-400'}`} />
      
      <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-10">Neural Stress Analysis</h3>
      
      <div className="relative flex items-center justify-center mb-10">
        <svg className="w-56 h-56 transform -rotate-90">
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={isHigh ? "#fb7185" : "#34d399"} />
              <stop offset="100%" stopColor={isHigh ? "#e11d48" : "#059669"} />
            </linearGradient>
          </defs>
          <circle cx="112" cy="112" r="100" stroke="#f1f5f9" strokeWidth="16" fill="transparent" />
          <motion.circle 
            cx="112" cy="112" r="100" stroke="url(#gaugeGradient)" strokeWidth="16" fill="transparent"
            strokeDasharray={628}
            initial={{ strokeDashoffset: 628 }}
            animate={{ strokeDashoffset: 628 - (628 * score) / 100 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-6xl font-serif italic text-slate-800">{score}%</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Confidence Score</span>
        </div>
      </div>

      <div className={`px-8 py-2.5 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-sm ${isHigh ? 'bg-rose-50 text-rose-600 border border-rose-100' : 'bg-emerald-50 text-emerald-600 border border-emerald-100'}`}>
        Status: {label}
      </div>
    </div>
  );
}