"use client";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

export default function StepDigital({ formData, setFormData }: any) {
  const handleChange = (f: string, v: number) => setFormData((p: any) => ({ ...p, [f]: v }));
  const isHighUsage = (formData.Daily_Screen_Hours ?? 0) > 8;
  const colorClass = isHighUsage ? "text-rose-500" : "text-blue-500";
  const accentClass = isHighUsage ? "accent-rose-500" : "accent-blue-600";

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col md:flex-row h-full">
      {/* Left Visual Panel */}
      <div className="md:w-1/2 p-12 bg-white flex flex-col justify-center items-center text-center">
        <Smartphone className={`w-32 h-32 mb-6 transition-colors duration-500 ${colorClass}`} />
        <h2 className="text-3xl font-semibold text-slate-900 mb-2">Digital Habits</h2>
        <p className="text-slate-500 max-w-xs leading-relaxed">
          Your "always-on" habits significantly impact how your brain rests and recovers.
        </p>
      </div>

      {/* Right Input Panel */}
      <div className="md:w-1/2 p-12 bg-slate-50 flex flex-col justify-center space-y-12">
        
        {/* Daily Screen Time */}
        <div className="space-y-4">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Daily Screen Time</label>
          <div className="flex items-center gap-6">
            <input 
              type="range" min="0" max="16" step="0.5" 
              className={`flex-grow h-2 bg-slate-200 rounded-full appearance-none cursor-pointer ${accentClass}`}
              value={formData.Daily_Screen_Hours ?? 0} 
              onChange={(e) => handleChange("Daily_Screen_Hours", parseFloat(e.target.value))} 
            />
            <span className="text-2xl font-mono font-bold w-20 text-right">{formData.Daily_Screen_Hours ?? 0}h</span>
          </div>
        </div>

        {/* Social Media Scrolling */}
        <div className="space-y-4">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Social Media Scrolling</label>
          <div className="flex items-center gap-6">
            <input 
              type="range" min="0" max="12" step="0.5" 
              className="flex-grow h-2 bg-slate-200 rounded-full appearance-none accent-indigo-600 cursor-pointer" 
              value={formData.Social_Media_Hours ?? 0} 
              onChange={(e) => handleChange("Social_Media_Hours", parseFloat(e.target.value))} 
            />
            <span className="text-2xl font-mono font-bold w-20 text-right">{formData.Social_Media_Hours ?? 0}h</span>
          </div>
        </div>  

        {/* Apps Used Daily */}
        <div className="space-y-4">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Apps Used Daily</label>
          <div className="flex items-center gap-6">
            <input 
              type="range" min="5" max="150" step="5" 
              className="flex-grow h-2 bg-slate-200 rounded-full appearance-none accent-slate-800 cursor-pointer" 
              value={formData.App_Usage_Count ?? 20} 
              onChange={(e) => handleChange("App_Usage_Count", parseInt(e.target.value))} 
            />
            <span className="text-2xl font-mono font-bold w-20 text-right">{formData.App_Usage_Count ?? 20}</span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}