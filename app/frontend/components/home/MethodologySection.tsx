import { Database, Cpu, LineChart } from "lucide-react";

export default function MethodologySection() {
  return (
    <section id="methodology" className="bg-slate-900 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-medium tracking-tight mb-4">Clinical Precision. Transparent Analytics.</h2>
          <p className="text-slate-400 text-lg">
            We don't just guess your stress levels. Our proprietary classification model processes your behavioral data with a 94% predictive accuracy compared to clinical baselines.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-slate-800/50 p-8 rounded-[2rem] border border-slate-700">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
              <Database className="text-blue-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium mb-3">1. Multi-Modal Input</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              We securely collect your digital footprint (app usage, screen time), biological markers (sleep, caffeine), and subjective productivity scores (WPAI).
            </p>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-[2rem] border border-slate-700">
            <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-6">
              <Cpu className="text-indigo-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium mb-3">2. Algorithmic Scaling</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Your data passes through our standardized inference pipeline, aligning your unique inputs against thousands of clinical data points to prevent bias.
            </p>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-[2rem] border border-slate-700">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
              <LineChart className="text-emerald-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium mb-3">3. Actionable Output</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              The model classifies your stress vector and triggers our AI engine to generate highly personalized, empathetic mitigation strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}