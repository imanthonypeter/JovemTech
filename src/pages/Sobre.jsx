import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BossImg from '../assets/Boss.jpeg';

// Componente 3D para scroll
const Scroll3DSection = ({ children, offset = ["0 1", "1.2 1"] }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);

  return (
    <div style={{ perspective: "1500px" }} className="w-full">
      <motion.div
        ref={ref}
        style={{
          rotateX,
          scale,
          opacity,
          y,
          transformStyle: "preserve-3d",
          transformOrigin: "top center"
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

const ProtectedSocialLink = ({ url, icon, label, iconHoverClass = "", borderHoverClass = "hover:border-primary/50", bgHoverClass = "hover:bg-primary/10" }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`group/btn flex items-center justify-center w-12 h-12 rounded-full bg-surface-container border border-outline-variant group-hover:border-primary/50 ${bgHoverClass} ${borderHoverClass} transition-all duration-300 cursor-pointer hover:scale-110 shadow-lg hover:shadow-xl active:scale-95`}
      title={label}
      aria-label={label}
    >
      <span className={`text-on-surface-variant group-hover:text-primary ${iconHoverClass} transition-colors duration-300`}>
        {icon}
      </span>
    </button>
  );
};

export default function Sobre() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Protected links loaded from env or directly
  const email = 'jovemtech@exemplo.ao';
  const links = {
    github: 'https://github.com/imanthonypeter',
    linkedin: 'https://www.linkedin.com/in/ant%C3%B3nio-pedro-05167a293/',
    instagram: 'https://www.instagram.com/imanthonypeter/',
    email: `mailto:${email}`
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background text-on-surface overflow-hidden pt-32 pb-32">

      {/* Background Noise & Grain */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Subtle Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-[100%] pointer-events-none opacity-50"></div>

      <main className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col gap-32">

        {/* HERO */}
        <section className="min-h-[50vh] flex flex-col justify-center relative">
          <motion.div style={{ y: heroY, opacity: heroOpacity }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 flex items-center gap-4"
            >
              <div className="w-12 h-px bg-primary"></div>
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold">A Nossa Visão</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-on-surface tracking-tighter leading-[0.9] max-w-4xl"
            >
              Conectando <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/50">o futuro de Angola.</span>
            </motion.h1>
          </motion.div>
        </section>

        {/* MANIFESTO / STORY COM SCROLL 3D */}
        <Scroll3DSection offset={["0 1", "0.8 1"]}>
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start glass-card p-12 md:p-16 rounded-[3rem] border border-outline-variant/30 relative overflow-hidden group shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="lg:col-span-4 relative z-10">
              <h2 className="text-2xl md:text-3xl font-light text-on-surface leading-tight">
                Nós rejeitamos o <br />
                <span className="font-bold text-primary drop-shadow-[0_0_15px_rgba(0,82,255,0.4)]">status quo.</span>
              </h2>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-8 relative z-10">
              <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed">
                A JovemTech nasceu de uma frustração simples: o talento em Angola está espalhado e as oportunidades são difíceis de encontrar. Decidimos mudar isso. Não somos apenas uma plataforma de emprego; somos um acelerador de carreiras.
              </p>
              <p className="text-lg text-on-surface-variant/80 leading-relaxed max-w-3xl">
                Cada funcionalidade que desenvolvemos tem um único objetivo: conectar o melhor talento jovem às empresas mais inovadoras do mercado tecnológico. Unimos um design corporativo e intuitivo a um motor inteligente para garantir que nenhuma oportunidade passe despercebida.
              </p>
            </div>
          </section>
        </Scroll3DSection>

        {/* THE FOUNDER SECTION COM SCROLL 3D */}
        <Scroll3DSection offset={["0 1", "1 1"]}>
          <section className="py-10 relative mb-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] bg-gradient-to-tr from-primary/10 to-transparent blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 p-1 border border-outline-variant/30 rounded-[2.5rem] overflow-hidden group shadow-2xl transition-transform hover:scale-[1.01] duration-500 bg-surface-container">
              <div className="bg-surface-container-lowest/80 backdrop-blur-3xl rounded-[2.4rem] p-8 md:p-16 border border-outline-variant/10 flex flex-col md:flex-row gap-12 md:gap-20 items-center">

                {/* Founder Image Wrapper */}
                <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative">
                  <div className="absolute z-0 inset-0 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/40 transition-colors duration-700"></div>
                  <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-outline-variant group-hover:border-primary/50 transition-colors duration-500 shadow-[0_0_30px_rgba(0,82,255,0.1)] group-hover:shadow-[0_0_50px_rgba(0,82,255,0.3)]">
                    <img
                      src={BossImg}
                      alt="Fundador"
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Founder Info */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 relative z-10">
                  <span className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-3 shadow-primary">Fundador & CEO</span>
                  <h3 className="text-4xl md:text-5xl font-bold text-on-surface mb-6 tracking-tight">António Pedro</h3>

                  <p className="text-on-surface-variant leading-relaxed mb-10 max-w-xl text-lg font-light">
                    "O talento dita o potencial, mas a oportunidade dita o sucesso. Na JovemTech, não queremos apenas preencher vagas. Queremos construir carreiras de excelência e potenciar o futuro corporativo."
                  </p>

                  <div className="flex items-center gap-4">
                    <ProtectedSocialLink
                      url={links.github}
                      label="GitHub"
                      iconHoverClass="group-hover/btn:!text-on-surface"
                      borderHoverClass="hover:border-on-surface"
                      bgHoverClass="hover:bg-on-surface/10"
                      icon={
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      }
                    />
                    <ProtectedSocialLink
                      url={links.linkedin}
                      label="LinkedIn"
                      iconHoverClass="group-hover/btn:!text-[#0a66c2]"
                      borderHoverClass="hover:!border-[#0a66c2]/50"
                      bgHoverClass="hover:bg-[#0a66c2]/10"
                      icon={
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      }
                    />
                    <ProtectedSocialLink
                      url={links.instagram}
                      label="Instagram"
                      iconHoverClass=""
                      borderHoverClass="hover:!border-[#E1306C]/50"
                      bgHoverClass="hover:bg-[#E1306C]/10"
                      icon={
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 group-hover/btn:stroke-[url(#ig-grad)]!">
                          <defs>
                            <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#f09433" />
                              <stop offset="25%" stopColor="#e6683c" />
                              <stop offset="50%" stopColor="#dc2743" />
                              <stop offset="75%" stopColor="#cc2366" />
                              <stop offset="100%" stopColor="#bc1888" />
                            </linearGradient>
                          </defs>
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      }
                    />
                    <ProtectedSocialLink
                      url={links.email}
                      label="Email"
                      iconHoverClass=""
                      borderHoverClass="hover:!border-[#EA4335]/50"
                      bgHoverClass="hover:bg-[#EA4335]/10"
                      icon={
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 group-hover/btn:stroke-[url(#gmail-grad)]!">
                          <defs>
                            <linearGradient id="gmail-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#4285F4" />
                              <stop offset="33%" stopColor="#EA4335" />
                              <stop offset="66%" stopColor="#FBBC05" />
                              <stop offset="100%" stopColor="#34A853" />
                            </linearGradient>
                          </defs>
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Scroll3DSection>

      </main>
    </div>
  );
}
