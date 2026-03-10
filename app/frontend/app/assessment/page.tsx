"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { ArrowRight, Home, Loader2 } from "lucide-react";

import ProgressBar from "@/components/assessment/ProgressBar";
import StepProfile from "@/components/assessment/StepProfile";
import StepDigital from "@/components/assessment/StepDigital";
import StepWork from "@/components/assessment/StepWork";
import StepLifestyle from "@/components/assessment/StepLifestyle";

export default function AssessmentPage() {
  const router = useRouter();
  
  // 13 Data Points initialized to prevent "Uncontrolled Input" errors
  const defaultData = {
    name: "",
    age: 25,
    gender: "",
    occupation: "",
    screenTime: 5,
    socialMedia: 2,
    appUsageCount: 40,
    wpaiScore: 7,
    dailyWorkHours: 8,
    commuteHours: 1,
    sleepHours: 7,
    coffeeCups: 2,
    exerciseHours: 3
  };

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(defaultData);
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedData = sessionStorage.getItem("bronco_data");
    const savedStep = sessionStorage.getItem("bronco_step");
    if (savedData) setFormData(JSON.parse(savedData));
    if (savedStep) setStep(parseInt(savedStep, 10));
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      sessionStorage.setItem("bronco_data", JSON.stringify(formData));
      sessionStorage.setItem("bronco_step", step.toString());
    }
  }, [formData, step, isMounted]);

  const handleNext = async () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      try {
        const response = await fetch("http://localhost:8000/api/analyze", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error("API Connection Failed");

        const result = await response.json();
        localStorage.setItem("bronco_insights", JSON.stringify(result));
        localStorage.setItem("bronco_user_input", JSON.stringify(formData));
        
        sessionStorage.clear();
        router.push("/dashboard");
      } catch (err) {
        alert("Backend not reachable. Ensure FastAPI is running on port 8000.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-[#F5F7F9] flex flex-col items-center pt-8 px-6 pb-20 font-sans">
      <div className="w-full max-w-5xl mb-4">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors bg-white/60 px-4 py-2 rounded-full border border-slate-200 shadow-sm backdrop-blur-sm">
          <Home size={16} className="mr-2" /> Back to Home
        </Link>
      </div>

      <div className="w-full max-w-5xl bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden relative min-h-[650px] flex flex-col">
        <div className="px-8 pt-8 pb-4 border-b border-slate-50 flex items-center justify-between bg-white z-10">
          <ProgressBar step={step} setStep={setStep} />
          <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Step {step} of 4</div>
        </div>

        <div className="flex-grow flex flex-col">
          <AnimatePresence mode="wait">
            {step === 1 && <StepProfile key="p" formData={formData} setFormData={setFormData} />}
            {step === 2 && <StepDigital key="d" formData={formData} setFormData={setFormData} />}
            {step === 3 && <StepWork key="w" formData={formData} setFormData={setFormData} />}
            {step === 4 && <StepLifestyle key="l" formData={formData} setFormData={setFormData} />}
          </AnimatePresence>
        </div>

        <div className="p-6 md:px-12 md:py-8 bg-white flex justify-center z-10 rounded-b-[2.5rem]">
          <button 
            onClick={handleNext} 
            disabled={isSubmitting}
            className="w-full md:w-[400px] h-14 text-lg bg-[#4A90E2] hover:bg-[#3A7BC8] disabled:bg-slate-300 text-white font-medium rounded-2xl shadow-sm transition-all flex items-center justify-center group"
          >
            {isSubmitting ? (
              <><Loader2 className="mr-2 animate-spin" /> Analyzing...</>
            ) : step === 4 ? "Analyze Biometrics" : (
              <>Continue <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}