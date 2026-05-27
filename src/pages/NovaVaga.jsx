import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, FileText, ListChecks } from 'lucide-react';

function NovaVaga() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [requisitos, setRequisitos] = useState('');
  const [erro, setErro] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/vagas', {
        titulo, descricao, requisitos, empresaId: null
      });
      navigate('/vagas');
    } catch (error) {
      setErro('Erro ao criar vaga: ' + error.message);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto pt-24 px-4 w-full">
      <div className="mb-8">
        <h2 className="font-display-lg text-headline-lg font-bold text-on-surface tracking-tight">Criar Nova Oportunidade</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-xs">Preencha os detalhes para encontrar o talento ideal.</p>
      </div>
      
      {erro && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-error-container border border-error/20 text-error p-md rounded-xl font-label-md text-label-md mb-6">
          {erro}
        </motion.div>
      )}
      
      <form onSubmit={handleSubmit} className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-lg sm:p-xl neo-shadow glass-card relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-secondary-container opacity-100"></div>
        <div className="space-y-8 relative z-10">
          <div>
            <label className="flex items-center font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-wider">
              <Briefcase className="w-4 h-4 mr-2 text-primary" /> Título da Vaga
            </label>
            <input 
              type="text" 
              value={titulo} 
              onChange={e => setTitulo(e.target.value)} 
              required 
              className="appearance-none block w-full px-4 py-3 border border-outline-variant/50 rounded-lg bg-surface-bright text-on-surface font-body-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all shadow-sm"
              placeholder="Ex: Senior Frontend Engineer"
            />
          </div>
          
          <div>
            <label className="flex items-center font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-wider">
              <FileText className="w-4 h-4 mr-2 text-primary" /> Descrição da Função
            </label>
            <textarea 
              rows={4} 
              value={descricao} 
              onChange={e => setDescricao(e.target.value)} 
              required 
              className="appearance-none block w-full px-4 py-3 border border-outline-variant/50 rounded-lg bg-surface-bright text-on-surface font-body-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none shadow-sm"
              placeholder="Descreva as responsabilidades e o dia a dia..."
            />
          </div>
          
          <div>
            <label className="flex items-center font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-wider">
              <ListChecks className="w-4 h-4 mr-2 text-primary" /> Requisitos e Qualificações
            </label>
            <textarea 
              rows={4} 
              value={requisitos} 
              onChange={e => setRequisitos(e.target.value)} 
              className="appearance-none block w-full px-4 py-3 border border-outline-variant/50 rounded-lg bg-surface-bright text-on-surface font-body-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none shadow-sm"
              placeholder="Quais habilidades o candidato precisa ter?"
            />
          </div>
        </div>
        
        <div className="mt-10 flex items-center justify-end gap-4 pt-6">
          <button type="button" onClick={() => navigate('/vagas')} className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors px-4 py-2">
            Cancelar
          </button>
          <button type="submit" className="bg-gradient-to-r from-primary to-secondary-container text-white font-label-md text-label-md px-8 py-3 rounded-lg shadow-[0_4px_14px_0_rgba(0,82,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,82,255,0.23)] hover:scale-[1.02] active:scale-95 transition-all">
            Publicar Vaga
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default NovaVaga;
