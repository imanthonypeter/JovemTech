import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BlurText from '../components/ui/BlurText';

export default function LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, type: 'spring', bounce: 0.2 } 
    }
  };

  const steps = [
    { number: '01', title: 'Cria o teu Perfil', desc: 'Regista-te e adiciona as tuas skills, portfólio e experiência.' },
    { number: '02', title: 'Descobre Vagas', desc: 'Explora oportunidades exclusivas nas melhores empresas de Angola.' },
    { number: '03', title: 'Faz o Match', desc: 'Candidata-te com um clique e acompanha o estado do teu processo.' }
  ];

  const features = [
    { icon: 'person_search', title: 'Para Talentos', desc: 'Destaca-te no mercado com um perfil apelativo. Descobre vagas que combinam exatamente com as tuas skills tecnológicas e valores.' },
    { icon: 'domain', title: 'Para Empresas', desc: 'Encontra os melhores perfis juniores e estagiários. Publica vagas inovadoras e gere candidaturas num só painel.' },
    { icon: 'hub', title: 'Comunidade', desc: 'Conecta-te com outros estudantes. Partilha os teus projetos, faz networking e aprende com quem está no topo.' }
  ];

  return (
    <div className="bg-background text-on-surface font-body antialiased selection:bg-primary selection:text-white relative overflow-hidden pb-20 transition-colors duration-300">
      
      <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] rounded-full bg-primary opacity-[0.04] blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary opacity-[0.04] blur-[150px] pointer-events-none z-0" />

      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
        <div className="relative z-10 max-w-6xl w-full mx-auto px-6">
          <div className="flex flex-col gap-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.1 }}>
              <BlurText text="A revolução começa aqui" delay={0} className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-2 block" />
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-heading font-bold text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] tracking-tighter text-slate-900 dark:text-white">
              <span className="text-primary">Jovem</span>Tech<br/>
              <span className="text-slate-800 dark:text-slate-200 text-5xl md:text-7xl lg:text-[7rem] tracking-tight">O teu futuro.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.3 }} className="max-w-xl text-xl text-slate-600 dark:text-slate-400 mt-6 leading-relaxed font-medium">
              A plataforma Nº1 para talentos Tech em Angola. 
              Liga-te às empresas mais inovadoras e dá o salto na tua carreira.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex flex-wrap gap-4">
              <Link to="/auth">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-10 font-bold text-white shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all"
                >
                  <span className="relative text-lg">Criar Conta</span>
                </motion.button>
              </Link>
              <Link to="/vagas">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 border-slate-200 dark:border-slate-700 bg-transparent px-10 font-bold text-slate-900 dark:text-white transition-all hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <span className="relative text-lg">Explorar Vagas</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COMO FUNCIONA */}
      <section className="relative w-full py-24 md:py-32">
        <div className="max-w-6xl w-full mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="font-heading font-bold text-5xl md:text-7xl tracking-tight text-slate-900 dark:text-white">Como funciona</h2>
            <p className="text-slate-500 dark:text-slate-400 text-xl mt-4 font-semibold">Três passos simples para a tua nova oportunidade.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col gap-4 group"
              >
                <motion.span 
                  whileHover={{ scale: 1.1, x: 10 }}
                  className="font-heading font-bold text-7xl text-primary/10 transition-colors duration-500 group-hover:text-primary/30"
                >
                  {step.number}
                </motion.span>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURES (Cards) */}
      <section className="relative w-full py-24 bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] mx-4 md:mx-10 my-12 px-6 border border-transparent dark:border-slate-800">
        <div className="max-w-6xl w-full mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="text-center mb-20"
          >
            <h2 className="font-heading font-bold text-5xl md:text-7xl tracking-tight text-slate-900 dark:text-white">Para todo o ecossistema</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.15, type: 'spring' }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] dark:shadow-none border border-slate-100 dark:border-slate-700 cursor-default"
              >
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary shadow-inner"
                >
                  <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CAPABILITIES */}
      <section className="relative w-full py-20 md:py-24">
        <div className="max-w-5xl w-full mx-auto px-6 grid md:grid-cols-2 gap-6 md:gap-8">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl dark:shadow-none p-8 md:p-10 rounded-3xl flex flex-col justify-center"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-slate-900 dark:text-white tracking-tight">Tudo num só lugar</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed font-medium">
              Uma experiência de recrutamento desenhada para o futuro. Ignora o ruído e destaca as tuas skills onde realmente importa.
            </p>
            <ul className="space-y-4">
              {['Perfis de Talento Tech otimizados', 'Conexão direta com Empresas Top', 'Match inteligente com vagas'].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-4 text-slate-800 dark:text-slate-200 font-semibold text-base"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, type: 'spring', delay: 0.1 }}
            className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl flex flex-col justify-between shadow-2xl relative overflow-hidden group"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[60px] -translate-y-1/2 translate-x-1/4 pointer-events-none" 
            />
            
            <div className="relative z-10">
              <h3 className="font-heading font-bold text-4xl md:text-5xl mb-4 tracking-tight">Pronto para o próximo nível?</h3>
              <p className="text-white/70 text-lg mb-12 leading-relaxed">
                Junta-te a milhares de profissionais e empresas que já estão a transformar o cenário tecnológico em Angola.
              </p>
            </div>
            
            <Link to="/auth">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 flex items-center gap-4 cursor-pointer w-fit"
              >
                <div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center transition-all group-hover:bg-primary group-hover:border-primary group-hover:text-white bg-white/5 backdrop-blur-sm shadow-xl">
                  <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
                </div>
                <span className="text-lg font-bold uppercase tracking-widest text-white/90 group-hover:text-white transition-colors">
                  Criar Conta Grátis
                </span>
              </motion.div>
            </Link>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
