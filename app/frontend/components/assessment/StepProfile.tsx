"use client";
import { motion } from "framer-motion";
import { UserCircle, Smile } from "lucide-react";

export default function StepProfile({ formData, setFormData }: any) {
  const inputStyle = "w-full h-16 px-6 bg-white border-2 border-slate-100 rounded-2xl focus:border-[#4A90E2] outline-none transition-all text-xl font-medium shadow-sm placeholder:text-slate-300";
  const handleChange = (f: string, v: any) => setFormData((p: any) => ({ ...p, [f]: v }));

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row h-full">
      <div className="md:w-1/2 p-12 bg-slate-50 flex flex-col justify-center items-center text-center border-r border-slate-100">
        <div className="w-40 h-40 rounded-full bg-white shadow-xl flex items-center justify-center border-8 border-blue-50 mb-6">
          <UserCircle className="w-20 h-20 text-blue-200" />
        </div>
        <h2 className="text-3xl font-semibold text-slate-900 mb-2">Let’s get started</h2>
        <p className="text-slate-500 max-w-xs">Tell us a bit about yourself so we can tailor your stress analysis.</p>
      </div>

      <div className="md:w-1/2 p-12 flex flex-col justify-center space-y-6 bg-white">
        <div>
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Your Name</label>
          <input className={inputStyle} placeholder="How should we address you?" value={formData.Name ?? ""} onChange={(e) => handleChange("Name", e.target.value)} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Age</label>
            <input type="number" className={inputStyle} placeholder="Years" value={formData.Age ?? ""} onChange={(e) => handleChange("Age", parseInt(e.target.value) || "")} />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Gender</label>
            <select className={inputStyle} value={formData.Gender ?? ""} onChange={(e) => handleChange("Gender", e.target.value)}>
              <option value="">Select...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Occupation</label>
          <select 
            className={inputStyle} 
            value={formData.Occupation ?? ""} 
            onChange={(e) => handleChange("Occupation", e.target.value)}
          >
            <option value="Healthcare Worker">Healthcare Worker</option>
            <option value="Teacher">Teacher</option>
            <option value="Freelancer">Freelancer</option>
            <option value="Business Owner">Business Owner</option>
            <option value="Student">Student</option>
            <option value="Young Professional">Young Professional </option>
            <option value="Retiredr">Retired </option>
            <option value="Other">Other </option>
          </select>
        </div>
      </div>
    </motion.div>
  );
}