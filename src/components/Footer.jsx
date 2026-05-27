import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/30 py-10 mt-auto text-on-surface">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand & Intro */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-white text-[24px]">rocket_launch</span>
              </div>
              <span className="font-headline-lg text-headline-lg font-bold text-primary tracking-tight">JovemTech</span>
            </Link>
            <p className="font-body-md text-on-surface-variant max-w-sm mb-6 leading-relaxed">
              A principal plataforma angolana que conecta o melhor talento jovem às empresas mais inovadoras do mercado tecnológico. Construindo o futuro digital, hoje.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all">
                <span className="material-symbols-outlined text-[20px]">link</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all">
                <span className="material-symbols-outlined text-[20px]">share</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </a>
            </div>
          </div>

          {/* Links: Plataforma */}
          <div>
            <h4 className="font-headline-md text-[16px] font-bold mb-6">Plataforma</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/vagas" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Explorar Vagas</Link></li>
              <li><Link to="/auth" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Para Talentos</Link></li>
              <li><Link to="/auth" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Para Recrutadores</Link></li>
              <li><Link to="/" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Comunidade</Link></li>
            </ul>
          </div>

          {/* Links: Empresa */}
          <div>
            <h4 className="font-headline-md text-[16px] font-bold mb-6">Empresa</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Contactos</a></li>
            </ul>
          </div>

          {/* Links: Legal */}
          <div>
            <h4 className="font-headline-md text-[16px] font-bold mb-6">Legal</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/privacidade" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/termos" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Termos de Serviço</Link></li>
              <li><Link to="/cookies" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Política de Cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body-sm text-on-surface-variant">
            © 2026 JovemTech. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 font-body-sm text-on-surface-variant">
            <span>Angola</span>
            <span className="w-1 h-1 bg-outline-variant rounded-full my-auto"></span>
            <span className="flex items-center gap-1">Feito com <span className="material-symbols-outlined text-[14px] text-error">favorite</span> para os jovens</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
