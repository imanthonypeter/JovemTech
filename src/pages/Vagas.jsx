import { useNavigate } from 'react-router-dom';

const vagas = [
  {
    id: 1,
    titulo: 'Engenheiro de Software Fullstack',
    empresa: 'Unitel Inovação',
    salario: '800.000 Kz - 1.200.000 Kz',
    local: 'Luanda (Híbrido)',
    tipo: 'Tempo Inteiro',
    tags: ['#React', '#Node.js', '#AWS'],
    destaque: true,
    logo: 'https://lh3.googleusercontent.com/aida/ADBb0uh9HTJnujoDCNlow-eoh10_MtE4R4RCZxo7mmgv6HnSpSaFJ-9CMs2eJLN-xms8U9-CEUBZ40LcZDZl4Lyk0vEjzuPF_InqSnannKha_lxIyprGBRS3acR0OfBdG6lOuqx_8-vTi7YlTtyw3Sep0uyPJhpeOAB2TZv8lo6TilNFnnLcoXXtSb_ruui5iggsepym8Dm6ppHvhqLoQf1e89QvE-sEKj8LHb-IlzlGD-WxWbxdVIoH7c2wFR0',
  },
  {
    id: 2,
    titulo: 'UX/UI Designer Pleno',
    empresa: 'BFA Tech',
    salario: '500.000 Kz - 750.000 Kz',
    local: 'Luanda',
    tipo: 'Tempo Inteiro',
    tags: ['#Figma', '#DesignSystem'],
    destaque: false,
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLrzJ_pGGNAh94XXON2dfXXgu9fJbm8PcXkft6d-YsKX4hPiFZXueU_srDOJCkkUwi0UrqZZDIvqHpvl4lBHpoBXyX7R7s4EKntGSsGj0HL8XC479HqmCNVoKaDLYPC4_dSMOuUMWksYJuRksisf0CYKMtXakhANsxtStHotN9r4-VKUZJ5dq-0ycnkVa4jScnQ31xEq6TAeQrKGngFLrhoj97hBkYhCCmjn2IHwwJEUOwgpYYyrAjznsyWVJXAcfu8GeIOZEVNnE',
  },
  {
    id: 3,
    titulo: 'Engenheiro DevOps',
    empresa: 'NCR Angola',
    salario: '1.000.000 Kz - 1.500.000 Kz',
    local: 'Remoto',
    tipo: 'Tempo Inteiro',
    tags: ['#Kubernetes', '#Docker', '#CI/CD'],
    destaque: true,
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC10jeJbkUrEBywJRAOdiiTccN_V7EKZHARQpUpxSiQ_VMwG-s7JA7xACuQaP0MXBlC6Mw8Fp60XoeGJD_dqaEvhJHjRO_Y5WYUKerH7uX_Ux6QOrfTLc8PeYpJwcETjgoHLeN3d8_bUhAjRXW13trVr1-V0EDV6ouYNDjj3rJzRutAcOqED3rnP329fTCdqkRILfTU_7HJlSOZOGDWb-cHjfBm6P8xs81PmsaNKuv4uR1ZR58mGD1ceej7FehJY1bxFv1wyggtP48',
  },
  {
    id: 4,
    titulo: 'Analista de Cibersegurança',
    empresa: 'Angola Cables',
    salario: '900.000 Kz - 1.400.000 Kz',
    local: 'Luanda',
    tipo: 'Tempo Inteiro',
    tags: ['#SecOps', '#NetworkSecurity'],
    destaque: false,
    logo: 'https://lh3.googleusercontent.com/aida/ADBb0uh9HTJnujoDCNlow-eoh10_MtE4R4RCZxo7mmgv6HnSpSaFJ-9CMs2eJLN-xms8U9-CEUBZ40LcZDZl4Lyk0vEjzuPF_InqSnannKha_lxIyprGBRS3acR0OfBdG6lOuqx_8-vTi7YlTtyw3Sep0uyPJhpeOAB2TZv8lo6TilNFnnLcoXXtSb_ruui5iggsepym8Dm6ppHvhqLoQf1e89QvE-sEKj8LHb-IlzlGD-WxWbxdVIoH7c2wFR0',
  },
  {
    id: 5,
    titulo: 'Engenheiro de Prompt / IA',
    empresa: 'Sistec',
    salario: '600.000 Kz - 900.000 Kz',
    local: 'Remoto',
    tipo: 'Tempo Inteiro',
    tags: ['#LLMs', '#OpenAI', '#LangChain'],
    destaque: true,
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLrzJ_pGGNAh94XXON2dfXXgu9fJbm8PcXkft6d-YsKX4hPiFZXueU_srDOJCkkUwi0UrqZZDIvqHpvl4lBHpoBXyX7R7s4EKntGSsGj0HL8XC479HqmCNVoKaDLYPC4_dSMOuUMWksYJuRksisf0CYKMtXakhANsxtStHotN9r4-VKUZJ5dq-0ycnkVa4jScnQ31xEq6TAeQrKGngFLrhoj97hBkYhCCmjn2IHwwJEUOwgpYYyrAjznsyWVJXAcfu8GeIOZEVNnE',
  }
];

export default function Vagas() {
  const navigate = useNavigate();

  return (
    <div className="flex bg-background text-on-background min-h-screen pt-16">
      {/* Side Nav - Filters */}
      <aside className="hidden md:flex flex-col p-md space-y-md sticky top-16 h-[calc(100vh-64px)] w-64 bg-surface border-r border-outline-variant/30 overflow-y-auto shrink-0">
        <div className="mb-md">
          <h2 className="font-headline-md text-headline-md text-primary">Filtros</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Refina a tua pesquisa</p>
        </div>
        <div className="flex-1 space-y-sm">
          {[
            { icon: 'work', label: 'Tipo de Contrato' },
            { icon: 'payments', label: 'Salário' },
            { icon: 'distance', label: 'Modalidade' },
            { icon: 'trending_up', label: 'Experiência' },
          ].map(f => (
            <button key={f.icon} className="w-full flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md">
              <span className="material-symbols-outlined text-[18px]">{f.icon}</span>
              {f.label}
            </button>
          ))}
          <div className="pt-sm">
            <button className="font-label-md text-label-md text-primary hover:underline px-sm">Limpar Filtros</button>
          </div>
        </div>
        <div className="border-t border-outline-variant/30 pt-md space-y-sm mt-auto">
          <button className="w-full flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md">
            <span className="material-symbols-outlined text-[18px]">bookmark</span>
            Guardadas
          </button>
          <button className="w-full flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            Candidatadas
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-h-screen">
        <div className="max-w-4xl mx-auto p-md lg:p-xl space-y-xl">
          {/* Search */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-md">
            <div className="w-full md:max-w-md relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input
                className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg pl-10 pr-4 py-2 font-code text-code text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors shadow-sm"
                placeholder="Pesquisa cargos, empresas ou palavras-chave..."
                type="text"
              />
            </div>
            <button className="hidden md:flex items-center gap-sm px-4 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg font-label-md text-label-md text-primary hover:bg-surface-container-low transition-colors shadow-sm">
              <span className="material-symbols-outlined text-[16px]">bookmark</span>
              Guardadas (3)
            </button>
          </div>

          {/* Job Cards */}
          <div className="space-y-md">
            {vagas.map(v => (
              <article key={v.id} className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-md shadow-sm hover:-translate-y-0.5 transition-transform duration-200 relative overflow-hidden group cursor-pointer" onClick={() => navigate(`/vagas/${v.id}`)}>
                <div className="absolute top-0 left-0 w-full h-[2px] gradient-btn opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col sm:flex-row gap-md sm:items-start">
                  <div className="w-12 h-12 rounded-lg border border-outline-variant/30 overflow-hidden shrink-0 bg-surface flex items-center justify-center p-1">
                    <img alt="Logo" className="w-full h-full object-contain rounded-md" src={v.logo} />
                  </div>
                  <div className="flex-1 space-y-xs">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-headline-md text-headline-md text-on-surface">{v.titulo}</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant">{v.empresa}</p>
                      </div>
                      <button className="text-outline hover:text-primary transition-colors p-1" onClick={e => e.stopPropagation()}>
                        <span className="material-symbols-outlined">bookmark</span>
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 py-1">
                      <div className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant">
                        <span className="material-symbols-outlined text-[14px]">payments</span>
                        {v.salario}
                      </div>
                      <div className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant">
                        <span className="material-symbols-outlined text-[14px]">location_on</span>
                        {v.local}
                      </div>
                      <div className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant">
                        <span className="material-symbols-outlined text-[14px]">work_outline</span>
                        {v.tipo}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {v.tags.map(t => (
                        <span key={t} className="bg-primary/10 text-primary font-label-md text-label-md px-2 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-auto flex items-center">
                    <button
                      onClick={e => { e.stopPropagation(); navigate(`/vagas/${v.id}`); }}
                      className={`w-full sm:w-auto font-label-md text-label-md px-6 py-2.5 rounded-lg shadow-sm hover:scale-[1.02] active:scale-95 transition-all ${v.destaque ? 'gradient-btn text-white hover:brightness-110' : 'bg-surface-container-lowest border border-outline-variant/50 text-primary hover:bg-surface-container-low'}`}
                    >
                      {v.destaque ? 'Candidatura Rápida' : 'Candidatar'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
