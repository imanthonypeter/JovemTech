import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Briefcase, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

function Vagas() {
  const [vagas, setVagas] = useState(null);

  useEffect(() => {
    carregarVagas();
  }, []);

  const carregarVagas = () => {
    axios.get('http://localhost:5000/api/vagas')
      .then(res => setVagas(res.data))
      .catch(err => console.error(err));
  };

  const deletarVaga = (id) => {
    if(window.confirm('Deseja remover esta vaga definitivamente?')) {
      axios.delete(`http://localhost:5000/api/vagas/${id}`)
        .then(() => carregarVagas())
        .catch(err => console.error(err));
    }
  };

  if (!vagas) return (
    <div className="flex justify-center items-center py-32">
      <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
    </div>
  );

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Vagas Disponíveis</h2>
          <p className="text-slate-400 mt-1">Gerencie as oportunidades em aberto.</p>
        </div>
        <Link to="/nova-vaga" className="btn-premium py-2.5 px-6 flex items-center text-sm shadow-none hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
          <Plus className="w-4 h-4 mr-2" />
          Nova Vaga
        </Link>
      </div>
      
      {vagas.length === 0 ? (
        <div className="border border-dashed border-white/10 rounded-2xl p-12 text-center flex flex-col items-center justify-center bg-white/[0.02]">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
            <Briefcase className="w-8 h-8 text-slate-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Nenhuma vaga ativa</h3>
          <p className="text-slate-400 mb-6">Comece criando a primeira oportunidade para atrair talentos.</p>
          <Link to="/nova-vaga" className="btn-secondary">Criar Oportunidade</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {vagas.map((vaga, i) => (
              <motion.div 
                key={vaga.id} 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-card border border-card-border rounded-2xl p-6 hover:bg-card-hover hover:border-primary/30 transition-all duration-300 group flex flex-col relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="inline-flex px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-widest border border-green-500/20">
                    {vaga.status}
                  </div>
                  <button 
                    onClick={() => deletarVaga(vaga.id)}
                    className="p-2 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-400/10 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{vaga.titulo}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3 flex-grow">{vaga.descricao}</p>
                
                <button className="w-full py-2.5 rounded-xl bg-white/5 text-white text-sm font-medium border border-white/10 hover:bg-white/10 transition-colors">
                  Visualizar Detalhes
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
}

export default Vagas;
