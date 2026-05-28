import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Facebook = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Twitter = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const Youtube = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
);
const Instagram = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const Music2 = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
);

export default function Footer() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-24 pb-12 mt-12">
      

      <div className="relative z-10 w-full max-w-7xl px-4">
        <motion.footer
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="liquid-glass w-full rounded-3xl p-6 md:p-10 text-white/70"
        >
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-10">
            {/* First Column */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 mb-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M 4.688 136 C 68.373 136 120 187.627 120 251.312 C 120 252.883 119.967 254.445 119.905 256 L 0 256 L 0 136.096 C 1.555 136.034 3.117 136 4.688 136 Z M 251.312 136 C 252.883 136 254.445 136.034 256 136.096 L 256 256 L 136.095 256 C 136.032 254.438 136.001 252.875 136 251.312 C 136 187.627 187.627 136 251.312 136 Z M 119.905 0 C 119.967 1.555 120 3.117 120 4.688 C 120 68.373 68.373 120 4.687 120 C 3.117 120 1.555 119.967 0 119.905 L 0 0 Z M 256 119.905 C 254.445 119.967 252.883 120 251.312 120 C 187.627 120 136 68.373 136 4.687 C 136 3.117 136.033 1.555 136.095 0 L 256 0 Z" />
                </svg>
                <span className="text-xl font-medium tracking-wide font-sans">JovemTech</span>
              </div>
              <p className="text-sm leading-relaxed max-w-sm font-sans">
                A plataforma Nº1 para talentos Tech em Angola. Liga-te às empresas mais inovadoras e dá o salto na tua carreira.
              </p>
            </div>

            {/* Links Section */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 font-sans">
              {/* Discover */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-white font-medium mb-4">Plataforma</h3>
                <ul className="text-xs space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">Explorar Vagas</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Talentos Tech</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Empresas</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                </ul>
              </div>

              {/* The Mission */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-white font-medium mb-4">About</h3>
                <ul className="text-xs space-y-2">
                  <li><Link to="/sobre" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link to="#" className="hover:text-white transition-colors">A Equipa</Link></li>
                  <li><Link to="#" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link to="#" className="hover:text-white transition-colors">Carreiras</Link></li>
                </ul>
              </div>

              {/* Concierge */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-white font-medium mb-4">Suporte</h3>
                <ul className="text-xs space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">Contactos</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 font-sans">
            <p className="text-[10px] uppercase tracking-widest opacity-50">
              © 2024 JovemTech. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-widest opacity-50">
                Segue-nos:
              </span>
              <div className="flex items-center gap-4">
                <a href="#" className="opacity-70 hover:opacity-100 transition-colors hover:text-white" aria-label="Facebook">
                  <Facebook size={16} />
                </a>
                <a href="#" className="opacity-70 hover:opacity-100 transition-colors hover:text-white" aria-label="Twitter">
                  <Twitter size={16} />
                </a>
                <a href="#" className="opacity-70 hover:opacity-100 transition-colors hover:text-white" aria-label="YouTube">
                  <Youtube size={16} />
                </a>
                <a href="#" className="opacity-70 hover:opacity-100 transition-colors hover:text-white" aria-label="Instagram">
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
