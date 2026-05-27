import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { Briefcase } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  const isDarkBg = location.pathname === '/'; // Landing page has dark background

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className={cn(
        "glass-pill rounded-full px-6 py-3 flex items-center justify-between w-full max-w-4xl transition-all duration-500",
        isDarkBg ? "" : "bg-white/80 border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl"
      )}>
        <Link 
          to="/" 
          className={cn(
            "font-extrabold text-xl tracking-tight flex items-center gap-2",
            isDarkBg ? "text-white" : "text-slate-900"
          )}
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <Briefcase className="w-4 h-4 text-white" />
          </div>
          JovemTech
        </Link>
        
        <div className="hidden md:flex items-center space-x-1">
          <NavLink to="/dashboard" active={location.pathname === '/dashboard'} isDark={isDarkBg}>Dashboard</NavLink>
          <NavLink to="/vagas" active={location.pathname === '/vagas'} isDark={isDarkBg}>Vagas</NavLink>
          <Link 
            to="/nova-vaga" 
            className={cn(
              "ml-4 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
              isDarkBg 
                ? "bg-white text-background hover:bg-slate-200 shadow-lg shadow-white/10" 
                : "bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg"
            )}
          >
            Nova Vaga
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ to, children, active, isDark }) {
  return (
    <Link 
      to={to} 
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium transition-colors relative",
        isDark 
          ? (active ? "text-white bg-white/10" : "text-slate-400 hover:text-white hover:bg-white/5")
          : (active ? "text-slate-900 bg-slate-100" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50")
      )}
    >
      {children}
    </Link>
  );
}

export default Navbar;
