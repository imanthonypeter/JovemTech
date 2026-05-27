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
      await axios.post('http://localhost:5000/api/vagas', {
        titulo, descricao, requisitos, empresaId: null
      });
      navigate('/vagas');
    } catch (error) {
      setErro('Erro ao criar vaga: ' + error.message);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">Criar Nova Oportunidade</h2>
        <p className="text-slate-400 mt-1">Preencha os detalhes para encontrar o talento ideal.</p>
      </div>
      
      {erro && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl font-medium mb-6">
          {erro}
        </motion.div>
      )}
      
      <form onSubmit={handleSubmit} className="bento-card p-8 sm:p-10">
        <div className="space-y-8">
          <div>
            <label className="flex items-center text-sm font-semibold text-slate-300 mb-3">
              <Briefcase className="w-4 h-4 mr-2 text-primary" /> Título da Vaga
            </label>
            <input 
              type="text" 
              value={titulo} 
              onChange={e => setTitulo(e.target.value)} 
              required 
              className="appearance-none block w-full px-4 py-3 border border-slate-700 rounded-xl bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="Ex: Senior Frontend Engineer"
            />
          </div>
          
          <div>
            <label className="flex items-center text-sm font-semibold text-slate-300 mb-3">
              <FileText className="w-4 h-4 mr-2 text-primary" /> Descrição da Função
            </label>
            <textarea 
              rows={4} 
              value={descricao} 
              onChange={e => setDescricao(e.target.value)} 
              required 
              className="appearance-none block w-full px-4 py-3 border border-slate-700 rounded-xl bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
              placeholder="Descreva as responsabilidades e o dia a dia..."
            />
          </div>
          
          <div>
            <label className="flex items-center text-sm font-semibold text-slate-300 mb-3">
              <ListChecks className="w-4 h-4 mr-2 text-primary" /> Requisitos e Qualificações
            </label>
            <textarea 
              rows={4} 
              value={requisitos} 
              onChange={e => setRequisitos(e.target.value)} 
              className="appearance-none block w-full px-4 py-3 border border-slate-700 rounded-xl bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
              placeholder="Quais habilidades o candidato precisa ter?"
            />
          </div>
        </div>
        
        <div className="mt-10 flex items-center justify-end gap-4 border-t border-slate-800 pt-6">
          <button type="button" onClick={() => navigate('/vagas')} className="btn-secondary py-2.5 px-6 text-sm">
            Cancelar
          </button>
          <button type="submit" className="btn-premium py-2.5 px-8 text-sm">
            Publicar Vaga
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default NovaVaga;
