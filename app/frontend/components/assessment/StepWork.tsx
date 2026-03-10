"use client";
import { motion } from "framer-motion";
import { Briefcase, Timer } from "lucide-react";

export default function StepWork({ formData, setFormData }: any) {
  const handleChange = (f: string, v: number) => setFormData((p: any) => ({ ...p, [f]: v }));
  const inputStyle = "w-full h-16 bg-white border-2 border-slate-100 rounded-2xl text-center text-2xl font-mono focus:border-amber-400 outline-none transition-all";

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col md:flex-row h-full">
      <div className="md:w-1/2 p-12 bg-amber-50/50 flex flex-col justify-center items-center text-center">
        <div className="w-32 h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-8 rotate-3 border-4 border-amber-100">
           <Briefcase className="w-16 h-16 text-amber-500" />
        </div>
        <h2 className="text-3xl font-light text-slate-900 mb-4">Occupational Load</h2>
        <p className="text-slate-500 max-w-xs text-sm">Your commute and work duration act as a "Stress Floor." They dictate the baseline cortisol levels you carry every day.</p>
      </div>

      <div className="md:w-1/2 p-12 bg-white flex flex-col justify-center space-y-10">
        <div>
          <label className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-4">Perceived Productivity</label>
          <div className="flex justify-between items-center bg-slate-50 p-6 rounded-2xl border border-slate-100">
            {[...Array(10)].map((_, i) => (
              <button 
                key={i} 
                onClick={() => handleChange("wpaiScore", i + 1)}
                className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${formData.wpaiScore === i + 1 ? 'bg-slate-900 text-white scale-125' : 'text-slate-300 hover:text-slate-600'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest text-center block">Office Hours</label>
            <input type="number" className={inputStyle} value={formData.dailyWorkHours ?? 0} onChange={(e) => handleChange("dailyWorkHours", parseFloat(e.target.value) || 0)} />
          </div>
          <div className="space-y-3">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest text-center block">Commute Time</label>
            <input type="number" className={inputStyle} value={formData.commuteHours ?? 0} onChange={(e) => handleChange("commuteHours", parseFloat(e.target.value) || 0)} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}