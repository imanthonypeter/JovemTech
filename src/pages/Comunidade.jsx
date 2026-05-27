import React from 'react';
import { motion } from 'framer-motion';

export default function Comunidade() {
  return (
    <div className="bg-background min-h-screen py-24 px-4 md:px-8 text-on-surface relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary-fixed opacity-30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary-fixed opacity-20 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 text-primary shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-[32px]">groups</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight mb-4">
            A Nossa Comunidade
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-on-surface-variant max-w-2xl mx-auto">
            Junta-te a milhares de jovens talentos de Angola. Partilha conhecimento, faz networking e constrói o teu futuro connosco.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="p-8 rounded-[32px] bg-surface-container-lowest border border-outline-variant/30 text-center hover:border-primary/50 transition-all hover:-translate-y-1 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
              <span className="material-symbols-outlined">forum</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-2">Fórum Ativo</h3>
            <p className="text-on-surface-variant text-sm">Discute as últimas tendências tech, tira dúvidas e ajuda outros jovens na nossa plataforma de fórum.</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="p-8 rounded-[32px] bg-primary text-white border border-primary text-center hover:-translate-y-1 transition-all shadow-lg shadow-primary/30">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined">event</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Eventos Exclusivos</h3>
            <p className="text-white/80 text-sm mb-6">Workshops, hackathons e meetups presenciais e virtuais organizados mensalmente.</p>
            <button className="bg-white text-primary px-6 py-2 rounded-full font-bold text-sm w-full hover:bg-surface transition-colors">Ver Agenda</button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="p-8 rounded-[32px] bg-surface-container-lowest border border-outline-variant/30 text-center hover:border-primary/50 transition-all hover:-translate-y-1 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
              <span className="material-symbols-outlined">hub</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-2">Networking</h3>
            <p className="text-on-surface-variant text-sm">Conecta-te com recrutadores e líderes de startups. O próximo convite para entrevista pode vir daqui.</p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="mt-12 p-8 md:p-12 rounded-[40px] bg-surface-container-highest/50 border border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold text-on-surface mb-2">Já no nosso Discord?</h2>
            <p className="text-on-surface-variant max-w-md">Temos canais de vagas em primeira mão, reviews de código e muito mais. Não fiques de fora.</p>
          </div>
          <button className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-[#5865F2]/20 transition-all hover:scale-105 whitespace-nowrap flex items-center gap-2">
            Entrar no Discord
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
