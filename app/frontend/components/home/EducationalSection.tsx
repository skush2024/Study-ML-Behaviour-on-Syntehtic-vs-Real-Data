import { Smartphone, Moon, Brain } from "lucide-react";

export default function EducationalSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-medium tracking-tight text-center mb-16 text-slate-950">The Psychology of Digital Overload</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-slate-100 bg-white rounded-[2rem] p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-blue-50">
                  <Smartphone className="w-7 h-7 text-[#4A90E2]" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 tracking-tight">Hyper-Connectivity</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-[15px]">
              High daily screen time, coupled with high app-switching frequency, keeps your brain in a prolonged state of alertness, disrupting the natural cortisol curve.
            </p>
          </div>

          <div className="border border-slate-100 bg-white rounded-[2rem] p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-indigo-50">
                  <Moon className="w-7 h-7 text-indigo-500" />
            </div>
              <h3 className="text-xl font-semibold text-slate-900 tracking-tight">Sleep Architecture</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-[15px]">
              Blue light exposure delays melatonin, but cognitive arousal before bed disrupts deep REM cycles, preventing the nervous system from fully resetting.
            </p>
          </div>

          <div className="border border-slate-100 bg-white rounded-[2rem] p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-emerald-50">
                  <Brain className="w-7 h-7 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 tracking-tight">Productivity Impact</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-[15px]">
              Unmanaged chronic stress significantly reduces the Work Productivity and Activity Impairment (WPAI) score, leading to pervasive cognitive fatigue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}