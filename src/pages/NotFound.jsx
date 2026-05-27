import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="relative inline-block">
          <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-500 mb-4 opacity-20">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-[100px] text-blue-600 dark:text-blue-500">explore_off</span>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Página Não Encontrada</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8">
          A página que procuras pode ter sido removida, mudado de nome, ou está temporariamente indisponível.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => navigate(-1)} className="!bg-slate-200 !text-slate-800 hover:!bg-slate-300 dark:!bg-slate-800 dark:!text-white dark:hover:!bg-slate-700 !shadow-none">
            Voltar Atrás
          </Button>
          <Button onClick={() => navigate('/')}>
            Ir para a Home
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
