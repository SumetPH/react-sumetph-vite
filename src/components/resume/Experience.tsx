import { Timeline, TimelineEvent } from "react-event-timeline";
import { MdWork } from "react-icons/md";
import Card from "./_Card";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <Card title={t("experience.title")}>
      <Timeline style={{ fontSize: "1rem", fontWeight: 400 }}>
        <TimelineEvent
          title=""
          icon={<MdWork />}
          iconColor="#4a4a4a"
          contentStyle={{
            backgroundColor: "inherit",
            borderRadius: 8,
          }}
        >
          <span>2021 - {t("experience.present")}</span>
          <br />
          <b>Front-End Developer</b>
          <br />
          <span className="text-sm">Rudy Technology Co., Ltd</span>
          <br />
        </TimelineEvent>
      </Timeline>
    </Card>
  );
};

export default Experience;
