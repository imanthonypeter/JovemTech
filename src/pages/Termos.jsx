import React from 'react';

export default function Termos() {
  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen pt-32 pb-24 px-gutter">
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-16 rounded-[2rem] border border-outline-variant/30">
        <h1 className="text-display-sm md:text-display-md font-bold text-on-surface mb-4">Termos de Serviço</h1>
        <p className="font-label-md text-primary font-semibold mb-10">Última alteração: 25 de Maio de 2026</p>
        
        <div className="space-y-8 text-on-surface-variant font-body-lg leading-relaxed">
          <section>
            <h2 className="text-headline-md font-semibold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">gavel</span>
              1. Aceitação dos Termos
            </h2>
            <p>Ao aceder e utilizar a plataforma JovemTech, concorda em ficar legalmente vinculado a estes Termos de Serviço. Se não concordar com qualquer parte destes termos, não deverá utilizar os nossos serviços nem aceder à plataforma.</p>
          </section>
          
          <section>
            <h2 className="text-headline-md font-semibold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">public</span>
              2. Uso da Plataforma
            </h2>
            <p>A JovemTech destina-se a promover o talento tecnológico em Angola, facilitando a ponte entre profissionais de TI e as empresas. Ao usar a plataforma, compromete-se a partilhar informações verdadeiras e a abster-se de partilhar conteúdos ofensivos, fraudulentos ou de caráter discriminatório.</p>
          </section>
          
          <section>
            <h2 className="text-headline-md font-semibold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">manage_accounts</span>
              3. Contas de Utilizador
            </h2>
            <p>É o único responsável por manter a confidencialidade das credenciais da sua conta e por todas as atividades que nela ocorram. A JovemTech declina qualquer responsabilidade por perdas ou danos resultantes do uso não autorizado do seu perfil.</p>
          </section>

          <section>
            <h2 className="text-headline-md font-semibold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">work</span>
              4. Vagas e Recrutamento
            </h2>
            <p>As empresas e recrutadores garantem que as vagas e oportunidades publicadas são reais e estão em conformidade com a legislação laboral aplicável. A JovemTech atua apenas como plataforma tecnológica de facilitação de contactos e não se responsabiliza pelas decisões finais de contratação tomadas por terceiros.</p>
          </section>

          <section>
            <h2 className="text-headline-md font-semibold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">warning</span>
              5. Limitação de Responsabilidade
            </h2>
            <p>Os serviços da JovemTech são fornecidos "tal como estão" e "conforme disponíveis". Não garantimos que o serviço será ininterrupto, livre de falhas técnicas ou totalmente seguro a qualquer instante, embora envidemos todos os esforços para garantir a sua estabilidade.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
