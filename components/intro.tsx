"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import avatarImg from "@/assets/images/avatar.jpg";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
const intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
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
          <motion.span
            className="text-4xl bottom-0 right-0 absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.5
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Tran Phat Trien.</span>{" "}
        I&apos;m a <span className="font-bold">front-end developer</span>, and
        I&apos;m always challenging myself to improve my skills and learn new
        technologies.
      </motion.p>
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
        >
          {" "}
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{" "}
        </Link>

        <a
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 active:scale-100 transition cursor-pointer border border-black/10"
          href="CV_Tran_Phat_Trien.pdf"
          download={true}
        >
          Dowload CV <HiDownload className="opacity-60 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/tranphattrien"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full hover:scale-[1.15] hover:text-gray-950 active:scale-100 transition cursor-pointer border border-black/10"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/tranphattrien"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full hover:scale-[1.15] hover:text-gray-950 active:scale-100 transition cursor-pointer border border-black/10"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default intro;
