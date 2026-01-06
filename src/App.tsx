import { useState } from 'react';
import { CustomCursor } from './components/ui/CustomCursor';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { StaticGrid } from './components/ui/StaticGrid';
import { Sidebar } from './components/layout/Sidebar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './components/home/HomePage';
import { AboutPage } from './components/about/AboutPage';
import { ProjectsPage } from './components/projects/ProjectPage';
import { ContactPage } from './components/contact/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [loading, setLoading] = useState(false);

  const navigate = (page: string) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setLoading(false);
      window.scrollTo(0, 0);
    }, 400);
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      <CustomCursor />
      <StaticGrid />
      <Sidebar currentPage={currentPage} onNavigate={navigate} />

      {loading && <LoadingScreen />}

      <main className={`relative z-10 ml-20 md:ml-24 transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {currentPage === 'home' && <HomePage onNavigate={navigate} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'projects' && <ProjectsPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer />
    </div>
  );
}

export default App;