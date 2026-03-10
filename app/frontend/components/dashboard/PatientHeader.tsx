"use client";
import { UserCircle } from "lucide-react";

export default function PatientHeader({ data }: { data: any }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 bg-white border-b border-slate-100 rounded-t-[2rem]">
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm">
          <UserCircle className="w-12 h-12 text-slate-300" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">{data.name}</h2>
          <div className="flex gap-4 mt-1 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <span>{data.age} Y/O</span>
            <span>•</span>
            <span>{data.gender}</span>
            <span>•</span>
            <span className="text-blue-500">{data.occupation}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-0 px-5 py-2 bg-slate-50 rounded-xl border border-slate-100">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Reference ID</p>
        <p className="font-mono text-sm text-slate-600 uppercase">CS-{Math.random().toString(36).substr(2, 9)}</p>
      </div>
    </div>
  );
}