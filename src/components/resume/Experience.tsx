import { Timeline, TimelineEvent } from "react-event-timeline";
import { MdWork } from "react-icons/md";
import Card from "./_Card";

const Experience = () => {
  const bgColor = () => {
    if (localStorage.theme === "dark") {
      return "red";
    } else {
      return "white";
    }
  };

  return (
    <Card title="Work Experience">
      <Timeline style={{ fontSize: "1rem", fontWeight: 400 }}>
        <TimelineEvent
          title=""
          icon={<MdWork />}
          iconColor="#4a4a4a"
          contentStyle={{
            backgroundColor: bgColor,
            borderRadius: 8,
          }}
        >
          <span>2021 - Present</span>
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
