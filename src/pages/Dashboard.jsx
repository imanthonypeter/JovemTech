import { useNavigate } from 'react-router-dom';

const trendingSkills = [
  { name: 'Prompt Engineering', delta: '+14% procura esta semana' },
  { name: 'Go (Golang)', delta: '+8% procura esta semana' },
  { name: 'Solidity', delta: 'Estável' },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;
  const isEmpresa = user?.tipo === 'empresa';

  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md antialiased min-h-screen">
      {/* Top Nav removida a favor do global Navbar */}

      {/* Main Layout */}
      <div className="max-w-container-max mx-auto px-gutter pt-24 pb-xl flex gap-gutter relative">
        {/* Left Side Nav */}
        <aside className="hidden md:flex flex-col gap-base p-md bg-surface h-screen w-64 sticky top-24 left-0 shadow-sm border-r border-surface-container-low shrink-0 rounded-lg">
          <div className="flex items-center gap-sm mb-lg px-md">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center border border-outline-variant">
              <span className="material-symbols-outlined text-white">person</span>
            </div>
            <div>
              <h2 className="font-headline-md text-headline-md text-primary">{user?.nome || 'Utilizador'}</h2>
              <p className="font-label-md text-label-md text-on-surface-variant">{isEmpresa ? 'Recrutador' : 'Estudante de TLP'}</p>
            </div>
          </div>
          <nav className="flex flex-col gap-base flex-1">
            <a className="flex items-center gap-md bg-primary-container text-on-primary-container rounded-lg px-md py-sm font-semibold transition-all duration-200 active:scale-[0.98]" href="#">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{isEmpresa ? 'dashboard' : 'home'}</span>
              <span className="font-label-md text-label-md">{isEmpresa ? 'Painel Geral' : 'Início'}</span>
            </a>
            <a onClick={() => navigate('/vagas')} className="flex items-center gap-md text-on-surface-variant hover:bg-surface-container-high rounded-lg px-md py-sm transition-all duration-200 active:scale-[0.98] cursor-pointer">
              <span className="material-symbols-outlined">work</span>
              <span className="font-label-md text-label-md">Vagas</span>
            </a>
            {isEmpresa && (
              <a className="flex items-center gap-md text-on-surface-variant hover:bg-surface-container-high rounded-lg px-md py-sm transition-all duration-200 active:scale-[0.98] cursor-pointer">
                <span className="material-symbols-outlined">people</span>
                <span className="font-label-md text-label-md">Candidatos</span>
              </a>
            )}
            {!isEmpresa && (
              <>
                <a className="flex items-center gap-md text-on-surface-variant hover:bg-surface-container-high rounded-lg px-md py-sm transition-all duration-200 active:scale-[0.98]" href="#">
                  <span className="material-symbols-outlined">group</span>
                  <span className="font-label-md text-label-md">Rede</span>
                </a>
                <a className="flex items-center gap-md text-on-surface-variant hover:bg-surface-container-high rounded-lg px-md py-sm transition-all duration-200 active:scale-[0.98]" href="#">
                  <span className="material-symbols-outlined">hub</span>
                  <span className="font-label-md text-label-md">Comunidades</span>
                </a>
              </>
            )}
          </nav>
          {isEmpresa ? (
             <button onClick={() => navigate('/nova-vaga')} className="gradient-btn text-white font-label-md text-label-md py-2 px-4 rounded-xl mt-auto shadow-sm flex items-center justify-center gap-sm transition-all">
               <span className="material-symbols-outlined text-[18px]">add</span>
               Publicar Vaga
             </button>
          ) : (
             <button className="gradient-btn text-white font-label-md text-label-md py-2 px-4 rounded-xl mt-auto shadow-sm flex items-center justify-center gap-sm transition-all">
               <span className="material-symbols-outlined text-[18px]">add</span>
               Publicar Update
             </button>
          )}
        </aside>

        {/* Main Feed or Recruiter Panel */}
        {isEmpresa ? (
          <div className="flex-1 min-w-0 flex flex-col gap-lg">
             <div className="flex items-center justify-between">
                <h2 className="font-display-sm text-headline-lg font-bold text-on-surface">Painel de Recrutamento</h2>
                <button onClick={() => navigate('/nova-vaga')} className="gradient-btn text-white font-label-md text-label-md py-2 px-6 rounded-xl shadow-sm flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                  Nova Vaga
                </button>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                <div className="glass-card p-lg rounded-xl flex flex-col items-start border-l-4 border-l-primary">
                   <h3 className="text-on-surface-variant font-label-md uppercase tracking-wider">Vagas Ativas</h3>
                   <p className="font-display-md font-bold text-on-surface mt-2">3</p>
                </div>
                <div className="glass-card p-lg rounded-xl flex flex-col items-start border-l-4 border-l-secondary">
                   <h3 className="text-on-surface-variant font-label-md uppercase tracking-wider">Candidaturas</h3>
                   <p className="font-display-md font-bold text-on-surface mt-2">12</p>
                </div>
                <div className="glass-card p-lg rounded-xl flex flex-col items-start border-l-4 border-l-tertiary">
                   <h3 className="text-on-surface-variant font-label-md uppercase tracking-wider">Entrevistas</h3>
                   <p className="font-display-md font-bold text-on-surface mt-2">4</p>
                </div>
             </div>
             <div className="glass-card rounded-xl p-0 overflow-hidden">
                <div className="p-md border-b border-outline-variant/30 flex justify-between items-center">
                  <h3 className="font-headline-md text-[16px] font-semibold text-on-surface">Publicações Recentes</h3>
                  <button onClick={() => navigate('/vagas')} className="text-primary font-label-md text-label-md hover:underline">Ver todas</button>
                </div>
                <div className="p-md text-on-surface-variant text-center py-xl flex flex-col items-center">
                   <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-sm">
                     <span className="material-symbols-outlined text-[32px] text-outline">work_off</span>
                   </div>
                   <p className="font-body-md text-body-md">Ainda não tens vagas publicadas recentemente.</p>
                </div>
             </div>
          </div>
        ) : (
          <main className="flex-1 flex flex-col gap-lg min-w-0">
          {/* Create Post */}
          <div className="glass-card rounded-lg p-md">
            <div className="flex gap-md items-start">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-white text-[18px]">person</span>
              </div>
              <div className="flex-1">
                <input className="w-full bg-surface-container-low border border-transparent hover:border-outline-variant focus:border-primary rounded-lg py-3 px-4 font-code text-code outline-none transition-colors mb-sm" placeholder="Partilha um insight, projeto ou oportunidade..." type="text" />
                <div className="flex justify-between items-center">
                  <div className="flex gap-sm">
                    <button className="text-on-surface-variant hover:text-primary p-2 rounded hover:bg-surface-container-lowest transition-colors flex items-center gap-xs">
                      <span className="material-symbols-outlined text-[20px]">image</span>
                      <span className="font-label-md text-label-md hidden sm:inline">Ficheiro</span>
                    </button>
                    <button className="text-on-surface-variant hover:text-primary p-2 rounded hover:bg-surface-container-lowest transition-colors flex items-center gap-xs">
                      <span className="material-symbols-outlined text-[20px]">code</span>
                      <span className="font-label-md text-label-md hidden sm:inline">Código</span>
                    </button>
                  </div>
                  <button className="bg-surface-container-lowest border border-outline-variant text-primary font-label-md text-label-md py-1 px-4 rounded-xl hover:bg-surface-container-low transition-colors">Publicar</button>
                </div>
              </div>
            </div>
          </div>

          {/* Post 1 – Job Post */}
          <article className="glass-card rounded-lg overflow-hidden border-t-2 border-t-primary">
            <div className="p-md border-b border-outline-variant/30 flex justify-between items-start">
              <div className="flex gap-sm items-center">
                <div className="w-12 h-12 rounded bg-surface-container-highest border border-outline-variant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[28px]">rocket_launch</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Nebula Systems</h3>
                  <p className="font-label-md text-label-md text-on-surface-variant">Promovido • A Contratar</p>
                </div>
              </div>
              <button className="text-outline hover:text-primary transition-colors">
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>
            <div className="p-md">
              <p className="font-body-lg text-body-lg text-on-surface mb-md">Estamos a expandir a nossa equipa de infraestrutura. Procuramos Engenheiros Rust Sénior para construir a próxima geração de plataformas de computação descentralizada. Alto impacto, completamente remoto.</p>
              <div className="flex flex-wrap gap-sm mb-lg">
                {['#Rust', '#Web3', '#DistributedSystems'].map(t => (
                  <span key={t} className="bg-primary/10 text-primary font-code text-code px-2 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <div className="bg-surface-container-low rounded p-md flex items-center justify-between border border-outline-variant/20">
                <div>
                  <h4 className="font-semibold text-[16px] text-on-surface">Engenheiro de DevOps Sénior</h4>
                  <p className="font-label-md text-label-md text-on-surface-variant">Luanda, AO (ou Remoto) • 1.200.000 Kz - 1.800.000 Kz</p>
                </div>
                <button className="gradient-btn text-white font-label-md text-label-md py-2 px-6 rounded-xl shadow-sm flex items-center gap-xs hover:scale-[1.02] transition-all">
                  Candidatura Rápida
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="px-md py-sm border-t border-outline-variant/20 bg-surface-bright flex gap-lg">
              <button className="flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md">
                <span className="material-symbols-outlined text-[20px]">thumb_up</span><span>245</span>
              </button>
              <button className="flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md">
                <span className="material-symbols-outlined text-[20px]">chat_bubble</span><span>32</span>
              </button>
              <button className="flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md ml-auto">
                <span className="material-symbols-outlined text-[20px]">share</span><span>Partilhar</span>
              </button>
            </div>
          </article>

          {/* Post 2 – Research Post */}
          <article className="glass-card rounded-lg overflow-hidden">
            <div className="p-md flex gap-sm items-start">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center border border-outline-variant shrink-0">
                <span className="material-symbols-outlined text-white">psychology</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-sm">
                  <div>
                    <h3 className="font-semibold text-[16px] text-on-surface hover:text-primary cursor-pointer transition-colors">David Kim</h3>
                    <p className="font-label-md text-label-md text-on-surface-variant">Investigador Principal de IA @ SynthCorp • 2h</p>
                  </div>
                  <button className="text-outline hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">bookmark_border</span>
                  </button>
                </div>
                <p className="font-body-md text-body-md text-on-surface mb-md">Acabei de publicar os nossos mais recentes resultados sobre a optimização de modelos transformer para dispositivos edge. Através de mecanismos de atenção esparsa, alcançámos uma redução de 40% no footprint de memória sem perda significativa de precisão.</p>
                <div className="w-full h-48 bg-surface-container border border-outline-variant/30 rounded overflow-hidden mb-md relative group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary-container/20 group-hover:opacity-75 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[48px] opacity-80">article</span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-sm bg-surface/90 backdrop-blur-sm border-t border-outline-variant/20">
                    <p className="font-label-md text-label-md text-on-surface font-semibold truncate">Efficient Attention for Edge Inference.pdf</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-sm">
                  {['#AI', '#MachineLearning', '#Research'].map(t => (
                    <span key={t} className="bg-primary/10 text-primary font-code text-code px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-md py-sm border-t border-outline-variant/20 bg-surface-bright flex gap-lg ml-14">
              <button className="flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md">
                <span className="material-symbols-outlined text-[20px]">thumb_up</span><span>1.2k</span>
              </button>
              <button className="flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md">
                <span className="material-symbols-outlined text-[20px]">chat_bubble</span><span>84</span>
              </button>
              <button className="flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md">
                <span className="material-symbols-outlined text-[20px]">repeat</span><span>12</span>
              </button>
            </div>
          </article>
        </main>
        )}

        {/* Right Sidebar */}
        {!isEmpresa && (
          <aside className="hidden xl:flex flex-col gap-lg w-80 shrink-0">
          {/* Trending Skills */}
          <div className="glass-card rounded-lg p-md">
            <h3 className="font-semibold text-[16px] text-on-surface mb-sm flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary text-[20px]">trending_up</span>
              Skills em Alta
            </h3>
            <ul className="flex flex-col">
              {trendingSkills.map(s => (
                <li key={s.name} className="py-sm border-b border-outline-variant/20 last:border-0 flex justify-between items-center group cursor-pointer">
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md font-semibold text-on-surface group-hover:text-primary transition-colors">{s.name}</span>
                    <span className="font-code text-[11px] text-on-surface-variant">{s.delta}</span>
                  </div>
                  <button className="bg-surface-container border border-outline-variant text-primary rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-[14px]">add</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Suggested Connections */}
          <div className="glass-card rounded-lg p-md">
            <h3 className="font-semibold text-[16px] text-on-surface mb-sm">Conexões Sugeridas</h3>
            <div className="flex flex-col gap-md">
              {[
                { name: 'Sara Jenkins', role: 'Programadora Full Stack @ NovaTech' },
                { name: 'Rui Costa', role: 'Engenheiro de ML @ DataSphere' },
              ].map(c => (
                <div key={c.name} className="flex items-center gap-sm">
                  <div className="w-10 h-10 rounded-full border border-outline-variant bg-tertiary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white text-[18px]">person</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-label-md text-label-md font-semibold text-on-surface truncate">{c.name}</p>
                    <p className="font-code text-[11px] text-on-surface-variant truncate">{c.role}</p>
                  </div>
                  <button className="bg-surface-container border border-outline-variant text-primary font-label-md text-label-md py-1 px-3 rounded-full hover:bg-primary/10 transition-colors shrink-0">
                    + Ligar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </aside>
        )}
      </div>
    </div>
  );
}
