import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "../styles/Experience.scss";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline className="vertical-timeline">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1999-2001"
          iconStyle={{ background: "midnightblue", color: "white" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            St. John's Univerisity, Jamaica, NY
          </h3>
          <p>Bachelor of Science-Biology</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2009-2015"
          iconStyle={{ background: "#e9d35b", color: "white" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Assistant Manager- Metropolitan Specialty Physicians
          </h3>
          <p>Elmhurst, NY</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015-2019"
          iconStyle={{ background: "#e9d35b", color: "white" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Surgical Coordinator- ProHealthcare Associates
          </h3>
          <p>Elmhurst, NY</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-present"
          iconStyle={{ background: "#e9d35b", color: "white" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Urgent Care Center Manager- Optum Tristate
          </h3>
          <p>Little Neck, NY</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2/2023-7/2023"
          iconStyle={{ background: "midnightblue", color: "white" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Generation USA (ChooseU), Washington, DC (remote)
          </h3>
          <p>Junior Web Developer Program</p>
          <p>Program Certificate</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
