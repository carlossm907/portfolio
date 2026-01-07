import {
  Home,
  User,
  Briefcase,
  MessageSquare,
  Terminal,
  Github,
  Linkedin,
} from "lucide-react";

import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../ui/LanguageSelector";

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Sidebar = ({ currentPage, onNavigate }: SidebarProps) => {

  const { t } = useTranslation();

   const menuItems = [
    { id: 'home', label: t('nav.home'), icon: Home },
    { id: 'about', label: t('nav.about'), icon: User },
    { id: 'projects', label: t('nav.projects'), icon: Briefcase },
    { id: 'contact', label: t('nav.contact'), icon: MessageSquare },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 md:w-24 bg-black/95 border-r border-green-500/30 flex flex-col items-center py-8 z-40">
      <div className="mb-12">
        <Terminal className="w-8 h-8 text-green-400" />
      </div>

      <nav className="flex-1 flex flex-col gap-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`group flex flex-col items-center gap-2 transition-all duration-300 ${
                currentPage === item.id
                  ? "text-green-400"
                  : "text-gray-500 hover:text-green-400"
              }`}
              title={item.label}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs font-mono hidden md:block">
                {item.label}
              </span>
              {currentPage === item.id && (
                <div className="w-1 h-1 bg-green-400 rounded-full"></div>
              )}
            </button>
          );
        })}
      </nav>

      <div className="flex flex-col gap-4 items-center">

        <LanguageSelector />
        
        <a
          href="https://github.com/carlossm907"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-green-400 transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>

        <a
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-green-400 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </aside>
  );
};
