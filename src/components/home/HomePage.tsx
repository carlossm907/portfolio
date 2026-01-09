import { useTranslation } from "react-i18next";
import { GlitchText } from "../ui/GlitchText";
import { PageLayout } from "../layout/PageLayout";
import {
  SiReact,
  SiTypescript,
  SiFigma,
  SiPython,
  SiMysql,
  SiDocker,
  SiAmazonwebservices,
  SiGit,
  SiCplusplus,
  SiAngular,
  SiSpringboot,
  SiDotnet,
  SiVuedotjs,
  SiFlutter,
  SiKotlin,
} from "react-icons/si";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage = ({ onNavigate }: HomePageProps) => {
  const { t } = useTranslation();

  const technologies = [
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Figma", icon: SiFigma, color: "text-pink-500" },
    { name: "Python", icon: SiPython, color: "text-yellow-400" },
    { name: "MySQL", icon: SiMysql, color: "text-orange-400" },
    { name: "Docker", icon: SiDocker, color: "text-sky-400" },
    { name: "AWS", icon: SiAmazonwebservices, color: "text-amber-400" },
    { name: "Git", icon: SiGit, color: "text-red-400" },
    { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
    { name: "Angular", icon: SiAngular, color: "text-red-500" },
    { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
    { name: ".NET", icon: SiDotnet, color: "text-purple-500" },
    { name: "Vue.js", icon: SiVuedotjs, color: "text-emerald-400" },
    { name: "Flutter", icon: SiFlutter, color: "text-sky-500" },
    { name: "React Native", icon: SiReact, color: "text-cyan-400" },
    { name: "Kotlin", icon: SiKotlin, color: "text-purple-400" },
  ];

  return (
    <PageLayout>
        <div className="mb-8">
          <p className="text-green-400 font-mono text-sm mb-2 animate-pulse">
            $ carlossm907
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <GlitchText className="text-white">{t("home.title")}</GlitchText>
          </h1>
          <h2 className="text-2xl md:text-4xl text-purple-400 font-mono mb-6">
            {t("home.subtitle")}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            {t("home.description")}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          <button
            onClick={() => onNavigate("projects")}
            className="bg-green-500 text-black px-6 py-3 font-mono font-bold hover:bg-green-400 transition-all duration-300 border-2 border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
          >
            {t("home.viewProjects")}
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="bg-transparent text-green-400 px-6 py-3 font-mono font-bold border-2 border-green-400 hover:bg-green-400/10 transition-all duration-300"
          >
            {t("home.contactButton")}
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map(({ name, icon: Icon, color }, i) => (
            <div
              key={name}
              className="bg-gradient-to-br from-purple-900/30 to-green-900/30 p-4 border border-green-500/30 hover:border-green-400 transition-all duration-300 group hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Icon
                className={`w-8 h-8 mb-2 ${color} group-hover:scale-110 transition-transform`}
              />
              <p className="text-gray-300 font-mono text-sm">{name}</p>
            </div>
          ))}
        </div>
    </PageLayout>
  );
};
