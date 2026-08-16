import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { projectCategories } from "@/data/project";

export default function ProjectsPage() {
  const projects = projectCategories.flatMap((category) =>
    category.projects.map((project) => ({
      ...project,
      category: category.label,
    })),
  );

  return (
    <main className="min-h-screen py-12">
      <section className="xl:py-6 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0">
        <div className="mb-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-4">
          <h1 className="text-4xl font-bold">Projects</h1>

          <Link
            href="/#projects"
            className="inline-flex items-center rounded-lg bg-white/10 px-8 py-3 font-semibold transition hover:bg-white/20"
            aria-label="Back to main page projects"
          >
            Back to site
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <article
              key={`${project.title}-${idx}`}
              className="overflow-hidden rounded-lg border border-white/20 bg-slate-950 p-4 shadow-lg shadow-slate-950/20 "
            >
              <div className="relative h-56 w-full overflow-hidden rounded-lg bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition duration-300 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between p-3">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm">
                    Featured Project
                  </span>
                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-300 backdrop-blur-sm">
                    {project.live ? "Live" : "Code"}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>

                <div className="flex items-center gap-2">
                  {project.live ? (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-green-400 transition hover:bg-white/20"
                      aria-label={`Open live demo for ${project.title}`}
                      title={`Open live demo for ${project.title}`}
                    >
                      <ExternalLink size={18} />
                    </Link>
                  ) : null}
                  {project.github ? (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                      aria-label={`Open GitHub repository for ${project.title}`}
                      title={`Open GitHub repository for ${project.title}`}
                    >
                      <FaGithub size={18} />
                    </Link>
                  ) : null}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={`${project.title}-${item.name}`}
                    className="flex items-center gap-1.5 rounded-full  py-2 px-3 text-xs border-white/10 bg-white/5 text-slate-200"
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={18}
                      height={18}
                      className={item.name === "Express.js" ? "rounded-full" : ""}
                    />
                    {item.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
