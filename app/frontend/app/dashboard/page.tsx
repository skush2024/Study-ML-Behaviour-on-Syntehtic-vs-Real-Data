"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import PatientHeader from "@/components/dashboard/PatientHeader";
import RiskScoreCard from "@/components/dashboard/RiskScoreCard";
import ConsultationIntervention from "@/components/dashboard/ConsultationIntervention";
import { Zap, Activity, Heart, Loader2, ArrowLeft, Printer, ShieldCheck } from "lucide-react";

export default function ResultPage() {
  const router = useRouter();
  const [apiData, setApiData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedInsights = localStorage.getItem("assessment_insights");
    if (savedInsights) {
      setTimeout(() => { // Small delay to feel like "calculating"
        setApiData(JSON.parse(savedInsights));
        setIsLoading(false);
      }, 1500);
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleGoHome = () => {
    localStorage.removeItem("assessment_insights");
    router.push("/");
  };

  const defaultResult = {
    score: apiData?.score || 0,
    status: apiData?.status || "Pending Analysis",
    consultation: apiData?.consultation || {
      analysis: "Loading physiological summary...",
      steps: ["...", "...", "..."],
      insights: ["...", "...", "..."],
      closing_note: "..."
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-50">
        <div className="relative">
          <Loader2 className="w-16 h-16 text-indigo-500 animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping" />
          </div>
        </div>
        <h2 className="mt-8 text-xl font-serif italic text-slate-700">Assembling Clinical Insights</h2>
        <p className="text-slate-400 text-sm mt-2 font-light">Cross-referencing biomarkers with neural patterns...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFEFF] text-slate-900 selection:bg-indigo-100">
      {/* Soft Background Accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto py-12 px-6 md:px-10">
        
        {/* Navigation & Actions */}
        <div className="flex justify-between items-center mb-12">
          <button onClick={handleGoHome} className="flex items-center gap-3 text-slate-400 hover:text-indigo-600 transition-colors group">
            <div className="p-2 rounded-full border border-slate-200 group-hover:border-indigo-200 group-hover:bg-indigo-50 transition-all">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Exit Portal</span>
          </button>
          
          <button onClick={() => window.print()} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-all">
            <Printer className="w-4 h-4" />
            Print Report
          </button>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="space-y-10"
        >
          {/* Section 1: Identity Card */}
          <section className="bg-white rounded-[3rem] shadow-sm border border-slate-100 overflow-hidden">
            <PatientHeader data={apiData?.patientData || {}} />
          </section>

          {/* Section 2: Clinical Findings */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="lg:col-span-5"
            >
              <RiskScoreCard score={defaultResult.score} label={defaultResult.status} />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
              className="lg:col-span-7"
            >
              <ConsultationIntervention 
                 description={defaultResult.consultation.analysis} 
                 steps={defaultResult.consultation.steps} 
              />
            </motion.div>
          </div>

          {/* Section 3: Nuanced Observations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {defaultResult.consultation.insights.map((insight: string, i: number) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.6 + (i * 0.1) }}
                 whileHover={{ y: -8, transition: { duration: 0.2 } }}
                 className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-100/50 group"
               >
                 <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                   i === 0 ? 'bg-indigo-50 text-indigo-500' : 
                   i === 1 ? 'bg-emerald-50 text-emerald-500' : 
                   'bg-amber-50 text-amber-500'
                 }`}>
                   {i === 0 ? <Zap size={22} /> : i === 1 ? <Activity size={22} /> : <Heart size={22} />}
                 </div>
                 <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Observation 0{i+1}</h4>
                 <p className="text-slate-600 font-light leading-relaxed group-hover:text-slate-900 transition-colors">
                   {insight}
                 </p>
               </motion.div>
             ))}
          </div>

          {/* Section 4: Final Certification */}
          <footer className="text-center py-16 px-8 border-t border-slate-100 relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6">
               <ShieldCheck className="w-8 h-8 text-indigo-100" />
             </div>
             
             <p className="max-w-2xl mx-auto font-serif italic text-xl text-slate-500 leading-relaxed mb-8">
               "{defaultResult.consultation.closing_note}"
             </p>
             
             <div className="flex flex-col items-center gap-4">
               <div className="h-px w-24 bg-slate-200" />
               <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.4em]">
                 Generated by Physiological Inference Engine v1.0
               </p>
             </div>
          </footer>
        </motion.div>
      </div>
    </div>
  );
}