import { motion, useInView, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

import Cover from "../components/resume/Cover";
import Experience from "../components/resume/Experience";
import Contact from "../components/resume/Contact";
import Education from "../components/resume/Education";
import Job from "../components/resume/Job";
import Tool from "../components/resume/Tool";
import Certificate from "../components/resume/Certificate";
import Footer from "../components/resume/Footer";

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
      <Cover />

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
