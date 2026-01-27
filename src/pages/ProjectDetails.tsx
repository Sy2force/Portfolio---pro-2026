import { useParams } from 'react-router-dom';
import { getProjectBySlug } from '@/data/projects';
import ProjectDetailContent from '@/components/projects/ProjectDetailContent';

export function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug || '');

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetailContent project={project} />;
}
