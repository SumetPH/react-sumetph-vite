import { FaGithubAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full mt-20 py-10 bg-gray-200 dark:bg-gray-800">
      <div className="flex justify-center">
        <a
          className="flex items-center"
          href="https://github.com/sumetph"
          target="_black"
        >
          <FaGithubAlt size={30} />
          <span className="ml-2">Github</span>
        </a>
      </div>
      <small className="text-center mt-5 block">
        This website created by React, Tailwindcss and support responsive
        design.
      </small>
    </footer>
  );
};

export default Footer;
