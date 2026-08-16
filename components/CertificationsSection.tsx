"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, X } from "lucide-react";
import { certifications } from "@/data/resume";

type Props = {
  showButton?: boolean;
};

const CertificationsSection = ({ showButton = true }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  const closeModal = () => setActiveIndex(null);

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + certifications.items.length) % certifications.items.length);
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % certifications.items.length);
  };

  const activeItem = activeIndex !== null ? certifications.items[activeIndex] : null;

  return (
    <section
      id="certifications"
      className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 py-12 xl:py-0 mb-20"
    >
      <div className="flex flex-col gap-6 text-center xl:text-left">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between justify-between items-center">
          <h2 className="text-4xl font-bold">{certifications.title}</h2>

          <div className="flex justify-center xl:justify-start">
            <Link
              href="/certifications"
              className="inline-flex items-center justify-center rounded-lg bg-green-500 px-8 py-3 font-semibold text-slate-950 transition hover:bg-green-400 "
            >
              See all certifications
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2">
          {certifications.items.map((item, index) => (
            <article
              key={index}
              className="md:col-span-3 overflow-hidden rounded-lg border border-white/20 bg-slate-950 p-4"
            >
              <button
                type="button"
                onClick={() => handleImageClick(index)}
                className="relative h-88 w-full overflow-hidden rounded-lg bg-slate-900 transition hover:opacity-90"
                aria-label={`Open ${item.title} certificate preview`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                <div className="pointer-events-none absolute inset-0 flex items-end justify-center p-4">
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
                    View preview
                  </span>
                </div>
              </button>

              <div className="mt-4 flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-green-400 transition hover:bg-white/20"
                  aria-label={`Open external certificate link for ${item.title}`}
                  title={`Open external certificate link for ${item.title}`}
                >
                  <ExternalLink size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeItem ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/90 text-white transition hover:bg-slate-800"
              aria-label="Close preview"
            >
              <X size={20} />
            </button>

            <div className="relative h-[70vh] bg-slate-900">
              <Image src={activeItem.image} alt={activeItem.title} fill className="object-contain" sizes="100vw" />
            </div>

            <div className="flex flex-col gap-4 p-6 sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-green-400">Certificate preview</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{activeItem.title}</h3>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={showPrev}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                    aria-label="Previous certificate"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                    aria-label="Next certificate"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default CertificationsSection;
