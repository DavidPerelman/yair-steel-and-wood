import Link from "next/link";
import styles from "./projectsContainer.module.css";
import ProjectCard from "../projectCard/ProjectCard";
import ProjectsCarousel from "../ProjectsCarousel/ProjectsCarousel";

const ProjectsContainer = async ({ projects, link }) => {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.boxContainer}>
        {projects.map((project) => (
          <Link href={`${link}${project.slug}`} key={project.slug}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsContainer;
