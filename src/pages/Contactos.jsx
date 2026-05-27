import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contactos() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação do envio
    setTimeout(() => {
      setEnviado(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setEnviado(false), 3000);
    }, 1000);
  };

  const formContent = (
    <div className="relative z-10 flex flex-col gap-8">
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 text-primary">
          <span className="material-symbols-outlined text-[32px]">mail</span>
        </div>
        <h1 className="text-3xl font-bold text-on-surface tracking-tight">Fala Connosco</h1>
        <p className="text-on-surface-variant mt-2 text-sm">
          Dúvidas, parcerias ou suporte? A nossa equipa está pronta para ajudar.
        </p>
      </div>

      {enviado && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-primary/20 border border-primary/50 text-primary p-3 rounded-lg text-sm text-center font-semibold"
        >
          Mensagem enviada com sucesso!
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-on-surface">Nome Completo</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">person</span>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-surface border border-outline-variant rounded-xl py-3 pl-12 pr-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-outline-variant"
              placeholder="O teu nome"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-on-surface">Email</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">mail</span>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-surface border border-outline-variant rounded-xl py-3 pl-12 pr-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-outline-variant"
              placeholder="exemplo@email.com"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-on-surface">Assunto</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">chat_bubble</span>
            <input
              type="text"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full bg-surface border border-outline-variant rounded-xl py-3 pl-12 pr-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-outline-variant"
              placeholder="Motivo do contacto"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-on-surface">Mensagem</label>
          <div className="relative">
            <textarea
              required
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-surface border border-outline-variant rounded-xl py-3 px-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-outline-variant resize-none"
              placeholder="Escreve aqui a tua mensagem..."
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="font-bold text-sm px-6 py-3.5 rounded-xl hover:scale-[1.02] duration-200 transition-all w-full mt-2 flex items-center justify-center gap-2 bg-primary text-white shadow-lg shadow-primary/20"
        >
          Enviar Mensagem
          <span className="material-symbols-outlined text-[18px]">send</span>
        </button>
      </form>
    </div>
  );

  return (
    <div className="bg-background min-h-screen flex items-center justify-center p-4 md:p-8 text-on-surface relative overflow-hidden py-24">
      {/* Decorative background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary-fixed opacity-30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary-fixed opacity-20 blur-[120px] pointer-events-none" />

      <motion.div
        layout
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="w-full max-w-5xl min-h-[600px] md:rounded-[40px] flex flex-col md:flex-row overflow-hidden md:border md:border-outline-variant/30 md:shadow-2xl relative bg-surface-container-lowest md:bg-surface-container-lowest z-10"
      >
        {/* Desktop: Left Contact Panel */}
        <div className="hidden md:flex md:w-1/2 relative bg-surface items-center justify-center p-12 border-r border-outline-variant/30">
          <div className="absolute inset-0 bg-linear-to-br from-surface via-surface to-primary/5"></div>
          
          <div className="relative z-10 w-full">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-white text-[32px]">support_agent</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-primary tracking-tight leading-none">Apoio</span>
                <span className="text-xs text-on-surface-variant tracking-[0.2em] mt-2 font-bold">ESTAMOS AQUI</span>
              </div>
            </div>
            
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
              Precisa de contactar o suporte ou falar com a nossa equipa de vendas? Escolha o melhor canal abaixo e entraremos em contacto em breve.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-highest/50 border border-outline-variant/20 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-sm">Telefone</h4>
                  <p className="text-on-surface-variant text-xs">952 885 524</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-highest/50 border border-outline-variant/20 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-sm">Escritório</h4>
                  <p className="text-on-surface-variant text-xs">Online apenas</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-highest/50 border border-outline-variant/20 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">alternate_email</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-sm">Email</h4>
                  <p className="text-on-surface-variant text-xs">anthonypeteroficial@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Top Header */}
        <div className="md:hidden flex flex-col items-center justify-center p-8 pt-12 relative overflow-hidden bg-surface">
          <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 mb-4 relative z-10">
            <span className="material-symbols-outlined text-white text-[28px]">support_agent</span>
          </div>
          <span className="text-3xl font-bold text-primary tracking-tight relative z-10">Contactos</span>
          <span className="text-[10px] text-on-surface-variant tracking-[0.3em] mt-2 relative z-10 uppercase font-bold">Como ajudar?</span>
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
