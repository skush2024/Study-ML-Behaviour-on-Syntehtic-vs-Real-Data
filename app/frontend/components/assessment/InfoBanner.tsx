import { Lightbulb } from "lucide-react";

export default function InfoBanner({ title, text }: { title: string, text: string }) {
  return (
    <div className="bg-blue-50/50 border border-blue-100/50 rounded-2xl p-4 flex gap-4 mt-6">
      <div className="p-2 bg-blue-100/50 rounded-full h-fit">
        <Lightbulb className="w-5 h-5 text-blue-600" />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-slate-800 tracking-tight">{title}</h4>
        <p className="text-sm text-slate-600 leading-relaxed mt-1">{text}</p>
      </div>
    </div>
  );
}