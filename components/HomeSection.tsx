"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const HomeSection = () => {
  return (
    <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 py-12 xl:py-20 mb-20">
      <div className="flex flex-col xl:flex-row items-center justify-between">
        <div className="text-center xl:text-left order-2 xl:order-0">
          <span className="text-xl">Web Developer</span>
          <h1 className="h1 my-6">
            Hello I&apos;m <br />
            <span className="text-green-400">Putra Sedana</span>
          </h1>
          <p className="max-w-125 mb-9 text-white/80">
            A web developer skilled in HTML, CSS, JavaScript, and React. I love solving problems through code and am
            eager to bring my enthusiasm to a dynamic development team.
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
              title="View or Download CV"
            >
              <a
                href="https://drive.google.com/file/d/1jStjNe7E_UER82iOKrMWkQMwlKiWi8kO/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </a>
            </Button>

            <div className="mb-8 xl:mb-0">
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-green-500 rounded-full flex justify-center items-center text-base text-green-400 hover:bg-green-500 hover:text-slate-800 hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>
        <div className="order-1 xl:order-0 mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
