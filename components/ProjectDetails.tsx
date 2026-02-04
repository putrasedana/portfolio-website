import { Project } from '@/data/project-page';
import ProjectActions from './ProjectActions';
import Image from 'next/image';

type Props = {
  project: Project;
};

export default function ProjectDetails({ project }: Props) {
  return (
    <div className="w-full xl:w-[50%] flex flex-col xl:justify-between">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold capitalize">{project.title}</h2>

        <p className="text-white/70">{project.description}</p>

        <ul className="flex gap-4">
          {project.stack.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              {item.name === 'Next.js' ? (
                <div className="bg-white rounded-full flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={34}
                    height={34}
                  />
                </div>
              ) : (
                <Image src={item.icon} alt={item.name} width={28} height={28} />
              )}

              <span className="text-white text-sm">{item.name}</span>
            </li>
          ))}
        </ul>

        <div className="border border-white/20" />

        <ProjectActions github={project.github} live={project.live} />
      </div>
    </div>
  );
}
