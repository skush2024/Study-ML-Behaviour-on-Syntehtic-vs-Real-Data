"use client";
import { ShieldCheck, Info } from "lucide-react";

export default function ConsultationIntervention({ steps, description }: { steps: string[], description: string }) {
  return (
    <div className="h-full flex flex-col gap-6">
      {/* The Description */}
      <div className="bg-blue-50/50 p-8 rounded-[2rem] border border-blue-100">
        <div className="flex items-center gap-3 mb-4 text-blue-600">
          <Info size={20} />
          <h3 className="text-xs font-bold uppercase tracking-widest">Consultation Summary</h3>
        </div>
        <p className="text-slate-700 leading-relaxed text-lg font-light italic">"{description}"</p>
      </div>

      {/* The 3 Steps */}
      <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl flex-grow">
        <h3 className="text-xl font-light mb-8 flex items-center gap-3">
          <ShieldCheck className="text-emerald-400" /> Suggested Interventions
        </h3>
        <div className="space-y-6">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-mono text-emerald-400 shrink-0">{i+1}</span>
              <p className="text-slate-300 font-light">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}