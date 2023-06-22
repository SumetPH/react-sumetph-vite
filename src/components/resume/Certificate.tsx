import Card from "./_Card";
import ModalCertificate from "../modal/ModalCertificate";
import IC3 from "../../assets/certificate/ic3.jpg";
import HackerRankReact from "../../assets/certificate/hacker_rank_react.jpg";
import { useTranslation } from "react-i18next";

const Certificate = () => {
  const { t } = useTranslation();

  return (
    <Card title={t("certificate.title")}>
      <div className="mb-2">
        <ModalCertificate img={IC3} rotate="portrait">
          <u>IC3</u>
        </ModalCertificate>
      </div>
      <div>
        <ModalCertificate img={HackerRankReact} rotate="landscape">
          <u>HackerRank React Basic</u>
        </ModalCertificate>
      </div>
    </Card>
  );
};

export default Certificate;
