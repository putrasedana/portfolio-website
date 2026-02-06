'use client';

import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  about,
  certifications,
  education,
  experience,
  skills,
} from '@/data/resume-page';
import Image from 'next/image';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4 },
      }}
      className=" flex items-center justify-center py-12 xl:py-6 mx-auto max-w-5xl w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0"
    >
      <Tabs
        defaultValue="Experience"
        className="w-full flex flex-col xl:flex-row gap-12"
      >
        <TabsList className="flex flex-col w-full max-w-72 mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="Experience">Experience</TabsTrigger>
          <TabsTrigger value="Education">Education</TabsTrigger>
          <TabsTrigger value="Skills">Skills</TabsTrigger>
          <TabsTrigger value="Certifications">Certifications</TabsTrigger>
          <TabsTrigger value="About Me">About Me</TabsTrigger>
        </TabsList>

        {/* content */}
        <div className="w-full">
          {/* Experience */}
          <TabsContent value="Experience" className="w-full">
            <div className="flex flex-col gap-7.5 text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-150 text-white/60 mx-auto xl:mx-0 text-justify">
                {experience.description}
              </p>
              <ScrollArea className="h-92">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7.5">
                  {experience.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-slate-800 h-44 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3"
                      >
                        <span className="text-green-400">{item.duration}</span>
                        <h3 className="text-xl text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* Education */}
          <TabsContent value="Education" className="w-full">
            <div className="flex flex-col gap-7.5 text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-150 text-white/60 mx-auto xl:mx-0 text-justify">
                {education.description}
              </p>
              <ScrollArea className="h-92">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7.5">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-slate-800 h-44 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3"
                      >
                        <span className="text-green-400">{item.duration}</span>
                        <h3 className="text-xl text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* Skills */}
          <TabsContent value="Skills" className="w-full h-full">
            <div className="flex flex-col gap-7.5">
              <div className="flex flex-col gap-7.5 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-150 text-white/60 mx-auto xl:mx-0 text-justify">
                  {skills.description}
                </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:gap-7.5 gap-4">
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

          {/* Certifications */}
          <TabsContent value="Certifications" className="w-full">
            <div className="flex flex-col gap-6 text-center xl:text-left">
              {/* Title */}
              <h3 className="text-4xl font-bold">{certifications.title}</h3>

              {/* Certificates */}
              <ScrollArea className="h-110">
                <ul className="flex flex-col gap-y-7.5">
                  {certifications.items.map((item, index) => (
                    <li key={index} className="w-full">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                        aria-label={`View ${item.title} certificate`}
                      >
                        <div className="relative w-full h-110 rounded-lg overflow-hidden bg-slate-800">
                          {/* Certificate Image */}
                          <Image
                            src={item.image}
                            alt={`${item.title} certificate`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />

                          {/* Thin black overlay */}
                          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* About Me */}
          <TabsContent
            value="About Me"
            className="w-full text-center xl:text-left"
          >
            <div className="flex flex-col gap-7.5">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-150 text-white/60 mx-auto xl:mx-0 text-justify">
                {about.description}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 max-w-155 sm:mx-auto xl:mx-0">
                {about.info.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-start gap-4"
                  >
                    <span className="text-white/60">{item.fieldName}</span>
                    <span className="xl:text-lg">{item.fieldValue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </motion.div>
  );
};
export default Resume;
