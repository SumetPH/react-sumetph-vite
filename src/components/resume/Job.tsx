import Card from "./_Card";
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandVue,
  TbBrandNuxt,
  TbBrandReact,
  TbBrandNextjs,
} from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";
import { useTranslation } from "react-i18next";

const Job = () => {
  const { t } = useTranslation();

  return (
    <Card title={t("job.title")}>
      <div className="mb-3">
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <div className="flex items-center mb-2">
              <TbBrandHtml5 size={20} />
              <span className="ml-2">HTML</span>
            </div>
            <div className="flex items-center mb-2">
              <TbBrandCss3 size={20} />
              <span className="ml-2">CSS</span>
            </div>
            <div className="flex items-center mb-2">
              <TbBrandJavascript size={20} />
              <span className="ml-2">JavaScript</span>
            </div>
            <div className="flex items-center mb-2">
              <IoLogoNodejs size={20} />
              <span className="ml-2">Node.js</span>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex items-center mb-2">
              <TbBrandVue size={20} />
              <span className="ml-2">Vue.js</span>
            </div>
            <div className="flex items-center mb-2">
              <TbBrandNuxt size={20} />
              <span className="ml-2">Nuxt.js</span>
            </div>
            <div className="flex items-center mb-2">
              <TbBrandReact size={20} />
              <span className="ml-2">React.js</span>
            </div>
            <div className="flex items-center mb-2">
              <TbBrandNextjs size={20} />
              <span className="ml-2">Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Job;
