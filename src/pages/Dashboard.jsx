import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Briefcase, Users, CheckCircle2 } from 'lucide-react';

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/dashboard/estatisticas')
      .then(res => setStats(res.data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl font-medium backdrop-blur-md">
      Erro ao carregar dashboard: {error}
    </motion.div>
  );
  
  if (!stats) return (
    <div className="flex justify-center items-center py-32">
      <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
    </div>
  );

  const statCards = [
    { title: 'Total de Vagas', value: stats.totalVagas, icon: Briefcase, color: 'text-primary', bg: 'bg-primary/10' },
    { title: 'Vagas Abertas', value: stats.vagasAbertas, icon: CheckCircle2, color: 'text-accent-cyan', bg: 'bg-accent-cyan/10' },
    { title: 'Candidaturas', value: stats.totalCandidaturas, icon: Users, color: 'text-accent-purple', bg: 'bg-accent-purple/10' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">Visão Geral</h2>
        <p className="text-slate-400 mt-1">Acompanhe as métricas e o desempenho da sua empresa.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCards.map((stat, i) => (
          <motion.div 
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bento-card p-6 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
            <div>
              <h3 className="text-slate-400 font-medium text-sm mb-1">{stat.title}</h3>
              <div className="text-4xl font-extrabold text-white tracking-tight">{stat.value}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Dashboard;
