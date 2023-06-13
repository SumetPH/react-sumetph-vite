import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  children: React.ReactNode;
  img: string;
  rotate: "landscape" | "portrait";
};

export default function ModalCertificate({ children, img, rotate }: Props) {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShow(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="cursor-pointer" onClick={showModal}>
        {children}
      </div>

      <AnimatePresence>
        {show && (
          <div
            className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50"
            onClick={closeModal}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, translateY: -100 },
                visible: { opacity: 1, translateY: 0 },
                exit: { opacity: 0, translateY: 100 },
              }}
              className={`
              border-white border-4 rounded-lg relative
              ${rotate === "landscape" ? "md:w-[60%]" : "md:h-[80%]"}
              `}
            >
              <img
                className={`
                    ${rotate === "landscape" ? "w-full" : "h-full"}
                `}
                src={img}
                alt=""
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
