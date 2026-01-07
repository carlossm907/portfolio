import { Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GlitchText } from '../ui/GlitchText';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage = ({ onNavigate }: HomePageProps) => {

  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <div className="mb-8">
          <p className="text-green-400 font-mono text-sm mb-2 animate-pulse">$ carlossm907</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <GlitchText className="text-white">{t('home.title')}</GlitchText>
          </h1>
          <h2 className="text-2xl md:text-4xl text-purple-400 font-mono mb-6">
            {t('home.subtitle')}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            {t('home.description')}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          <button
            onClick={() => onNavigate('projects')}
            className="bg-green-500 text-black px-6 py-3 font-mono font-bold hover:bg-green-400 transition-all duration-300 border-2 border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
          >
            {t('home.viewProjects')}
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-transparent text-green-400 px-6 py-3 font-mono font-bold border-2 border-green-400 hover:bg-green-400/10 transition-all duration-300"
          >
            {t('home.contactButton')}
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['React', 'TypeScript', 'Azure', 'Python', 'MySQL', 'Docker', 'AWS', 'Git', 'C++', 'Angular', 'Spring Boot', '.NET', 'Vue.js', 'Flutter', 'React Native', 'Kotlin'].map((tech, i) => (
            <div
              key={tech}
              className="bg-gradient-to-br from-purple-900/30 to-green-900/30 p-4 border border-green-500/30 hover:border-green-400 transition-all duration-300 group hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Code2 className="w-6 h-6 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-gray-300 font-mono text-sm">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};