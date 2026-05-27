import { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

export default function AuthScreen() {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('tab') === 'register') {
      setIsLogin(false);
    }
  }, [location.search]);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('jovem');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');
    setLoading(true);
    try {
      if (isLogin) {
        const res = await axios.post('http://localhost:5000/api/auth/login', { email, senha });
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        navigate('/dashboard');
      } else {
        const res = await axios.post('http://localhost:5000/api/auth/register', { nome, email, senha, tipo });
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        navigate('/dashboard');
      }
    } catch (err) {
      setErro(err.response?.data?.error || 'Ocorreu um erro. Tenta novamente.');
    } finally {
      setLoading(false);
    }
  };

  const formContent = (
    <div className="relative z-10 flex flex-col gap-8">
      <div className="flex bg-surface-container-highest/50 p-1 rounded-xl relative overflow-hidden border border-outline-variant/20">
        <motion.div
          className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-surface rounded-lg border border-outline-variant/30 shadow-sm"
          initial={false}
          animate={{ x: isLogin ? 4 : '100%' }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        <button
          type="button"
          onClick={() => { setIsLogin(true); setErro(''); }}
          className={`flex-1 py-2 text-sm font-bold z-10 transition-colors ${isLogin ? 'text-primary' : 'text-on-surface-variant'}`}
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => { setIsLogin(false); setErro(''); }}
          className={`flex-1 py-2 text-sm font-bold z-10 transition-colors ${!isLogin ? 'text-primary' : 'text-on-surface-variant'}`}
        >
          Registo
        </button>
      </div>

      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 text-primary">
          <span className="material-symbols-outlined text-[32px]">{isLogin ? 'lock' : 'person_add'}</span>
        </div>
        <h1 className="text-3xl font-bold text-on-surface tracking-tight">{isLogin ? 'Bem-vindo de volta' : 'Criar Conta'}</h1>
        <p className="text-on-surface-variant mt-2 text-sm">{isLogin ? 'Acede ao teu painel de talentos ou recrutamento.' : 'Começa a tua jornada no ecossistema premium.'}</p>
      </div>

      {erro && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-error-container/50 border border-error/20 text-on-error-container p-3 rounded-lg text-sm text-center"
        >
          {erro}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <AnimatePresence mode="popLayout">
          {!isLogin && (
            <motion.div
              key="signup-fields"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              className="flex flex-col gap-4 overflow-hidden"
            >
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-on-surface">O que procuras?</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTipo('jovem')}
                    className={`py-3 px-4 rounded-xl border flex items-center justify-center gap-2 transition-all ${tipo === 'jovem' ? 'bg-primary/10 border-primary text-primary' : 'bg-surface border-outline-variant text-on-surface-variant hover:border-primary/50'}`}
                  >
                    <span className="material-symbols-outlined text-[20px]">person</span>
                    <span className="font-bold text-sm">Sou Talento</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTipo('empresa')}
                    className={`py-3 px-4 rounded-xl border flex items-center justify-center gap-2 transition-all ${tipo === 'empresa' ? 'bg-primary/10 border-primary text-primary' : 'bg-surface border-outline-variant text-on-surface-variant hover:border-primary/50'}`}
                  >
                    <span className="material-symbols-outlined text-[20px]">domain</span>
                    <span className="font-bold text-sm">Recrutador</span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-on-surface">Nome Completo</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">badge</span>
                  <input
                    type="text"
                    required={!isLogin}
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full bg-surface border border-outline-variant rounded-xl py-3 pl-12 pr-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-outline-variant"
                    placeholder="O teu Nome"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-on-surface">{isLogin ? 'Email' : 'Email Profissional'}</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">mail</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface border border-outline-variant rounded-xl py-3 pl-12 pr-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-outline-variant"
              placeholder={isLogin ? "nome@exemplo.com" : "exemplo@empresa.com"}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-bold text-on-surface">Palavra-passe</label>
            {isLogin && <a href="#" className="text-xs text-primary hover:underline">Esqueceste a passe?</a>}
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">{isLogin ? 'key' : 'lock_reset'}</span>
            <input
              type={showPassword ? "text" : "password"}
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full bg-surface border border-outline-variant rounded-xl py-3 pl-12 pr-12 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-outline-variant"
              placeholder={isLogin ? "••••••••" : "Mínimo 8 caracteres"}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors focus:outline-none"
            >
              <span className="material-symbols-outlined text-[20px]">
                {showPassword ? 'visibility_off' : 'visibility'}
              </span>
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`font-bold text-sm px-6 py-3.5 rounded-xl hover:scale-[1.02] duration-200 transition-all w-full mt-4 flex items-center justify-center gap-2 ${isLogin ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-on-surface text-surface shadow-lg'} disabled:opacity-50 disabled:hover:scale-100`}
        >
          {loading ? 'A processar...' : isLogin ? 'Entrar' : 'Criar Minha Conta'}
          {!loading && <span className="material-symbols-outlined text-[18px]">arrow_forward</span>}
        </button>
      </form>
    </div>
  );

  return (
    <div className="bg-background min-h-screen flex items-center justify-center p-4 md:p-8 text-on-surface relative overflow-hidden">
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-8 left-8 z-50"
      >
        <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-bold text-sm">
          <span className="material-symbols-outlined">arrow_back</span>
          Voltar
        </Link>
      </motion.div>

      {/* Decorative background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary-fixed opacity-30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary-fixed opacity-20 blur-[120px] pointer-events-none" />

      <motion.div
        layout
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="w-full max-w-5xl min-h-screen md:min-h-[600px] md:rounded-[40px] flex flex-col md:flex-row overflow-y-auto overflow-x-hidden md:border md:border-outline-variant/30 md:shadow-2xl relative bg-surface-container-lowest md:bg-surface-container-lowest z-10"
      >
        {/* Desktop: Left Brand Panel */}
        <div className="hidden md:flex md:w-1/2 relative bg-surface items-center justify-center p-12 border-r border-outline-variant/30">
          <div className="absolute inset-0 bg-linear-to-br from-surface via-surface to-primary/5"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-white text-[32px]">rocket_launch</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-primary tracking-tight leading-none">JovemTech</span>
                <span className="text-xs text-on-surface-variant tracking-[0.2em] mt-2 font-bold">TALENTOS ANGOLANOS</span>
              </div>
            </div>
            
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
              O ecossistema premium que conecta jovens talentos às melhores empresas de tecnologia em Angola. Acelera a tua carreira connosco.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
                <span className="text-on-surface text-sm font-medium">Oportunidades exclusivas</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">rocket_launch</span>
                <span className="text-on-surface text-sm font-medium">Impulsiona o teu perfil</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">handshake</span>
                <span className="text-on-surface text-sm font-medium">Conexão direta com recrutadores</span>
              </div>
            </div>

            {/* Testemunho minimalista */}
            <div className="mt-12 p-6 rounded-2xl bg-surface-container-highest/50 border border-outline-variant/20 relative">
              <span className="material-symbols-outlined absolute top-4 right-4 text-primary/20 text-[40px] pointer-events-none" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              <p className="text-sm text-on-surface italic relative z-10 mb-4">
                "A JovemTech mudou a forma como contrato talentos. Encontrei o meu lead developer em menos de uma semana!"
              </p>
              <div className="flex items-center gap-3">
                <img className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq21Ogn5SAvo8PiSN3ITFhbaoKy7VoGe_hEYsL8pKkD9BPo5BKpnUscepDzZWwRmXV8a2cTLmosVhbHEMjOVRv93J638gThklbdGHAZ3_rdPITPSuGvcWDRkVzxRjanc3QUmbJGREJvw3jz6PqMkmo7otMR_N53ZlUErEiRBeDud6ec92IBHsz1FGahsK6lrN5g7V_GUbXUF5IE5LZIZYaEZoLdDhHP_PcL84P36-yX1Ix1iUw2TfRu_xbRuwNiQWHt670wjmiHK8" alt="Mariana S." />
                <div>
                  <p className="text-xs font-bold text-on-surface">Mariana Silva</p>
                  <p className="text-[10px] text-on-surface-variant">Tech Recruiter @ Innovate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Top Header */}
        <div className="md:hidden flex flex-col items-center justify-center p-8 pt-20 relative overflow-hidden bg-surface">
          <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 mb-4 relative z-10">
            <span className="material-symbols-outlined text-white text-[28px]">rocket_launch</span>
          </div>
          <span className="text-3xl font-bold text-primary tracking-tight relative z-10">JovemTech</span>
          <span className="text-[10px] text-on-surface-variant tracking-[0.3em] mt-2 relative z-10 uppercase font-bold">Talentos Angolanos</span>
        </div>

        {/* Right Form Panel */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 relative bg-surface-container-lowest">
          <div className="w-full max-w-md relative z-10">
            {formContent}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
