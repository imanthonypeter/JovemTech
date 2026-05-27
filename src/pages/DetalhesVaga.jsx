import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Building2, MapPin, DollarSign, Clock, Briefcase, ChevronLeft, Send, CheckCircle2 } from 'lucide-react';

function DetalhesVaga() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vaga, setVaga] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [candidatado, setCandidatado] = useState(false);

  useEffect(() => {
    // Simulando fetch da API ou usando o axios se o backend estiver rodando
    axios.get(`http://localhost:5000/api/vagas/${id}`)
      .then(res => {
        setVaga(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        // Fallback para mock data para UI demo
        setVaga({
          id,
          titulo: 'Senior Full Stack Engineer',
          descricao: 'Estamos à procura de um Senior Full Stack Engineer para liderar o desenvolvimento da nossa nova plataforma financeira. O candidato ideal tem forte experiência com React, Node.js e arquitetura de microserviços. Você trabalhará em uma equipe ágil e terá impacto direto nas decisões técnicas da empresa.',
          requisitos: '- 5+ anos de experiência em desenvolvimento web\n- Proficiência em React e TypeScript\n- Experiência forte com Node.js e bancos de dados SQL/NoSQL\n- Conhecimento de práticas DevOps e CI/CD\n- Inglês avançado',
          createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
          Empresa: {
            nome: 'TechNova Solutions',
            logo: null
          }
        });
        setLoading(false);
      });
  }, [id]);

  const handleCandidatar = () => {
    setCandidatado(true);
    // Aqui viria a chamada POST para /api/candidaturas
  };

  if (loading) return (
    <div className="flex justify-center items-center py-32 w-full">
      <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
    </div>
  );

  if (error || !vaga) return (
    <div className="max-w-4xl mx-auto pt-8 px-4 w-full">
      <div className="bg-error-container border border-error/20 text-error p-md rounded-xl font-label-md">
        Não foi possível carregar os detalhes da vaga.
      </div>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto pt-4 pb-16 px-4 sm:px-6 lg:px-8 w-full"
    >
      <button 
        onClick={() => navigate('/vagas')}
        className="flex items-center text-on-surface-variant hover:text-primary transition-colors font-label-md mb-6"
      >
        <ChevronLeft className="w-5 h-5 mr-1" /> Voltar para vagas
      </button>

      {/* Header Card */}
      <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-lg sm:p-xl neo-shadow glass-card relative overflow-hidden mb-8">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-secondary-container"></div>
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="flex gap-6 items-start">
            <div className="w-16 h-16 rounded-xl bg-surface-bright border border-outline-variant/50 flex items-center justify-center flex-shrink-0 shadow-sm">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            
            <div>
              <h1 className="font-display-lg text-display-lg font-bold text-on-surface tracking-tight leading-tight">
                {vaga.titulo}
              </h1>
              <div className="flex items-center gap-2 mt-2 text-on-surface-variant font-label-md">
                <span className="font-semibold text-primary">{vaga.Empresa?.nome || 'Empresa Confidencial'}</span>
                <span>•</span>
                <span>Postado há 2 dias</span>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface font-label-md text-sm">
                  <MapPin className="w-4 h-4 text-secondary-container" /> Remoto
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface font-label-md text-sm">
                  <DollarSign className="w-4 h-4 text-green-400" /> A combinar
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface font-label-md text-sm">
                  <Clock className="w-4 h-4 text-tertiary-container" /> Tempo Integral
                </div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            {candidatado ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full flex items-center justify-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 font-label-md px-8 py-3 rounded-xl shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5" /> Candidatura Enviada
              </motion.div>
            ) : (
              <button 
                onClick={handleCandidatar}
                className="w-full md:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary-container text-white font-label-md px-8 py-3 rounded-xl shadow-[0_4px_14px_0_rgba(0,82,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,82,255,0.23)] hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Send className="w-4 h-4" /> Candidatar-se Agora
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (Details) */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-lg sm:p-xl neo-shadow glass-card">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" /> Descrição da Função
            </h2>
            <div className="font-body-lg text-on-surface-variant space-y-4 leading-relaxed whitespace-pre-wrap">
              {vaga.descricao}
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-lg sm:p-xl neo-shadow glass-card">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-secondary-container" /> Requisitos
            </h2>
            <div className="font-body-lg text-on-surface-variant space-y-2 whitespace-pre-wrap">
              {vaga.requisitos}
            </div>
          </div>
        </div>

        {/* Right Column (Sidebar) */}
        <div className="space-y-6">
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-lg neo-shadow glass-card">
            <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4">Sobre a Empresa</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-surface-bright flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-headline-sm text-on-surface font-bold">{vaga.Empresa?.nome || 'Empresa'}</div>
                <a href="#" className="text-primary font-label-md text-sm hover:underline">Ver perfil</a>
              </div>
            </div>
            <p className="font-body-sm text-on-surface-variant leading-relaxed">
              Uma empresa inovadora focada em construir o futuro da tecnologia. Junte-se a nós para causar um impacto real.
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default DetalhesVaga;
