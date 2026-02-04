'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import ProjectSliderBtns from './ProjectSliderBtns';
import { Project } from '@/data/project-page';
import { useRef } from 'react';
import type { Swiper as SwiperInstance } from 'swiper';

type Props = {
  projects: Project[];
  activeIndex: number;
  onChange: (index: number) => void;
};

export default function ProjectSlider({
  projects,
  activeIndex,
  onChange,
}: Props) {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <div className="w-full xl:w-[50%]">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => onChange(swiper.realIndex)}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <div className="h-80 relative">
              <Image
                src={project.image}
                fill
                className="object-cover"
                alt={project.title}
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Footer UI */}
        <div className="flex items-start justify-between mt-4">
          <div className="mb-4 text-sm">
            {String(activeIndex + 1).padStart(2, '0')} of{' '}
            {String(projects.length).padStart(2, '0')}
          </div>

          <ProjectSliderBtns
            onPrev={() => swiperRef.current?.slidePrev()}
            onNext={() => swiperRef.current?.slideNext()}
            containerStyles="flex gap-2"
            btnStyles="bg-green-500 hover:bg-green-600 text-slate-800 text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
          />
        </div>
      </Swiper>
    </div>
  );
}
