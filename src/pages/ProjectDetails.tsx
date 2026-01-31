import { useParams } from 'react-router-dom';
import { getProjectBySlug } from '@/data/projects';
import ProjectDetailContent from '@/components/projects/ProjectDetailContent';
import { NotFound } from './NotFound';

export function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug || '');

  if (!project) {
    return <NotFound />;
  }

  return <ProjectDetailContent project={project} />;
}
