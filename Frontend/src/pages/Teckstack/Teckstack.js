import React from "react";
import "./Teckstack.css";
import Jump from "react-reveal/Jump";
import Fade from "react-reveal/Fade";
import { TechstackList } from "../../utils/TechstackList";

const Teckstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <Jump>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👉 including programming languages, frameworks, databases, front-end
            and back-end tools and APIs
          </p>
        </Jump>
        <div className="row">
          {TechstackList.map((tech) => (
            <div
              key={tech._id}
              className="col-md-6 col-lg-4 col-xl-4 col-sm-12"
            >
              {" "}
              <Fade left>
                <div className="card m-2 darkcard">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="align-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Teckstack;
