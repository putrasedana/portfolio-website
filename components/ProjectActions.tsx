import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  github: string;
  live: string;
};

export default function ProjectActions({ github, live }: Props) {
  return (
    <div className="flex gap-4">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-gray-800/70 hover:text-green-500 transition-all flex items-center justify-center"
            >
              <BsGithub className="text-3xl" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>Github Repository</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-gray-800/70 hover:text-green-500 transition-all flex items-center justify-center"
            >
              <BsArrowUpRight className="text-3xl" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>Live Project</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
