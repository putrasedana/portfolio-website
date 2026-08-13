"use client";

import { useState } from "react";
import Image from "next/image";
import { BsArrowUpRight, BsGithub, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { projectCategories } from "@/data/project-page";
import Link from "next/link";

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 py-12 xl:py-0 mb-20">
      <div className="flex flex-col gap-24">
        {projectCategories.map((category, categoryIndex) => (
          <CategoryBlock key={category.id} category={category} index={categoryIndex} />
        ))}
      </div>
    </section>
  );
};

type CategoryProps = {
  category: (typeof projectCategories)[number];
  index: number;
};

const CategoryBlock = ({ category }: CategoryProps) => {
  const featuredProjects = category.projects.filter((project) => project.featured);

  if (featuredProjects.length === 0) {
    return null;
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const project = featuredProjects[activeIndex];

  return (
    <section className="flex flex-col gap-10 py-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between justify-between items-center">
        <h2 className="text-4xl font-bold">{category.label}</h2>
        <div className="flex justify-center xl:justify-start">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-lg bg-green-500 px-8 py-3 font-semibold text-slate-950 transition hover:bg-green-400"
          >
            See all projects
          </Link>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-8">
        <div className="w-full xl:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <span className="text-sm uppercase tracking-[0.4em] text-green-400">Featured project</span>
            <h3 className="text-3xl font-bold">{project.title}</h3>
          </div>

          <div>
            <h4 className="mb-4 text-sm uppercase tracking-[0.4em] text-white/60">Tech stack</h4>
            <ul className="flex flex-wrap gap-3">
              {project.stack.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 rounded-full  py-2 px-3 text-sm border-white/10 bg-white/5 text-slate-200"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={24}
                    height={24}
                    className={item.name === "Express.js" ? "rounded-full" : ""}
                  />
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm transition hover:bg-green-500 hover:text-slate-900 border-white/10 bg-white/5 text-slate-200"
              >
                <BsArrowUpRight className="text-base" />
                Live Demo
              </a>
            ) : null}

            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm transition hover:bg-green-500 hover:text-slate-900 border-white/10 bg-white/5 text-slate-200"
              >
                <BsGithub className="text-base" />
                GitHub
              </a>
            ) : null}
          </div>

          <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/20">
            <div className="text-sm text-white/60">
              {String(activeIndex + 1).padStart(2, "0")} / {String(featuredProjects.length).padStart(2, "0")}
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setActiveIndex((current) => Math.max(current - 1, 0))}
                disabled={activeIndex === 0}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Previous project"
              >
                <BsChevronLeft />
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((current) => Math.min(current + 1, featuredProjects.length - 1))}
                disabled={activeIndex === featuredProjects.length - 1}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Next project"
              >
                <BsChevronRight />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-1/2">
          <div className="relative aspect-video overflow-hidden rounded-lg border border-white/20 bg-slate-950">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 50vw"
              priority={activeIndex === 0}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
