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
            Metropolitan Specialty Physicians, Elmhurst, NY
          </h3>
          <p>Assistant Manager</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015-2019"
          iconStyle={{ background: "#e9d35b", color: "white" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            ProHealthcare Associates, Elmhurst, NY
          </h3>
          <p>Surgical Coordinator</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-present"
          iconStyle={{ background: "#e9d35b", color: "white" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Optum Tristate, Little Neck, NY
          </h3>
          <p>Urgent Care Center Manager</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
