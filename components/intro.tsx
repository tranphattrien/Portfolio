"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import avatarImg from "@/assets/images/avatar.jpg";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
const Intro = () => {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2
            }}
          >
            <Image
              src={avatarImg}
              alt="Tran Phat Trien"
              priority={true}
              className="h-28 w-28 object-cover rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Tran Phat Trien.</span>{" "}
        I&apos;m a <span className="font-bold">front-end developer</span>, and
        I&apos;m always challenging myself to improve my skills and learn new
        technologies.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-700 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-950 active:scale-100 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          {" "}
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{" "}
        </Link>

        <a
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 active:scale-100 transition cursor-pointer borderBlack dark:bg-white/10"
          href="CV - Tran Phat Trien - Fresher Front End Developer.pdf"
          download={true}
        >
          Dowload CV <HiDownload className="opacity-60 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/tranphattrien"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full hover:scale-[1.15] hover:text-gray-950 active:scale-100 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/70"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/tranphattrien"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full hover:scale-[1.15] hover:text-gray-950 active:scale-100 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/70"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
