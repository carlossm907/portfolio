import { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { GlitchText } from '../ui/GlitchText';
import { useTranslation } from 'react-i18next';

export const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <GlitchText className="text-white">{t('contact.title')}</GlitchText>
        </h1>
        <p className="text-gray-400 font-mono mb-12">{t('contact.command')}</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="space-y-6">
              <div>
                <label className="text-green-400 font-mono text-sm block mb-2">{t('contact.form.name')}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/50 border border-green-500/30 px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors font-mono"
                  required
                />
              </div>

              <div>
                <label className="text-green-400 font-mono text-sm block mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/50 border border-green-500/30 px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors font-mono"
                  required
                />
              </div>

              <div>
                <label className="text-green-400 font-mono text-sm block mb-2">{t('contact.form.message')}</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-black/50 border border-green-500/30 px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors font-mono resize-none"
                  required
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-green-500 text-black px-6 py-3 font-mono font-bold hover:bg-green-400 transition-all duration-300 border-2 border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
              >
                {submitted ? t('contact.form.submitted') : t('contact.form.submit')}
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-green-900/20 p-6 border border-green-500/30">
              <h3 className="text-green-400 font-mono text-xl mb-6">{t('contact.connect')}</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:tu@email.com"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors group"
                >
                  <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-sm">carlos_sm90@outlook.com</span>
                </a>

                <a
                  href="https://github.com/carlossm907"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors group"
                >
                  <Github className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-sm">github.com/carlossm907</span>
                </a>

                <a
                  href="https://linkedin.com/in/carlossanchez90"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors group"
                >
                  <Linkedin className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-sm">linkedin.com/in/carlossanchez90</span>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-green-900/20 p-6 border border-green-500/30">
              <h3 className="text-green-400 font-mono text-xl mb-4">{t('contact.availability.title')}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t('contact.availability.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};