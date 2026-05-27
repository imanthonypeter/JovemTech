import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ui/ThemeToggle';
import { Button } from './ui/Button';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const token = localStorage.getItem('token');
  const userStr = localStorage.getItem('user');
  let user = null;
  try {
    user = userStr ? JSON.parse(userStr) : null;
  } catch(e) {}

  const navLinks = [
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Contactos', path: '/contactos' },
    { name: 'Comunidade', path: '/comunidade' },
    { name: 'FAQ', path: '/faq' },
  ];

  const authLinks = [
    { name: 'Dashboard', path: '/dashboard' },
  ];
  
  if (user?.tipo === 'jovem') {
    authLinks.push({ name: 'Vagas', path: '/vagas' });
  }

  return (
    <header className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
      <div className="flex justify-between items-center px-4 md:px-6 h-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all group-hover:scale-105">
              <span className="material-symbols-outlined text-white text-[20px]">rocket_launch</span>
            </div>
            <span className="text-xl font-bold text-blue-600 dark:text-blue-500 tracking-tight">JovemTech</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 h-full ml-4">
            {navLinks.map(link => (
              <Link 
                key={link.path}
                className={`text-sm font-medium transition-all duration-200 px-4 py-2 rounded-lg ${location.pathname === link.path ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-800'}`} 
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
            
            {token && authLinks.map(link => (
              <Link 
                key={link.path}
                className={`text-sm font-medium transition-all duration-200 px-4 py-2 rounded-lg ${location.pathname === link.path ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-800'}`} 
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
            {user?.tipo === 'empresa' && (
              <Link className="text-sm font-medium transition-all duration-200 px-4 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-800" to="/nova-vaga">
                Nova Vaga
              </Link>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />

          {token ? (
            <div className="hidden md:flex items-center gap-1">
              <button aria-label="notifications" className="flex items-center justify-center w-10 h-10 text-slate-500 hover:text-blue-600 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span className="material-symbols-outlined text-[22px]">notifications</span>
              </button>
              <button aria-label="chat" className="flex items-center justify-center w-10 h-10 text-slate-500 hover:text-blue-600 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span className="material-symbols-outlined text-[22px]">chat_bubble</span>
              </button>
              <div 
                className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-blue-500 transition-all bg-blue-600 flex items-center justify-center hover:scale-105 ml-2 shadow-sm"
                onClick={() => {
                  localStorage.removeItem('token');
                  localStorage.removeItem('user');
                  navigate('/auth');
                }}
                title="Sair"
              >
                <span className="material-symbols-outlined text-white text-[20px] ml-1">logout</span>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <Link to="/auth" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 px-4 py-2 rounded-lg transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Login
              </Link>
              <Button onClick={() => navigate('/auth?tab=register')} className="!py-2 !px-4 !rounded-lg text-sm !shadow-none">
                Criar Conta
              </Button>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {[...navLinks, ...(token ? authLinks : [])].map(link => (
                <Link 
                  key={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors px-4 py-3 rounded-lg ${location.pathname === link.path ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'}`} 
                  to={link.path}
                >
                  {link.name}
                </Link>
              ))}
              
              {user?.tipo === 'empresa' && (
                <Link onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium transition-colors px-4 py-3 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800" to="/nova-vaga">
                  Nova Vaga
                </Link>
              )}

              {!token ? (
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link 
                    onClick={() => setIsMobileMenuOpen(false)}
                    to="/auth" 
                    className="text-center text-sm font-medium text-slate-600 dark:text-slate-300 py-3 rounded-lg bg-slate-50 dark:bg-slate-800"
                  >
                    Login
                  </Link>
                  <Button onClick={() => { setIsMobileMenuOpen(false); navigate('/auth?tab=register'); }} className="w-full">
                    Criar Conta
                  </Button>
                </div>
              ) : (
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button 
                    className="w-full flex items-center justify-center gap-2 text-red-500 font-medium py-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      localStorage.removeItem('token');
                      localStorage.removeItem('user');
                      navigate('/auth');
                    }}
                  >
                    <span className="material-symbols-outlined text-[18px]">logout</span>
                    Sair da Conta
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
