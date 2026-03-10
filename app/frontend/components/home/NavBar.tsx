import Link from "next/link";

export default function NavBar() {
  return (
    <header className="border-b border-slate-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#4A90E2] flex items-center justify-center text-white font-bold text-sm">B</div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">Bronco Health</span>
        </div>
        
        {/* Links Section */}
        <div className="flex items-center gap-8">
          <Link href="#methodology" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            How it Works
          </Link>
        </div>
        
      </nav>
    </header>
  );
}