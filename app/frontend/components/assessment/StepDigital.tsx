"use client";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

export default function StepDigital({ formData, setFormData }: any) {
  const handleChange = (f: string, v: number) => setFormData((p: any) => ({ ...p, [f]: v }));
  const color = (formData.screenTime ?? 0) > 8 ? "text-rose-500" : "text-blue-500";

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col md:flex-row h-full">
      <div className="md:w-1/2 p-12 bg-white flex flex-col justify-center items-center text-center">
        <Smartphone className={`w-32 h-32 mb-6 transition-colors duration-500 ${color}`} />
        <h2 className="text-3xl font-semibold text-slate-900 mb-2">Digital Habits</h2>
        <p className="text-slate-500 max-w-xs">Your "always-on" habits significantly impact how your brain rests.</p>
      </div>

      <div className="md:w-1/2 p-12 bg-slate-50 flex flex-col justify-center space-y-10">
        <div>
          <div className="flex justify-between mb-4">
            <label className="font-bold text-slate-700">Daily Screen Time</label>
            <span className="text-2xl font-mono font-bold text-blue-600">{formData.screenTime ?? 0} hrs</span>
          </div>
          <input type="range" min="0" max="16" step="0.5" className="w-full h-2 bg-slate-200 rounded-full appearance-none accent-blue-600 cursor-pointer" value={formData.screenTime ?? 0} onChange={(e) => handleChange("screenTime", parseFloat(e.target.value))} />
        </div>
        <div>
          <div className="flex justify-between mb-4">
            <label className="font-bold text-slate-700">Social Media Scrolling</label>
            <span className="text-2xl font-mono font-bold text-indigo-600">{formData.socialMedia ?? 0} hrs</span>
          </div>
          <input type="range" min="0" max="12" step="0.5" className="w-full h-2 bg-slate-200 rounded-full appearance-none accent-indigo-600 cursor-pointer" value={formData.socialMedia ?? 0} onChange={(e) => handleChange("socialMedia", parseFloat(e.target.value))} />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-400 uppercase mb-4 block">Apps Used Daily</label>
          <div className="flex items-center gap-6">
            <input type="range" min="5" max="150" step="5" className="flex-grow h-2 bg-slate-200 accent-slate-800" value={formData.appUsageCount ?? 20} onChange={(e) => handleChange("appUsageCount", parseInt(e.target.value))} />
            <span className="text-2xl font-mono font-bold">{formData.appUsageCount ?? 20}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}