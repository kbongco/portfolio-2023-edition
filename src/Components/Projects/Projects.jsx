import "./Projects.scss";
import samples from "../../assets/samples.png";
import weebjams from "../../assets/weebjams.png";
import { useTranslation } from "react-i18next";
import ProjectDisplayCard from "../ProjectDisplayCard/ProjectDisplayCard";

export default function Projects({ projects }) {
  const { t } = useTranslation();
  return (
    <div className="chbi-projects-container" id="projects">
      <h4 className="chbi-projects-header">{t("projects-cool")}</h4>
      <p className='chbi-projects-description'>{t('projects-description')}{" "}
        <a className="chbi-github-link" href="http://github.com/kbongco">
          {t('github')}
        </a>
        !{" "}
      </p>
      <div className='chbi-project-display-card-container'>
        {projects.map((project, index) => (
          <div className='chbi-project-display-card-parent'>
          <ProjectDisplayCard
            key={index}
            image={project.projectImg}
            title={project.projectName}
            description={project.description}
            githubLink={project.github || project.githubLink}
            figmaLink={project.design || project.figmaLink}
            deployedLink={project.deployedLink}
            />
            </div>
        ))}
      </div>
    </div>
  );
}
