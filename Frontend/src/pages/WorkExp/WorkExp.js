import React from "react";
import "./WorkExp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GrUserManager } from "react-icons/gr";

const WorkExp = () => {
  return (
    <>
      <div className=" work" id="workexp">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#138781", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid #138781 ",
              }}
              date="2022"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<GrUserManager />}
            >
              <h3 className="vertical-timeline-element-title">Organizer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Udghosh, IIT Kanpur
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
