import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";
import Experience from "../components/resume/Experience";
import Contact from "../components/resume/Contact";
import Education from "../components/resume/Education";

import ProfileImg from "../assets/img/profile.png";
import Job from "../components/resume/Job";
import Tool from "../components/resume/Tool";
import Footer from "../components/resume/Footer";
import Certificate from "../components/resume/Certificate";

export default function ResumeMotion() {
  const containerRef = useRef(null);

  const experienceRef = useRef(null);
  const { scrollYProgress: experienceScrollYProgress } = useScroll({
    target: experienceRef,
    offset: ["start end", "center center"],
  });
  const experienceTranslate = useTransform(
    experienceScrollYProgress,
    [0, 1],
    [-100, 0]
  );
  const contactRef = useRef(null);
  const { scrollYProgress: contactScrollYProgress } = useScroll({
    target: contactRef,
    offset: ["start end", "center center"],
  });
  const contactTranslate = useTransform(
    contactScrollYProgress,
    [0, 1],
    [100, 0]
  );

  const educationRef = useRef(null);
  const { scrollYProgress: educationScrollYProgress } = useScroll({
    target: educationRef,
    offset: ["start end", "center center"],
  });
  const educationOpacity = useTransform(
    educationScrollYProgress,
    [0, 1],
    [0, 1]
  );

  const jobRef = useRef(null);

  const certificateRef = useRef(null);

  const toolRef = useRef(null);
  const toolInView = useInView(toolRef);

  return (
    <div ref={containerRef}>
      <div className="h-screen w-full flex justify-center items-center relative">
        <motion.div
          initial={{ opacity: 0, translateY: -100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="absolute top-[20px] right-[20px]"
        >
          <a href="https://github.com/sumetph" target="_blank">
            <FaGithub size={30} />
          </a>
        </motion.div>
        <div className="flex flex-wrap justify-center items-center">
          <motion.img
            initial={{ opacity: 0, translateY: 200 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
            className="rounded-full border-white border-4"
            src={ProfileImg}
            alt=""
          />
          <div className="ml-10 mt-10 md:mt-0">
            <motion.h1
              initial={{ opacity: 0, translateX: 100 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl font-bold"
            >
              Front End Developer
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, translateX: 100 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-lg "
            >
              Hello, My name is SumetPH.
            </motion.h2>
          </div>
        </div>
      </div>

      <div className="mb-10 text-center">
        <p className="text-lg font-medium">
          I'm a Web Developer. I'm interested in Front-end React.js and Vue.js
          or Back-end Node.js.
        </p>
      </div>

      <div className="container mx-auto ">
        <div className="grid grid-cols-2 gap-5 mx-5">
          <div className="col-span-2 md:col-span-1">
            <motion.div
              style={{
                translateX: experienceTranslate,
              }}
              className="h-full"
              ref={experienceRef}
            >
              <Experience />
            </motion.div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <motion.div
              style={{
                translateX: contactTranslate,
                translateY: contactTranslate,
              }}
              className="h-full"
              ref={contactRef}
            >
              <Contact />
            </motion.div>
          </div>
          <div className="col-span-2">
            <motion.div
              style={{ opacity: educationOpacity }}
              className="h-full"
              ref={educationRef}
            >
              <Education />
            </motion.div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <motion.div ref={jobRef} className="h-full">
              <Job />
            </motion.div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <motion.div ref={certificateRef} className="h-full">
              <Certificate />
            </motion.div>
          </div>
          <div className="col-span-2">
            <div ref={toolRef}>{toolInView && <Tool />}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
