"use client";
import { motion } from "framer-motion";
import { Battery, Coffee, Moon } from "lucide-react";

export default function StepLifestyle({ formData, setFormData }: any) {
  const handleChange = (f: string, v: number) => setFormData((p: any) => ({ ...p, [f]: v }));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col md:flex-row h-full">
      <div className="md:w-1/2 p-12 bg-emerald-50/40 flex flex-col justify-center items-center border-r border-emerald-100">
        <div className="w-24 h-48 border-4 border-slate-300 rounded-[2rem] p-1.5 relative overflow-hidden bg-white shadow-inner">
           <motion.div 
              initial={{ height: "0%" }}
              animate={{ height: `${(formData.sleepHours / 10) * 100}%` }}
              className="absolute bottom-1.5 left-1.5 right-1.5 bg-emerald-400 rounded-[1.5rem]"
           />
           <Battery className="absolute inset-0 m-auto w-10 h-10 text-slate-200 z-10" />
        </div>
        <h3 className="text-3xl font-light text-slate-900 mt-8">System Recharge</h3>
        <p className="text-slate-500 mt-2 text-center text-sm max-w-xs leading-relaxed">Movement clears the cache; Sleep rebuilds the architecture. These are your "Natural Release Valves."</p>
      </div>

      <div className="md:w-1/2 p-12 bg-white flex flex-col justify-center space-y-10">
        <div className="space-y-4">
          <label className="text-lg font-medium text-slate-800">Somatic Recovery (Exercise)</label>
          <div className="flex items-center gap-6">
            <input type="range" min="0" max="20" step="0.5" className="flex-grow h-2 bg-slate-100 rounded-full appearance-none accent-emerald-500" value={formData.exerciseHours ?? 0} onChange={(e) => handleChange("exerciseHours", parseFloat(e.target.value))} />
            <span className="text-2xl font-mono font-bold w-16 text-right">{formData.exerciseHours}h</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-50">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-400">
               <Moon size={14} className="font-bold" />
               <label className="text-[11px] font-bold uppercase tracking-widest">Sleep</label>
            </div>
            <input type="number" className="w-full h-16 bg-slate-50 rounded-2xl text-center text-3xl font-mono focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all" value={formData.sleepHours ?? 0} onChange={(e) => handleChange("sleepHours", parseFloat(e.target.value) || 0)} />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-400">
               <Coffee size={14} className="font-bold" />
               <label className="text-[11px] font-bold uppercase tracking-widest">Caffeine</label>
            </div>
            <div className="flex items-center justify-between h-16 px-4 bg-slate-50 rounded-2xl">
               <button onClick={() => handleChange("coffeeCups", Math.max(0, formData.coffeeCups - 1))} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-slate-400 hover:text-slate-900">-</button>
               <span className="text-2xl font-mono font-bold">{formData.coffeeCups}</span>
               <button onClick={() => handleChange("coffeeCups", (formData.coffeeCups || 0) + 1)} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-slate-400 hover:text-slate-900">+</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}