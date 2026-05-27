import React from 'react';

export default function Cookies() {
  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen pt-32 pb-24 px-gutter">
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-16 rounded-[2rem] border border-outline-variant/30">
        <h1 className="text-display-sm md:text-display-md font-bold text-on-surface mb-4">Política de Cookies</h1>
        <p className="font-label-md text-primary font-semibold mb-10">Última alteração: 27 de Maio de 2026</p>
        
        <div className="space-y-8 text-on-surface-variant font-body-lg leading-relaxed">
          <section>
            <h2 className="text-headline-md font-semibold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">cookie</span>
              1. O que são Cookies?
            </h2>
            <p>Cookies são pequenos ficheiros de texto armazenados no seu computador ou dispositivo móvel através do seu navegador de internet, recolhendo e retendo informações relacionadas com as suas preferências, não incluindo os seus dados pessoais. Os cookies ajudam a nossa plataforma a reconhecer o seu dispositivo da próxima vez que nos visitar e são cruciais para o funcionamento de muitos recursos da JovemTech.</p>
          </section>
          
          <section>
            <h2 className="text-headline-md font-semibold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">build</span>
              2. Como utilizamos os Cookies
            </h2>
            <p>A JovemTech utiliza cookies de forma a melhorar a experiência do utilizador, facilitando a navegação e garantindo que determinadas funcionalidades, tais como manter a sessão iniciada ou apresentar conteúdos personalizados sobre vagas e áreas da tecnologia em Angola, funcionem corretamente.</p>
          </section>
          
          <section>
            <h2 className="text-headline-md font-semibold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">category</span>
              3. Tipos de Cookies que utilizamos
            </h2>
            <ul className="list-disc ml-6 space-y-2 mt-2">
              <li><strong>Cookies Estritamente Necessários:</strong> Essenciais para permitir a navegação na plataforma e utilização de recursos como o login seguro.</li>
              <li><strong>Cookies Analíticos:</strong> Permitem-nos compreender como os utilizadores navegam pela plataforma, ajudando-nos a otimizar a experiência geral e corrigir erros.</li>
              <li><strong>Cookies de Funcionalidade:</strong> Recordam escolhas que efetuou (como o nome de utilizador ou filtros de vagas) para proporcionar uma navegação mais personalizada.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-headline-md font-semibold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">settings</span>
              4. Gestão de Cookies
            </h2>
            <p>Tem o direito de aceitar ou rejeitar cookies. Pode alterar as definições do seu navegador de internet (como o Chrome, Firefox ou Safari) a qualquer momento para bloquear cookies. Note que se optar por bloquear os cookies essenciais, partes do nosso site, em especial áreas que requeiram início de sessão (como o Dashboard de Recrutamento ou o painel de Candidato), podem não funcionar corretamente.</p>
          </section>

          <section>
            <h2 className="text-headline-md font-semibold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">help</span>
              5. Contactos
            </h2>
            <p>Se tiver alguma dúvida sobre a nossa Política de Cookies ou a forma como tratamos os dados da sua navegação, entre em contacto connosco através do email de suporte oficial da plataforma.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
