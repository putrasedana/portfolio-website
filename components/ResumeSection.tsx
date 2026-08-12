"use client";

import { Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { about, education, experience, skills } from "@/data/resume-page";
import { useSearchParams } from "next/navigation";

const ResumeContent = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "Experience";

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 py-12 xl:py-0 mb-20">
      <Tabs defaultValue={tab} className="w-full flex flex-col xl:flex-row gap-12">
        <TabsList className="flex flex-col w-full max-w-72 mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="Experience">Experience</TabsTrigger>
          <TabsTrigger value="Education">Education</TabsTrigger>
          <TabsTrigger value="Skills">Skills</TabsTrigger>
          <TabsTrigger value="About Me">About Me</TabsTrigger>
        </TabsList>

        <div className="w-full">
          <TabsContent value="Experience" className="w-full">
            <div className="flex flex-col gap-7.5 text-center xl:text-left">
              <h2 className="text-4xl font-bold">{experience.title}</h2>
              <p className="max-w-150 text-white/60 mx-auto xl:mx-0 text-justify">{experience.description}</p>
              <ScrollArea>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7.5">
                  {experience.items.map((item, index) => (
                    <li
                      key={index}
                      className="bg-slate-800 h-44 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3"
                    >
                      <span className="text-green-400">{item.duration}</span>
                      <h2 className="text-xl text-center lg:text-left">{item.position}</h2>
                      <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        <p className="text-white/60">{item.company}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="Education" className="w-full">
            <div className="flex flex-col gap-7.5 text-center xl:text-left">
              <h2 className="text-4xl font-bold">{education.title}</h2>
              <p className="max-w-150 text-white/60 mx-auto xl:mx-0 text-justify">{education.description}</p>
              <ScrollArea>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7.5">
                  {education.items.map((item, index) => (
                    <li
                      key={index}
                      className="bg-slate-800 h-44 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3"
                    >
                      <span className="text-green-400">{item.duration}</span>
                      <h2 className="text-xl text-center lg:text-left">{item.degree}</h2>
                      <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        <p className="text-white/60">{item.institution}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="Skills" className="w-full h-full">
            <div className="flex flex-col gap-7.5">
              <div className="flex flex-col gap-7.5 text-center xl:text-left">
                <h2 className="text-4xl font-bold">{skills.title}</h2>
                <p className="max-w-150 text-white/60 mx-auto xl:mx-0 text-justify">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 xl:gap-7.5 gap-4">
                {skills.skillsList.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-26 bg-slate-800 rounded-xl flex justify-center items-center group cursor-pointer">
                            <div className="text-6xl group-hover:text-green-400 transition-all duration-300">
                              <Icon />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="About Me" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-7.5">
              <h2 className="text-4xl font-bold">{about.title}</h2>
              <p className="max-w-150 text-white/60 mx-auto xl:mx-0 text-justify">{about.description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 max-w-155 sm:mx-auto xl:mx-0">
                {about.info.map((item, index) => (
                  <li key={index} className="flex items-center justify-start gap-4">
                    <span className="text-white/60">{item.fieldName}:</span>
                    <span>{item.fieldValue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

const ResumeSection = () => {
  return (
    <section id="resume" className="w-full">
      <Suspense fallback={null}>
        <ResumeContent />
      </Suspense>
    </section>
  );
};

export default ResumeSection;
