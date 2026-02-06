// components/projects/ProjectCategorySection.tsx
'use client';

import { motion } from 'framer-motion';
import { ProjectCategory } from '@/data/project-page';
import ProjectViewer from './ProjectViewer';
import Image from 'next/image';

type Props = {
  category: ProjectCategory;
  index: number;
};

export default function ProjectCategorySection({ category, index }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4 },
      }}
      className="flex flex-col gap-6"
    >
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between justify-between items-center mb-8">
        <div className="flex items-baseline gap-4">
          <span className="text-4xl lg:text-5xl font-extrabold text-transparent [-webkit-text-stroke:1px_white]">
            {String(index + 1).padStart(2, '0')}
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-transparent [-webkit-text-stroke:1px_white]">
            {category.label}
          </h2>
        </div>

        <div
          className={`w-15 h-15 rounded-full flex items-center justify-center ${category.id == 'nextjs' ? 'bg-white  border border-white' : 'bg-transparent'}`}
        >
          <Image
            src={category.icon}
            alt={`${category.label} icon`}
            width={100}
            height={100}
            className="object-contain"
            priority={index === 0}
          />
        </div>
      </div>

      <ProjectViewer projects={category.projects} />

      <div className="border border-white/20" />
    </motion.section>
  );
}
