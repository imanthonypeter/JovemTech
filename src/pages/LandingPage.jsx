import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const { scrollY } = useScroll();
  
  // Efeitos 3D e Parallax no Hero ligados ao scroll
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.85]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroRotateX = useTransform(scrollY, [0, 500], [0, 20]);

  return (
    <div className="bg-background text-on-surface font-body-md antialiased min-h-screen overflow-hidden relative">
      
      {/* Background ambient glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary opacity-20 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary opacity-10 blur-[150px] pointer-events-none z-0" />

      <main className="relative z-10 flex flex-col items-center">
        
        {/* HERO SECTION */}
        <motion.section 
          style={{ scale: heroScale, opacity: heroOpacity, y: heroY, rotateX: heroRotateX, perspective: '1200px' }}
          className="w-full min-h-[70vh] flex flex-col items-center justify-center pt-24 pb-16 px-gutter max-w-container-max mx-auto text-center origin-top"
        >
          <motion.div 
            initial={{ opacity: 0, rotateX: -20, y: 40, z: -100 }} 
            animate={{ opacity: 1, rotateX: 0, y: 0, z: 0 }} 
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-md text-sm mb-8 shadow-[0_0_20px_rgba(var(--primary),0.2)]"
            >
              <span className="material-symbols-outlined text-[16px] animate-pulse">stars</span>
              A Plataforma Nº1 para Talentos Tech em Angola
            </motion.div>
            
            <h1 className="text-display-md md:text-[64px] font-bold text-on-surface leading-[1.1] tracking-tight mb-6">
              Onde os Jovens Talentos encontram as <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">Melhores Empresas</span>
            </h1>
            
            <p className="font-body-lg text-lg md:text-xl text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed">
              A JovemTech conecta mentes brilhantes às oportunidades certas. Cria o teu perfil, explora vagas exclusivas e acelera a tua carreira no mundo da tecnologia.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/auth">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -10px rgba(var(--primary), 0.5)", y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="gradient-btn text-white font-label-lg text-label-lg py-4 px-8 rounded-xl shadow-lg flex items-center gap-3 w-full sm:w-auto justify-center transition-all"
                >
                  Começar Agora
                  <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                </motion.button>
              </Link>
              <Link to="/vagas">
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "var(--surface-container-low)", y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="bg-surface border-2 border-outline-variant/50 text-on-surface font-label-lg text-label-lg py-4 px-8 rounded-xl transition-all w-full sm:w-auto justify-center flex items-center gap-2"
                >
                  Explorar Vagas
                  <span className="material-symbols-outlined text-[20px]">search</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.section>

        {/* FEATURES SECTION (3D Hover Cards & Reveal) */}
        <motion.section 
          initial={{ opacity: 0, y: 100, rotateX: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ perspective: '1200px' }}
          className="w-full min-h-screen flex flex-col items-center justify-center py-24 px-gutter max-w-container-max mx-auto"
        >
          <div className="text-center mb-24">
            <h2 className="text-display-md md:text-[56px] font-bold text-on-surface mb-6">Tudo o que precisas num só lugar</h2>
            <p className="font-body-xl text-xl text-on-surface-variant max-w-3xl mx-auto">
              Uma experiência de recrutamento virada para o futuro, desenhada para destacar as tuas skills reais e ignorar o ruído.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 80, rotateX: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -15, scale: 1.02, rotateX: 5, rotateY: -5 }}
              className="glass-card p-10 rounded-[2rem] flex flex-col items-start transition-all duration-300 hover:shadow-[0_30px_50px_-15px_rgba(var(--primary),0.3)] border border-primary/20 bg-surface/50 backdrop-blur-xl origin-bottom"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center mb-6 shadow-[0_10px_20px_rgba(var(--primary),0.2)]">
                <span className="material-symbols-outlined text-on-primary text-[32px]">person_search</span>
              </div>
              <h3 className="font-display-sm text-[24px] font-bold mb-3">Para Talentos</h3>
              <p className="text-on-surface-variant text-base leading-relaxed">
                Destaca-te no mercado com um perfil apelativo. Descobre vagas que combinam exatamente com as tuas skills tecnológicas e valores.
              </p>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 80, rotateX: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -15, scale: 1.02, rotateX: 5, rotateY: 0 }}
              className="glass-card p-10 rounded-[2rem] flex flex-col items-start transition-all duration-300 hover:shadow-[0_30px_50px_-15px_rgba(var(--secondary),0.3)] border border-secondary/20 bg-surface/50 backdrop-blur-xl origin-bottom"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary-container flex items-center justify-center mb-6 shadow-[0_10px_20px_rgba(var(--secondary),0.2)]">
                <span className="material-symbols-outlined text-on-secondary text-[32px]">domain</span>
              </div>
              <h3 className="font-display-sm text-[24px] font-bold mb-3">Para Empresas</h3>
              <p className="text-on-surface-variant text-base leading-relaxed">
                Encontra os melhores perfis juniores e estagiários. Publica vagas inovadoras e gere todo o funil de candidaturas num só painel.
              </p>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 80, rotateX: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -15, scale: 1.02, rotateX: 5, rotateY: 5 }}
              className="glass-card p-10 rounded-[2rem] flex flex-col items-start transition-all duration-300 hover:shadow-[0_30px_50px_-15px_rgba(var(--tertiary),0.3)] border border-tertiary/20 bg-surface/50 backdrop-blur-xl origin-bottom"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tertiary to-tertiary-container flex items-center justify-center mb-6 shadow-[0_10px_20px_rgba(var(--tertiary),0.2)]">
                <span className="material-symbols-outlined text-on-tertiary text-[32px]">hub</span>
              </div>
              <h3 className="font-display-sm text-[24px] font-bold mb-3">Comunidade</h3>
              <p className="text-on-surface-variant text-base leading-relaxed">
                Conecta-te com outros estudantes. Partilha os teus projetos de laboratório no feed, faz networking e aprende com quem está no topo.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA / STATS SECTION (3D Transform Reveal) */}
        <motion.section
          initial={{ opacity: 0, y: 100, rotateX: 40, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.9, type: "spring", bounce: 0.3 }}
          style={{ perspective: '1200px' }}
          className="w-full py-16 px-gutter max-w-container-max mx-auto mb-16 origin-bottom"
        >
          <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-surface-container-highest border border-outline-variant/50 p-10 md:p-14 text-center shadow-xl group">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
             
             {/* Animated floating elements in background */}
             <motion.div 
               animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-5 left-10 w-24 h-24 bg-primary/20 rounded-full blur-[30px]" 
             />
             <motion.div 
               animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-5 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-[40px]" 
             />

             <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-display-sm md:text-[48px] font-bold text-on-surface mb-6 leading-tight">
                  Pronto para dar o salto?
                </h2>
                <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
                  Junta-te a milhares de jovens e empresas que já estão a revolucionar o mercado de trabalho tecnológico. A tua próxima grande oportunidade está a um clique de distância.
                </p>
                <Link to="/auth">
                  <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -10px rgba(var(--primary), 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="gradient-btn text-white font-bold text-lg py-4 px-12 rounded-full shadow-lg flex items-center gap-3"
                  >
                    Criar Perfil Grátis
                    <span className="material-symbols-outlined text-[24px]">flash_on</span>
                  </motion.button>
                </Link>
             </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}
