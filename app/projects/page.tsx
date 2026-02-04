// app/projects/page.tsx
'use client';

import ProjectCategorySection from '@/components/ProjectCategorySection';
import { projectCategories } from '@/data/project-page';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-20"
      >
        {projectCategories.map((category, index) => (
          <ProjectCategorySection
            key={category.id}
            index={index}
            category={category}
          />
        ))}
      </motion.div>
    </section>
  );
}
