import { Sparkles, Cpu } from 'lucide-react';
import { GlitchText } from '../ui/GlitchText';
import { useTranslation } from 'react-i18next';

export const AboutPage = () => {

  const { t } = useTranslation();

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          <GlitchText className="text-white">{t('about.title')}</GlitchText>
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="border-l-4 border-green-400 pl-4">
              <p className="text-gray-300 leading-relaxed">
                {t('about.description')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-green-900/20 p-6 border border-green-500/30">
              <h3 className="text-green-400 font-mono text-xl mb-4 flex items-center">
                <Sparkles className="w-5 h-5 mr-2" />
                {t('about.specialties.title')}
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">▹</span>
                  {t('about.specialties.fullstack')}
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">▹</span>
                  {t('about.specialties.cloud')}
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">▹</span>
                  {t('about.specialties.mobile')}
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">▹</span>
                  {t('about.specialties.devops')}
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-green-900/20 p-6 border border-green-500/30">
              <h3 className="text-green-400 font-mono text-xl mb-4 flex items-center">
                <Cpu className="w-5 h-5 mr-2" />
                {t('about.timeline.title')}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-green-400 font-mono text-sm">{t('about.timeline.period')}</p>
                  <p className="text-white font-semibold">{t('about.timeline.student')}</p>
                  <p className="text-gray-400 text-sm">{t('about.timeline.university')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-green-900/20 p-6 border border-green-500/30">
              <h3 className="text-green-400 font-mono text-xl mb-4">{t('about.timeline.interest')}</h3>
              <div className="flex flex-wrap gap-2">
                {['Frontend', 'RESTful APIs', 'Mobile Development', 'IoT', 'Backend'].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-mono"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};