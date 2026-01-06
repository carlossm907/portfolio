import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../../types/index';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div
      className="bg-gradient-to-br from-purple-900/20 to-green-900/20 border border-green-500/30 overflow-hidden group hover:border-green-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-48 overflow-hidden bg-black">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              className="flex items-center text-green-400 hover:text-green-300 transition-colors text-sm font-mono"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-1" />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              className="flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm font-mono"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};