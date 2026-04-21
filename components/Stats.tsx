"use client";

import { stats } from "@/data/home-page";
import Link from "next/link";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <section className="mt-10">
      <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
        {stats.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.path}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start group cursor-pointer"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold group-hover:text-green-400 transition-colors duration-300"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-25" : "max-w-37.5"
                } leading-snug text-white/80 group-hover:text-white transition-colors duration-300`}
              >
                {item.text}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default Stats;
