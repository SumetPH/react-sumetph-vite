import { Timeline, TimelineEvent } from "react-event-timeline";
import { FaGraduationCap } from "react-icons/fa";
import Card from "./_Card";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();

  return (
    <Card title={t("education.title")}>
      <Timeline style={{ fontSize: "1rem", fontWeight: 400 }}>
        <TimelineEvent
          title=""
          icon={<FaGraduationCap />}
          iconColor="#4a4a4a"
          contentStyle={{
            backgroundColor: "inherit",
            borderRadius: 8,
          }}
        >
          <span>2017 : {t("education.school1")}</span>
          <br />
          GPA : 3.65
        </TimelineEvent>
        <TimelineEvent
          title=""
          icon={<FaGraduationCap />}
          iconColor="#4a4a4a"
          contentStyle={{
            backgroundColor: "inherit",
            borderRadius: 8,
          }}
        >
          <span>2019 : {t("education.school2")}</span>
          <br />
          GPA : 3.69
        </TimelineEvent>
      </Timeline>
    </Card>
  );
};

export default Education;
