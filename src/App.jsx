import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Vagas from './pages/Vagas';
import NovaVaga from './pages/NovaVaga';
import LandingPage from './pages/LandingPage';
import AuthScreen from './pages/AuthScreen';

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/auth';
  const isLandingPage = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      {!isAuthPage && <Navbar />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthScreen />} />
          <Route path="*" element={
            <div className={(isLandingPage || isAuthPage) ? "" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-16 relative z-10"}>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/vagas" element={<Vagas />} />
                <Route path="/nova-vaga" element={<NovaVaga />} />
              </Routes>
            </div>
          } />
        </Routes>
      </main>
      
      {!isAuthPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
