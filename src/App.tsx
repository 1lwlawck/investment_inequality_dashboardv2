import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { LoginView } from './components/LoginView';
import { TopNav } from './components/TopNav';
import { Sidebar } from './components/Sidebar';
import { DashboardView } from './components/DashboardView';
import { UploadDataView } from './components/UploadDataView';
import { PCAAnalysisView } from './components/PCAAnalysisView';
import { ClusteringView } from './components/ClusteringView';
import { VisualizationView } from './components/VisualizationView';
import { PolicyView } from './components/PolicyView';
import { AboutView } from './components/AboutView';
import { Footer } from './components/Footer';

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeView, setActiveView] = useState('dashboard');

  const handleNavigateToLogin = () => {
    setShowLanding(false);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setShowLanding(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowLanding(true);
  };

  // Show landing page first
  if (showLanding && !isAuthenticated) {
    return <LandingPage onLogin={handleNavigateToLogin} />;
  }

  // Show login if not authenticated
  if (!isAuthenticated) {
    return <LoginView onLogin={handleLogin} />;
  }

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView />;
      case 'upload':
        return <UploadDataView />;
      case 'pca':
        return <PCAAnalysisView />;
      case 'clustering':
        return <ClusteringView />;
      case 'visualization':
        return <VisualizationView />;
      case 'policy':
        return <PolicyView />;
      case 'about':
        return <AboutView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNav onLogout={handleLogout} />
      <div className="flex">
        <Sidebar 
          activeView={activeView} 
          setActiveView={setActiveView}
        />
        <main className="flex-1 ml-72 mt-20 p-8">
          {renderView()}
          <Footer />
        </main>
      </div>
    </div>
  );
}