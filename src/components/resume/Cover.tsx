import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { LuLanguages } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import ProfileImg from "../../assets/img/profile.png";
import { useEffect } from "react";

export default function Cover() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [i18n]);

  const changeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("th");
      localStorage.setItem("lang", "th");
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("lang", "en");
    }
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center relative">
        <motion.div
          initial={{ opacity: 0, translateY: -100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="absolute top-[20px] right-[80px]"
        >
          <button onClick={changeLanguage}>
            <LuLanguages size={28} />
          </button>
        </motion.div>
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
            className="rounded-full border-white border-4 w-72 h-72"
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
              {t("personal.title")}
            </motion.h2>
          </div>
        </div>
      </div>

      <div className="mb-10 text-center">
        <p className="text-lg font-medium">{t("personal.description")}</p>
      </div>
    </>
  );
}
