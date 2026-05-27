import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Building2, Briefcase, BarChart3, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden selection:bg-primary/30 pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent-purple/20 blur-[120px] pointer-events-none"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-20 md:pt-32 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 hover:bg-white/10 transition-colors cursor-default"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-slate-300">A nova era do recrutamento chegou</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 max-w-4xl text-white"
        >
          Onde o talento excepcional encontra o <span className="text-gradient">futuro inovador.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
        >
          A JovemTech é a plataforma corporativa definitiva que usa inteligência e design para conectar mentes brilhantes às melhores oportunidades do mercado.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link to="/vagas" className="btn-premium group">
            Explorar Vagas
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/auth" className="btn-secondary">
            Acesso para Empresas
          </Link>
        </motion.div>
      </section>

      {/* Bento Grid Features Section */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bento-card md:col-span-2">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Empresas de Classe Mundial</h3>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Faça parte de times de engenharia, design e negócios que estão moldando o futuro da tecnologia e da sociedade global.
            </p>
          </div>

          <div className="bento-card">
            <div className="w-12 h-12 rounded-2xl bg-accent-purple/10 flex items-center justify-center mb-6 border border-accent-purple/20">
              <Briefcase className="w-6 h-6 text-accent-purple" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Conexão Veloz</h3>
            <p className="text-slate-400 leading-relaxed">
              Algoritmos que encontram o match perfeito entre os requisitos e o talento.
            </p>
          </div>

          <div className="bento-card md:col-span-3 flex flex-col md:flex-row items-center gap-12 p-8 md:p-12">
            <div className="flex-1">
              <div className="w-12 h-12 rounded-2xl bg-accent-cyan/10 flex items-center justify-center mb-6 border border-accent-cyan/20">
                <BarChart3 className="w-6 h-6 text-accent-cyan" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Gestão Inteligente</h3>
              <p className="text-slate-400 leading-relaxed max-w-xl text-lg">
                Um dashboard interativo e robusto para gerenciar centenas de candidaturas, visualizar métricas em tempo real e agilizar o pipeline de contratação.
              </p>
              <Link to="/auth" className="inline-flex items-center mt-8 text-sm font-semibold text-accent-cyan hover:text-white transition-colors group">
                Descubra a plataforma corporativa <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="flex-1 w-full relative">
              <div className="aspect-[16/10] md:aspect-[4/3] rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-800 border border-slate-700/50 shadow-2xl overflow-hidden relative group">
                 {/* Decorative elements representing dashboard UI */}
                 <div className="absolute inset-0 bg-grid opacity-30"></div>
                 <div className="absolute top-6 left-6 right-6 h-10 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm"></div>
                 <div className="absolute top-24 left-6 w-1/3 h-32 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-500"></div>
                 <div className="absolute top-24 right-6 w-[55%] h-32 bg-gradient-to-br from-primary/20 to-accent-purple/20 rounded-xl border border-white/10 backdrop-blur-sm opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                 <div className="absolute bottom-6 left-6 right-6 h-24 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="pt-6 md:pt-0"
            >
              <div className="text-5xl font-extrabold text-white mb-2 tracking-tighter text-glow">10k+</div>
              <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Talentos Ativos</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="pt-6 md:pt-0"
            >
              <div className="text-5xl font-extrabold text-white mb-2 tracking-tighter text-glow">500+</div>
              <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Empresas Parceiras</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-6 md:pt-0"
            >
              <div className="text-5xl font-extrabold text-white mb-2 tracking-tighter text-glow">98%</div>
              <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Taxa de Sucesso</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
