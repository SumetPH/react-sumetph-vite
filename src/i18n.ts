import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        personal: {
          title: "Hello, My name is SumetPH.",
          description:
            "I'm a Web Developer. I'm interested in Front-end React.js and Vue.js or Back-end Node.js.",
        },
        experience: {
          title: "Work Experience",
          present: "Present",
        },
        contact: {
          title: "Contact",
        },
        education: {
          title: "Education",
          school1:
            "Diploma in Electronic Srisongkram Industrial Technology, Nakhonphanom University",
          school2:
            "Bachelor of Business Administration Program in Computer Information System Rajamangala University of Technology Isan Sakon Nakhon Campus",
        },
        job: {
          title: "Job Target",
        },
        certificate: {
          title: "Certificate",
        },
      },
    },
    th: {
      translation: {
        personal: {
          title: "สวัสดีครับ ชื่อสุเมธ ผงพิลา ( น็อต )",
          description:
            "ปัจจุบันทำงานเป็น Front-end Developer ครับ สนใจใน React.js, Vue.js และ Node.js",
        },
        experience: {
          title: "ประสบการณ์การทำงาน",
          present: "ปัจจุบัน",
        },
        contact: {
          title: "ติดต่อ",
        },
        education: {
          title: "การศึกษา",
          school1:
            "อิเล็กทรอนิกส์ วิทยาลัยเทคโนโลยีอุตสาหกรรมศรีสงคราม มหาวิทยาลัยนครพนม",
          school2:
            "ระบบสารสนเทศทางคอมพิวเตอร์ มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตสกลนคร",
        },
        job: {
          title: "งานที่สนใจ",
        },
        certificate: {
          title: "ใบรับรอง",
        },
      },
    },
  },

  fallbackLng: "en",
  debug: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
