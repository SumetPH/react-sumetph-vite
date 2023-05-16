import { Timeline, TimelineEvent } from "react-event-timeline";
import { FaGraduationCap } from "react-icons/fa";
import Card from "./_Card";

const Education = () => {
  const bgColor = () => {
    if (localStorage.theme === "dark") {
      return "red";
    } else {
      return "white";
    }
  };

  return (
    <Card title="Education">
      <Timeline style={{ fontSize: "1rem", fontWeight: 400 }}>
        <TimelineEvent
          title=""
          icon={<FaGraduationCap />}
          iconColor="#4a4a4a"
          contentStyle={{
            backgroundColor: bgColor,
            borderRadius: 8,
          }}
        >
          <span>
            2017 : Diploma in Electronic Srisongkram Industrial Technology,
            Nakhonphanom University
          </span>
          <br />
          GPA : 3.65
        </TimelineEvent>
        <TimelineEvent
          title=""
          icon={<FaGraduationCap />}
          iconColor="#4a4a4a"
          contentStyle={{
            backgroundColor: bgColor,
            borderRadius: 8,
          }}
        >
          <span>
            2019 : Bachelor of Business Administration Program in Computer
            Information System Rajamangala University of Technology Isan Sakon
            Nakhon Campus
          </span>
          <br />
          GPA : 3.69
        </TimelineEvent>
      </Timeline>
    </Card>
  );
};

export default Education;
