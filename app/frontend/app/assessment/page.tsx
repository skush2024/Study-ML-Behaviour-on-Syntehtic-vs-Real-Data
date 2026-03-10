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
  // Field names have been standardized to the underscore-style keys used across components.
  const defaultData = {
    Name: "",
    Age: 25,
    Gender: "",
    Occupation: "",
    Daily_Screen_Hours: 5,
    Social_Media_Hours: 2,
    App_Usage_Count: 40,
    Work_Productivity_Score: 7,
    Daily_Work_Hours: 8,
    Commute_Hours_Per_Day: 1,
    Sleep_Hours: 7,
    Caffeine_Cups_Per_Day: 2,
    Exercise_Hours_Per_Week: 3
  };

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(defaultData);
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Normalize incoming form objects so we only keep the canonical underscore-style keys.
  const normalizeFormData = (raw: any) => {
    if (!raw || typeof raw !== "object") return defaultData;
    return {
      Name: String(raw.Name ?? raw.name ?? ""),
      Age: Number.isFinite(Number(raw.Age ?? raw.age)) ? parseInt(String(raw.Age ?? raw.age), 10) : 25,
      Gender: String(raw.Gender ?? raw.gender ?? ""),
      Occupation: String(raw.Occupation ?? raw.occupation ?? ""),
      Daily_Screen_Hours: Number.isFinite(Number(raw.Daily_Screen_Hours ?? raw.screenTime)) ? parseFloat(String(raw.Daily_Screen_Hours ?? raw.screenTime)) : 5,
      Social_Media_Hours: Number.isFinite(Number(raw.Social_Media_Hours ?? raw.socialMedia)) ? parseFloat(String(raw.Social_Media_Hours ?? raw.socialMedia)) : 2,
      App_Usage_Count: Number.isFinite(Number(raw.App_Usage_Count ?? raw.appUsageCount)) ? parseInt(String(raw.App_Usage_Count ?? raw.appUsageCount), 10) : 40,
      Work_Productivity_Score: Number.isFinite(Number(raw.Work_Productivity_Score ?? raw.wpaiScore)) ? parseInt(String(raw.Work_Productivity_Score ?? raw.wpaiScore), 10) : 7,
      Daily_Work_Hours: Number.isFinite(Number(raw.Daily_Work_Hours ?? raw.dailyWorkHours)) ? parseFloat(String(raw.Daily_Work_Hours ?? raw.dailyWorkHours)) : 8,
      Commute_Hours_Per_Day: Number.isFinite(Number(raw.Commute_Hours_Per_Day ?? raw.commuteHours)) ? parseFloat(String(raw.Commute_Hours_Per_Day ?? raw.commuteHours)) : 1,
      Sleep_Hours: Number.isFinite(Number(raw.Sleep_Hours ?? raw.sleepHours)) ? parseFloat(String(raw.Sleep_Hours ?? raw.sleepHours)) : 7,
      Caffeine_Cups_Per_Day: Number.isFinite(Number(raw.Caffeine_Cups_Per_Day ?? raw.coffeeCups)) ? parseInt(String(raw.Caffeine_Cups_Per_Day ?? raw.coffeeCups), 10) : 2,
      Exercise_Hours_Per_Week: Number.isFinite(Number(raw.Exercise_Hours_Per_Week ?? raw.exerciseHours)) ? parseFloat(String(raw.Exercise_Hours_Per_Week ?? raw.exerciseHours)) : 3,
    };
  };

  useEffect(() => {
    // Remove any legacy keys left behind from older runs
    sessionStorage.removeItem("bronco_data");
    sessionStorage.removeItem("bronco_step");

    const savedData = sessionStorage.getItem("assessment_data");
    const savedStep = sessionStorage.getItem("assessment_step");
    if (savedData) setFormData((prev) => ({ ...prev, ...normalizeFormData(JSON.parse(savedData)) }));
    if (savedStep) setStep(parseInt(savedStep, 10));
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      // Save a normalized version to avoid keeping duplicate legacy keys in storage
      sessionStorage.setItem("assessment_data", JSON.stringify(normalizeFormData(formData)));
      sessionStorage.setItem("assessment_step", step.toString());
    }
  }, [formData, step, isMounted]);

  const handleNext = async () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      try {
        // Normalize payload to ensure no duplicate old/new keys are sent
        const payload = normalizeFormData(formData);
        console.log(JSON.stringify(payload))
        const response = await fetch("http://localhost:8000/api/predict", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) throw new Error("API Connection Failed");

        const result = await response.json();
  localStorage.setItem("assessment_insights", JSON.stringify(result));
  localStorage.setItem("assessment_user_input", JSON.stringify(formData));

  // Clear only assessment-related session keys (safer than clearing entire sessionStorage)
  sessionStorage.removeItem("assessment_data");
  sessionStorage.removeItem("assessment_step");
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