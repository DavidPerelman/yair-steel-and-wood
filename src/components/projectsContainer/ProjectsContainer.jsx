import Link from "next/link";
import styles from "./projectsContainer.module.css";
import ProjectCard from "../projectCard/ProjectCard";
import ProjectsCarousel from "../ProjectsCarousel/ProjectsCarousel";

const ProjectsContainer = async ({ projects, link }) => {
  return (
    <div className={styles.projectsContainer}>
      <h1 className="pageHeader">הפרויקטים שלנו</h1>
      <div className={styles.boxContainer}>
        <ProjectsCarousel projects={projects} link={link} />

        {/* {projects.map((project) => (
        <Link href={`${link}${project.slug}`} key={project.slug}>
          <ProjectCard project={project} />
        </Link>
      ))} */}
      </div>
    </div>
  );
};

export default ProjectsContainer;
