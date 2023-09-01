import React from "react";
import projectsData from "../data/projectsData.json";
import Link from "next/link";
import {
  FaGithub,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";
import ToolTip from "./toolTip";

const Projects = () => {
  return (
    <div className="section">
      <h1 className="heading text-lg ">{projectsData.heading}</h1>
      <div className="project_container">
        {projectsData.data.map((project) => (
          <div className="project_card" key={project.id}>
            <h1 className="project_name pb-2">{project.name}</h1>
            <hr className="pt-2" />
            <div className="description_box">
              <div>
                <p className="project_description p-5 flex items-center">
                  {project.description}
                </p>
              </div>
              <div className="links">
                <ToolTip section='projects' tooltip="Github">
                  <div>
                    {project.githubUrl && (
                      <Link className="link" target="_blank" href={project.githubUrl}>
                        <FaGithub />
                      </Link>
                    )}
                  </div>
                </ToolTip>
                <ToolTip section='projects' tooltip="Youtube">
                  <div >
                    {project.videoUrl && (
                      <Link className="link" target="_blank" href={project.videoUrl}>
                        <FaYoutube />
                      </Link>
                    )}
                  </div>
                </ToolTip>
                <ToolTip section='projects' tooltip="Live Site">
                  <div>
                    {project.deployedUrl && (
                      <Link className="link" target="_blank" href={project.deployedUrl}>
                        <FaGlobe />
                      </Link>
                    )}
                  </div>
                </ToolTip>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
