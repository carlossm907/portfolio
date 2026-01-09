import { GlitchText } from '../ui/GlitchText';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../../types/index';
import { useTranslation } from 'react-i18next';
import { PageLayout } from '../layout/PageLayout';

export const ProjectsPage = () => {

  const { t } = useTranslation();

  const projects: Project[] = [
    {
      id: 0,
      title: t('projects.list.0.title'),
      description: t('projects.list.0.description'),
      tech: ['React', 'Spring Boot', 'MySQL', 'React Native', 'JWT', 'IoT'],
      github: 'https://github.com/momentum-iot',
      image: '',
    },
    {
      id: 1,
      title: t('projects.list.1.title'),
      description: t('projects.list.1.description'),
      tech: ['Vue.js', '.NET', 'MySQL'],
      github: 'https://github.com/FoodFacts2',
      image: '',
    },
    {
      id: 2,
      title: t('projects.list.2.title'),
      description: t('projects.list.2.description'),
      tech: ['Angular', 'Spring Boot', 'Docker', 'MySQL'],
      github: 'https://github.com/PropiConnect',
      image: '',
    },
  ];

  return (
    <PageLayout>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <GlitchText className="text-white">{t('projects.title')}</GlitchText>
        </h1>
        <p className="text-gray-400 font-mono mb-12">{t('projects.command')}</p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
    </PageLayout>
  );
};