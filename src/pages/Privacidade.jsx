import React from 'react';

export default function Privacidade() {
  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen pt-32 pb-24 px-gutter">
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-16 rounded-[2rem] border border-outline-variant/30">
        <h1 className="text-display-sm md:text-display-md font-bold text-on-surface mb-4">Política de Privacidade</h1>
        <p className="font-label-md text-primary font-semibold mb-10">Última alteração: 25 de Maio de 2026</p>
        
        <div className="space-y-8 text-on-surface-variant font-body-lg leading-relaxed">
          <section>
            <h2 className="text-headline-md font-semibold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">data_info_alert</span>
              1. Informação que Recolhemos
            </h2>
            <p>A JovemTech recolhe informações diretamente de si durante o processo de registo e criação de perfil. Isto inclui, entre outros: o seu nome completo, endereço de correio eletrónico, currículo, lista de competências técnicas (skills), links para portfólios e o seu tipo de perfil (Talento ou Empresa).</p>
          </section>
          
          <section>
            <h2 className="text-headline-md font-semibold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">query_stats</span>
              2. Como Utilizamos a Informação
            </h2>
            <p>Os seus dados são fundamentais para o funcionamento da plataforma. Utilizamo-los para: processar a sua conta; apresentar vagas ou candidatos compatíveis com o seu perfil; enviar notificações essenciais; e analisar dados agregados para melhorar a usabilidade da JovemTech no mercado nacional.</p>
          </section>
          
          <section>
            <h2 className="text-headline-md font-semibold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">share</span>
              3. Partilha de Dados
            </h2>
            <p>A essência da JovemTech é a conexão. Por isso, caso seja um Talento, o seu perfil (incluindo CV e skills) ficará visível para os recrutadores das empresas registadas e validadas. A JovemTech <strong>nunca</strong> vende as suas informações pessoais a entidades terceiras ou empresas de marketing.</p>
          </section>

          <section>
            <h2 className="text-headline-md font-semibold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">shield_lock</span>
              4. Segurança e Proteção
            </h2>
            <p>A proteção dos seus dados é a nossa prioridade. Implementamos medidas técnicas robustas, incluindo a utilização de <em>bcrypt</em> para garantir a encriptação total e irreversível das palavras-passe na nossa base de dados, prevenindo acessos não autorizados.</p>
          </section>

          <section>
            <h2 className="text-headline-md font-semibold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">fact_check</span>
              5. Os Seus Direitos
            </h2>
            <p>Como utilizador, detém controlo absoluto sobre os seus dados. Pode a qualquer momento aceder ao seu painel (Dashboard) para atualizar, corrigir ou apagar completamente a sua conta e as informações associadas aos nossos servidores.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
