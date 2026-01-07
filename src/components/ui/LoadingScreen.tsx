import { useTranslation } from 'react-i18next';

export const LoadingScreen = () => {

  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-green-400 border-t-transparent mb-4"></div>
        <p className="text-green-400 font-mono animate-pulse">{t('loading')}</p>
      </div>
    </div>
  );
};