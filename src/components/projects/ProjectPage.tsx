import { GlitchText } from '../ui/GlitchText';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../../types/index';

export const ProjectsPage = () => {
  const projects: Project[] = [
    {
      id: 0,
      title: 'Sistema de Gestión de Usuarios en Gimnasios ',
      description: 'Diseño e implementación de una solución full-stack para la gestión de usuarios y concurrencia de un gimnasio, desarrollando el backend en Spring Boot con arquitectura en capas y APIs REST, frontend web en React y aplicación móvil en React Native para manejo de flujo de usuarios y control de concurrencia.',
      tech: ['React', 'Spring Boot', 'MySQL', 'React Native', 'JWT', 'IoT'],
      github: 'https://github.com/momentum-iot',
      image: '',
    },
    {
      id: 1,
      title: 'Sistema de Entrega de Alimentos con Detalle Calórico',
      description: 'Diseño y desarrollo de un sistema full-stack para la gestión de órdenes de alimentos y visualización de información calórica, implementando el backend en .NET con Domain-Driven Design además de APIs REST y frontend en Vue.js para visualización dinámica de información calórica.',
      tech: ['Vue.js', '.NET', 'MySQL'],
      github: 'https://github.com/FoodFacts2',
      image: '',
    },
    {
      id: 2,
      title: 'Sistema de Compra, Venta y Alquiler de Departamentos',
      description: 'Desarrollo de una aplicación web full-stack para la administración de compra, venta y alquiler de departamentos, implementando flujos de usuario, gestión de propiedades y consumo de servicios backend en Spring Boot usando separación de capas de dominio y aplicación, orientados a la experiencia del usuario.',
      tech: ['Angular', 'Spring Boot', 'Docker', 'MySQL'],
      github: 'https://github.com/PropiConnect',
      image: '',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <GlitchText className="text-white">Proyectos</GlitchText>
        </h1>
        <p className="text-gray-400 font-mono mb-12">$ ls -la ~/projects</p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};