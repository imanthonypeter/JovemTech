import { Briefcase } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-6 md:mb-0 opacity-80 hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-slate-400" />
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-tight">JovemTech</span>
              <p className="text-[10px] mt-0.5 text-slate-500 font-bold uppercase tracking-widest">Connect . Build . Scale</p>
            </div>
          </div>
          <div className="flex space-x-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Platform</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
