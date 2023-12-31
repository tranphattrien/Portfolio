"use client";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  source,
  live
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="group relative bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:h-auto group-even:even:pl-8 hover:bg-gray-200 transition">
        <div className="h-full pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 text-gray-700 text-justify">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-4 pb-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex gap-2 mt-4">
            <Link
              className="bg-[#a4c3b2] text-[0.7rem] uppercase tracking-wider inline-flex items-center px-4 py-2 transition ease-in-out delay-75 text-black font-medium rounded-md hover:-translate-y-1 hover:scale-100"
              href={source}
            >
              Source Code
            </Link>
            {live != "" && (
              <Link
                className="bg-[#a4c3b2] text-[0.7rem] uppercase tracking-wider inline-flex items-center px-4 py-2 transition ease-in-out delay-75 text-black font-medium rounded-md hover:-translate-y-1 hover:scale-100"
                href={live}
              >
                Live
              </Link>
            )}
          </div>
        </div>
        <Image
          src={imageUrl}
          alt="My project"
          quality={95}
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
        transition
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:-translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] 
        group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
