"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <div>
        {/* Reduced image container size */}
        <div className="w-60 h-60 sm:w-80 sm:h-80 lg:w-100 lg:h-100 mix-blend-lighten absolute">
          <Image
            src="/assets/photo.jpg"
            priority
            quality={75}
            fill
            alt="Profile Image of Putra Sedana"
            className="object-contain rounded-full"
            sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 400px"
          />
        </div>

        {/* Adjusted circle to match */}
        <motion.svg
          className="w-62 h-62 sm:w-82 sm:h-82 lg:w-102 lg:h-102"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="248"
            cy="248"
            r="245"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 2", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </div>
    </div>
  );
};
export default Photo;
