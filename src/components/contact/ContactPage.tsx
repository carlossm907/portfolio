import { useState } from "react";
import { Mail, Github, Linkedin, AlertCircle, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { GlitchText } from "../ui/GlitchText";
import { PageLayout } from "../layout/PageLayout";

export const ContactPage = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el mensaje");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError("Error de conexión. Asegúrate que el backend esté corriendo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <GlitchText className="text-white">{t("contact.title")}</GlitchText>
        </h1>

        <p className="text-gray-400 font-mono mb-12">{t("contact.command")}</p>

        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-green-400 font-mono text-sm block mb-2">
                {t("contact.form.name")}
              </label>
              <input
                type="text"
                required
                disabled={loading}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-black/50 border border-green-500/30 px-4 py-3 text-white focus:border-green-400 focus:outline-none font-mono"
              />
            </div>

            <div>
              <label className="text-green-400 font-mono text-sm block mb-2">
                Email
              </label>
              <input
                type="email"
                required
                disabled={loading}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-black/50 border border-green-500/30 px-4 py-3 text-white focus:border-green-400 focus:outline-none font-mono"
              />
            </div>

            <div>
              <label className="text-green-400 font-mono text-sm block mb-2">
                {t("contact.form.message")}
              </label>
              <textarea
                rows={5}
                required
                disabled={loading}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-black/50 border border-green-500/30 px-4 py-3 text-white focus:border-green-400 focus:outline-none font-mono resize-none"
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 p-4 flex gap-3">
                <AlertCircle className="text-red-400 w-5 h-5 mt-0.5" />
                <p className="text-red-400 text-sm font-mono">{error}</p>
              </div>
            )}

            {submitted && !error && (
              <div className="bg-green-500/10 border border-green-500/30 p-4 flex gap-3">
                <CheckCircle className="text-green-400 w-5 h-5 mt-0.5" />
                <p className="text-green-400 text-sm font-mono">
                  ¡Mensaje enviado! Te responderé pronto.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-green-500 text-black px-6 py-3 font-mono font-bold border-2 border-green-400 transition-all ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-400"
              }`}
            >
              {submitted
                ? t("contact.form.submitted")
                : t("contact.form.submit")}
            </button>
          </form>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-green-900/20 p-6 border border-green-500/30">
              <h3 className="text-green-400 font-mono text-xl mb-6">
                {t("contact.connect")}
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:carlos_sm90@outlook.com"
                  className="flex items-center text-gray-300 hover:text-green-400 group"
                >
                  <Mail className="w-5 h-5 mr-3 group-hover:scale-110" />
                  <span className="font-mono text-sm">
                    carlos_sm90@outlook.com
                  </span>
                </a>

                <a
                  href="https://github.com/carlossm907"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-green-400 group"
                >
                  <Github className="w-5 h-5 mr-3 group-hover:scale-110" />
                  <span className="font-mono text-sm">
                    github.com/carlossm907
                  </span>
                </a>

                <a
                  href="https://linkedin.com/in/carlossanchez90"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-green-400 group"
                >
                  <Linkedin className="w-5 h-5 mr-3 group-hover:scale-110" />
                  <span className="font-mono text-sm">
                    linkedin.com/in/carlossanchez90
                  </span>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-green-900/20 p-6 border border-green-500/30">
              <h3 className="text-green-400 font-mono text-xl mb-4">
                {t("contact.availability.title")}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t("contact.availability.description")}
              </p>
            </div>
          </div>
        </div>
    </PageLayout>
  );
};
