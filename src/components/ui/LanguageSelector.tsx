import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors font-mono text-sm"
      title="Cambiar idioma / Change language"
    >
      <Globe className="w-5 h-5" />
      <span className="uppercase">{i18n.language}</span>
    </button>
  );
};