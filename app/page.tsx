import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:py-6">
        {/* text */}
        <div className="text-center xl:text-left order-2 xl:order-0">
          <span className="text-xl">Web Developer</span>
          <h1 className="h1 mb-6 mt-2">
            Hello I&apos;m <br />
            <span className="text-green-400">Putra Sedana</span>
          </h1>
          <p className="max-w-125 mb-9 text-white/80">
            A front-end-focused developer who understands back-end fundamentals
            to build complete, maintainable web applications.
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
            >
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </Button>
            <div className="mb-8 xl:mb-0">
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-green-500 rounded-full flex justify-center items-center text-base text-green-400 hover:bg-green-500 hover:text-slate-800 hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>
        {/* photo */}
        <div className="order-1 xl:order-0 mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
      <Stats />
    </div>
  );
};
export default Home;
