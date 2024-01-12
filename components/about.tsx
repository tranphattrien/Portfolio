"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Currently, I have completed my university studies with a degree in{" "}
        <span className="font-medium">Software Engineering</span> and am waiting
        to graduate. My passion is to become a{" "}
        <span className="font-medium">front-end web developer</span>. , and I am
        always looking for opportunities to learn and apply my skills. I am
        currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a{" "}
        <span className="font-medium">Fresher Front - End Developer</span>.
      </p>

      <p>
        <span className="italic">When I am not coding</span>, I enjoy watching
        movies, reading books, and learning new things.
      </p>
    </motion.section>
  );
};

export default About;
