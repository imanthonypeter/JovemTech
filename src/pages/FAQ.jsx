import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "O que é a JovemTech?",
      a: "A JovemTech é a principal plataforma de conexão entre jovens talentos angolanos e as melhores empresas do sector tecnológico. Focamo-nos em proporcionar oportunidades reais de emprego e networking."
    },
    {
      q: "Como talento, pago alguma coisa?",
      a: "Não. O registo, a candidatura a vagas e o acesso à comunidade são 100% gratuitos para os jovens talentos. Apenas as empresas pagam para publicar vagas e usar ferramentas avançadas de recrutamento."
    },
    {
      q: "Que tipo de empresas contratam por aqui?",
      a: "Temos desde startups inovadoras a grandes corporações e bancos em Angola, focados em áreas como Engenharia de Software, Design UX/UI, Cibersegurança e Data Science."
    },
    {
      q: "A plataforma funciona para estágios?",
      a: "Sim! Podes filtrar as vagas especificamente para programas de estágio, entry-level, júnior ou posições mais séniores dependendo da tua experiência."
    },
    {
      q: "Como as empresas acedem ao meu perfil?",
      a: "Após criares a tua conta e preencheres o teu perfil e currículo, os recrutadores das empresas podem pesquisar na nossa base de talentos e contactar-te diretamente através da plataforma."
    }
  ];

  return (
    <div className="bg-background min-h-screen py-24 px-4 md:px-8 text-on-surface relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary-fixed opacity-30 blur-[120px] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 text-primary shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-[32px]">help</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl font-bold text-on-surface tracking-tight mb-4">
            Perguntas Frequentes
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-on-surface-variant">
            Tudo o que precisas de saber sobre como a JovemTech funciona.
          </motion.p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1) }}
              className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest overflow-hidden transition-colors hover:border-primary/30"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-primary' : 'text-on-surface'}`}>{faq.q}</span>
                <span className={`material-symbols-outlined transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : 'text-on-surface-variant'}`}>
                  expand_more
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-on-surface-variant leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-12 text-center p-8 bg-surface-container-highest/30 rounded-3xl border border-outline-variant/20">
          <p className="text-on-surface-variant mb-4">Ainda tens dúvidas?</p>
          <a href="/contactos" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20">
            Falar com o Suporte
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
