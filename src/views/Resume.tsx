import Header from "../components/resume/Header";
// import FloatSocial from "../components/resume/FloatSocial";

import Personal from "../components/resume/Personal";
import Education from "../components/resume/Education";
import Contact from "../components/resume/Contact";
import Job from "../components/resume/Job";
import Tool from "../components/resume/Tool";
import Footer from "../components/resume/Footer";
import Experience from "../components/resume/Experience";

const Resume = () => {
  return (
    <div>
      <Header />

      <div className="flex flex-wrap justify-center ">
        <div className="w-full lg:w-full">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto">
            <Personal />
          </div>
        </div>
        <div className="w-full lg:w-5/12">
          <Experience />
          <Education />
        </div>
        <div className="w-full lg:w-5/12">
          <Contact />
          <Job />
        </div>
        <div className="w-full">
          <Tool />
        </div>
      </div>

      <Footer />

      {/* <FloatSocial /> */}
    </div>
  );
};

export default Resume;
