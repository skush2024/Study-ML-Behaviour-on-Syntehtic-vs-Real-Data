import { ArrowLeft } from "lucide-react";

export default function ProgressBar({ step, setStep }: { step: number, setStep: (s: number) => void }) {
  return (
    <div className="flex items-center gap-6">
      <button 
        onClick={() => step > 1 && setStep(step - 1)} 
        className={`p-2 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label="Go back"
      >
        <ArrowLeft className="w-4 h-4 text-slate-600" />
      </button>
      <div className="flex gap-2">
        {/* Updated to 4 steps */}
        {[1, 2, 3, 4].map((i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-500 ${step >= i ? 'w-12 bg-[#4A90E2]' : 'w-6 bg-slate-100'}`} 
          />
        ))}
      </div>
    </div>
  );
}