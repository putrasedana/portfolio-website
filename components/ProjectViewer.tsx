// components/projects/ProjectViewer.tsx
'use client';

import { useState } from 'react';
import ProjectDetails from './ProjectDetails';
import ProjectSlider from './ProjectSlider';
import { Project } from '@/data/project-page';

type Props = {
  projects: Project[];
};

export default function ProjectViewer({ projects }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <ProjectDetails project={projects[activeIndex]} />
      <ProjectSlider
        projects={projects}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
      />
    </div>
  );
}
