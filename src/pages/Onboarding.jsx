import { useNavigate } from 'react-router-dom';

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background font-body-md h-screen overflow-hidden antialiased">
      <div className="flex h-full w-full">
        {/* Content Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between p-gutter lg:px-xl py-xl bg-surface-container-lowest z-10 relative">
          {/* Header / Logo */}
          <header className="flex items-center">
            <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mr-2">
              <span className="material-symbols-outlined text-white text-[24px]">rocket_launch</span>
            </div>
            <span className="font-headline-md text-headline-md font-bold text-primary ml-2">JovemTech</span>
          </header>

          {/* Main Content */}
          <main className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
            <div className="space-y-sm mb-lg">
              <span className="inline-block px-sm py-xs bg-primary/10 text-primary font-label-md text-label-md rounded-full uppercase tracking-wider">
                Bem-vindo ao JovemTech
              </span>
              <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">
                Conecta-te com o amanhã.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant pt-sm">
                Junta-te à principal rede de talentos tecnológicos. Acelera a tua carreira, encontra projetos inovadores e conecta-te com empresas de topo num ecossistema profissional desenhado para o futuro.
              </p>
            </div>
            <div className="flex flex-col gap-sm w-full max-w-[250px]">
              <button
                onClick={() => navigate('/auth')}
                className="w-full py-md px-lg gradient-btn text-on-primary font-body-md text-body-md font-semibold rounded-xl hover:scale-[1.02] transition-all duration-200"
              >
                Começar Agora
              </button>
              <button
                onClick={() => navigate('/auth')}
                className="w-full py-md px-lg bg-surface-container-lowest border border-outline-variant text-primary font-body-md text-body-md font-semibold rounded-xl hover:bg-surface-container-low hover:border-primary transition-all duration-200"
              >
                Iniciar Sessão
              </button>
            </div>
          </main>

          {/* Footer */}
          <footer className="text-on-surface-variant font-label-md text-label-md text-center lg:text-left">
            Ao continuar, concordas com os nossos{' '}
            <a className="text-primary hover:underline" href="#">Termos de Serviço</a> e{' '}
            <a className="text-primary hover:underline" href="#">Política de Privacidade</a>.
          </footer>
        </div>

        {/* Visual Side */}
        <div className="hidden lg:block w-1/2 relative bg-inverse-surface overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-transparent z-10 pointer-events-none mix-blend-overlay" />
          <div className="absolute inset-0 w-full h-full">
            <img
              alt="Cinematic Tech Visual"
              className="w-full h-full object-cover object-center opacity-90"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0TqWQCmrbw0PpySFkrsdXvq9en4fGyumQm6g62GD3spXQ4GGGdu9MUz5USN3w_yfvcylPy5If8ZMcseZU6OYqf2LnzOgPzTWJi0uBlpHYqW-fVvf_EfEwmU5g84oQQXJfkdzAAVMgfGRqk04qimiQFRDcqznqlmQrMp8jmQX9jTKK66lw9r8jvPdwa0TUxs7dYiqRkQoeju_jIF-H7ojsxmgdlLiSsTlJpqYvM4UeFm-hQXzOOIHlIbF8G2FkQLNBP25H8u_8Ap0"
            />
          </div>
          {/* Floating UI Card */}
          <div className="absolute bottom-xl right-xl z-20 bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/30 p-md rounded-xl shadow-lg max-w-xs hover:-translate-y-1 transition-transform duration-500 ease-out">
            <div className="flex items-center gap-sm mb-xs">
              <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>speed</span>
              <span className="font-label-md text-label-md text-on-surface font-semibold">Desempenho Otimizado</span>
            </div>
            <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
              <div className="bg-primary-container h-full w-3/4 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
