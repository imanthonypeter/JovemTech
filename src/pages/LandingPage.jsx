import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BlurText from '../components/ui/BlurText';
import ScrollVideo3D from '../components/ui/ScrollVideo3D';

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
    <div className="relative min-h-screen w-full font-body antialiased selection:bg-primary selection:text-white pb-20">
      <ScrollVideo3D src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4" />
      
      <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] rounded-full bg-primary opacity-[0.08] blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary opacity-[0.08] blur-[150px] pointer-events-none z-0" />

      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
        <div className="relative z-10 max-w-6xl w-full mx-auto px-6">
          <div className="flex flex-col gap-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.1 }}>
              <BlurText text="A revolução começa aqui" delay={0} className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-2 block drop-shadow-md" />
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-['Geist'] font-bold text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] tracking-tighter text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
              <span className="text-primary drop-shadow-[0_0_15px_rgba(0,62,199,0.5)]">Jovem</span>Tech<br/>
              <span className="text-white/90 text-5xl md:text-7xl lg:text-[7rem] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]">O teu futuro.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.3 }} className="font-['Inter'] max-w-xl text-xl md:text-2xl text-slate-100 mt-8 leading-relaxed font-medium drop-shadow-lg">
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
                  className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-md px-10 font-bold text-white transition-all hover:border-white/40 hover:bg-white/10"
                >
                  <span className="relative text-lg">Explorar Vagas</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 1.5: MISSÃO */}
      <section className="relative w-full py-16 md:py-24 z-10">
        <div className="max-w-6xl w-full mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{ type: 'spring', bounce: 0.5, delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-8 border border-primary/30 shadow-inner"
            >
              <span className="material-symbols-outlined text-4xl text-primary drop-shadow-md">rocket_launch</span>
            </motion.div>
            
            <h2 className="font-['Geist'] font-bold text-4xl md:text-5xl text-white tracking-tight mb-6 drop-shadow-lg">A Nossa Missão</h2>
            <p className="text-xl md:text-3xl font-['Inter'] text-slate-200 leading-relaxed font-medium max-w-4xl drop-shadow-md">
              Empoderar a nova geração de talentos tecnológicos em Angola, fechando o gap entre o potencial jovem e as empresas inovadoras que estão a construir o nosso futuro digital.
            </p>
          </motion.div>
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
            <h2 className="font-heading font-bold text-5xl md:text-7xl tracking-tight text-white drop-shadow-lg">Como funciona</h2>
            <p className="text-slate-300 text-xl mt-4 font-semibold drop-shadow">Três passos simples para a tua nova oportunidade.</p>
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
                  className="font-heading font-bold text-7xl text-white/10 transition-colors duration-500 group-hover:text-primary/50"
                >
                  {step.number}
                </motion.span>
                <h3 className="text-2xl font-bold tracking-tight text-white drop-shadow">{step.title}</h3>
                <p className="text-slate-300 leading-relaxed text-lg font-medium drop-shadow">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURES (Cards) */}
      <section className="relative w-full py-24 bg-slate-950/40 backdrop-blur-2xl rounded-[3rem] mx-4 md:mx-10 my-12 px-6 border border-white/10 shadow-2xl">
        <div className="max-w-6xl w-full mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="text-center mb-20"
          >
            <h2 className="font-heading font-bold text-5xl md:text-7xl tracking-tight text-white drop-shadow-lg">Para todo o ecossistema</h2>
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
                className="bg-white/5 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/10 cursor-default hover:bg-white/10 transition-colors"
              >
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-8 text-primary shadow-inner border border-primary/20"
                >
                  <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed text-lg font-medium">{feature.desc}</p>
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
            className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-8 md:p-10 rounded-3xl flex flex-col justify-center"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-white tracking-tight">Tudo num só lugar</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed font-medium">
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
                  className="flex items-center gap-4 text-white font-semibold text-base"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary shrink-0">
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
            className="bg-slate-900/80 backdrop-blur-xl border border-white/10 text-white p-8 md:p-10 rounded-3xl flex flex-col justify-between shadow-2xl relative overflow-hidden group"
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
