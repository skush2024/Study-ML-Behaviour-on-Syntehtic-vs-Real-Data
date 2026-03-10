import Link from "next/link";
import { Activity, Brain, Quote } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
      {/* Left Side: Copy & Call to Action */}
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
          <Activity size={16} /> Clinical Stress Analytics
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-slate-950 leading-[1.1]">
          Your digital life shouldn't <br className="hidden md:block"/> cost your mental peace.
        </h1>
        
        <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
          Developed using leading clinical insights, Bronco Health analyzes how screen time, sleep architecture, and workload affect your nervous system.
        </p>

        {/* Social Proof */}
        <div className="flex items-center gap-4 bg-white p-5 rounded-3xl shadow-inner border border-slate-100 max-w-sm">
          <div className="flex -space-x-4">
            {[...Array(3)].map((_, i) => (
              <img key={i} src={`https://randomuser.me/api/portraits/men/${30+i}.jpg`} alt="user" className="w-10 h-10 rounded-full border-2 border-white" />
            ))}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Join 15,000+ professionals</p>
            <p className="text-xs text-slate-500">Restoring balance with Bronco Health.</p>
          </div>
        </div>

        <Link href="/assessment" className="inline-block">
          <button className="bg-[#4A90E2] hover:bg-[#3A7BC8] text-white rounded-full px-10 py-5 text-lg shadow-sm transition-all tracking-tight font-medium">
            Begin Your Wellness Assessment
          </button>
        </Link>
      </div>

      {/* Right Side: Mind-state Visualization */}
      <div className="aspect-[1.1] relative bg-white/50 p-6 rounded-[3rem] shadow-xl border border-white">
        <div className="w-full h-full bg-white rounded-[2rem] p-6 flex flex-col justify-between shadow-inner overflow-hidden">
          <div className="flex justify-between items-center">
            <span className="text-xs font-medium text-slate-400">Mind-state Visualization™</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium">Synced</span>
          </div>
          
          <div className="relative flex-grow my-6 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-50/50 rounded-full scale-105 blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop" 
              alt="Mental health visualization" 
              className="w-full h-full object-cover rounded-2xl relative z-10"
            />
            <div className="absolute bottom-4 left-4 z-20 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-white">
              <Brain className="w-6 h-6 text-[#4A90E2]"/>
            </div>
          </div>

          <div className="text-center italic text-slate-500 text-sm">
            <Quote className="w-4 h-4 text-slate-300 inline mr-1 rotate-180" /> Measuring autonomic stability via multi-modal data.
          </div>
        </div>
      </div>
    </section>
  );
}