import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Vagas from './pages/Vagas';
import NovaVaga from './pages/NovaVaga';
import DetalhesVaga from './pages/DetalhesVaga';
import LandingPage from './pages/LandingPage';
import AuthScreen from './pages/AuthScreen';
import Onboarding from './pages/Onboarding';
import Termos from './pages/Termos';
import Privacidade from './pages/Privacidade';
import Cookies from './pages/Cookies';
import Sobre from './pages/Sobre';
import Contactos from './pages/Contactos';
import Comunidade from './pages/Comunidade';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/auth" replace />;
  }
  return children;
};


function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/auth';
  const isOnboardingPage = location.pathname === '/onboarding';
  
  const hideNavigation = isAuthPage || isOnboardingPage;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      {!hideNavigation && <Navbar />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthScreen />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/vagas" element={<ProtectedRoute><Vagas /></ProtectedRoute>} />
          <Route path="/vagas/:id" element={<ProtectedRoute><DetalhesVaga /></ProtectedRoute>} />
          <Route path="/nova-vaga" element={<ProtectedRoute><NovaVaga /></ProtectedRoute>} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      {!hideNavigation && <Footer />}
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AppContent />
        <Toaster position="bottom-right" toastOptions={{ className: 'dark:bg-slate-800 dark:text-white' }} />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
