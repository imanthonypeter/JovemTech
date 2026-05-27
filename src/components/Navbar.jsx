import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const token = localStorage.getItem('token');
  const userStr = localStorage.getItem('user');
  let user = null;
  try {
    user = userStr ? JSON.parse(userStr) : null;
  } catch(e) {}

  return (
    <header className="bg-surface/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/30 shadow-sm">
      <div className="flex justify-between items-center px-gutter h-16 max-w-container-max mx-auto">
        <div className="flex items-center gap-md">
          <Link to="/" className="flex items-center gap-md cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-white text-[20px]">rocket_launch</span>
            </div>
            <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">JovemTech</span>
          </Link>
          
          <div className="ml-xl hidden md:flex items-center gap-lg h-full pt-1">
            <Link className={`font-body-md text-body-md transition-all duration-200 px-sm h-full flex items-center ${location.pathname === '/sobre' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high/50 rounded-md'}`} to="/sobre">Sobre Nós</Link>
            <Link className={`font-body-md text-body-md transition-all duration-200 px-sm h-full flex items-center ${location.pathname === '/contactos' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high/50 rounded-md'}`} to="/contactos">Contactos</Link>
            <Link className={`font-body-md text-body-md transition-all duration-200 px-sm h-full flex items-center ${location.pathname === '/comunidade' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high/50 rounded-md'}`} to="/comunidade">Comunidade</Link>
            <Link className={`font-body-md text-body-md transition-all duration-200 px-sm h-full flex items-center ${location.pathname === '/faq' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high/50 rounded-md'}`} to="/faq">FAQ</Link>
            {token && (
              <>
                <Link className={`font-body-md text-body-md transition-all duration-200 px-sm h-full flex items-center ${location.pathname === '/dashboard' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high/50 rounded-md'}`} to="/dashboard">Dashboard</Link>
                <Link className={`font-body-md text-body-md transition-all duration-200 px-sm h-full flex items-center ${location.pathname === '/vagas' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high/50 rounded-md'}`} to="/vagas">Vagas</Link>
              </>
            )}
            {user?.tipo === 'empresa' && (
              <Link className={`font-body-md text-body-md transition-all duration-200 px-sm py-xs rounded-md h-full flex items-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high/50`} to="/nova-vaga">Nova Vaga</Link>
            )}
          </div>
        </div>

        <div className="flex items-center gap-md">
          {token ? (
            <>
              <button aria-label="notifications" className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container-low">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button aria-label="chat" className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container-low">
                <span className="material-symbols-outlined">chat_bubble</span>
              </button>
              <button aria-label="settings" className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container-low">
                <span className="material-symbols-outlined">settings</span>
              </button>
              <div 
                className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant cursor-pointer hover:border-primary transition-colors bg-primary flex items-center justify-center"
                onClick={() => {
                  localStorage.removeItem('token');
                  localStorage.removeItem('user');
                  navigate('/auth');
                }}
                title="Sair"
              >
                <span className="material-symbols-outlined text-white text-[18px]">logout</span>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-sm">
              <Link to="/auth" className="font-label-md text-label-md text-primary hover:bg-surface-container-low px-4 py-2 rounded-xl transition-colors">
                Login
              </Link>
              <Link to="/auth?tab=register" className="bg-primary hover:bg-primary/90 font-label-md text-label-md text-white px-4 py-2 rounded-xl shadow-sm transition-all">
                Criar Conta
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
