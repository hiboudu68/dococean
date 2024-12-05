import React, { ReactNode } from "react";

export type ProjectInfos = {
  name: string;
  image: string;
  tags: Array<string>;
};
interface ProjectInfosProps {
  project: ProjectInfos;
  children: ReactNode;
}

const ProjectPage: React.FC<ProjectInfosProps> = ({ project, children }) => {
  return (
    <>
      <div className="project-page">
        <div className="project-img-container">
          <img src={project.image} />
        </div>
        <h2>{project.name}</h2>
        <div className="tags">
          {project.tags.map((element, index) => (
            <span key={index}>{element}</span>
          ))}
        </div>
        <div className="article-container">{children}</div>
      </div>
    </>
  );
};

export default ProjectPage;
