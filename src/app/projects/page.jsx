import ProjectCard from "@/components/projectCard/ProjectCard";
import styles from "./projects.module.css";

const ProjectsPage = async () => {
  return (
    <div className={styles.projectsPage}>
      <h1>הפרויקטים שלנו</h1>
      <div className={styles.container}>
        <div className={styles.project}>
          <ProjectCard />
        </div>
        <div className={styles.project}>
          <ProjectCard />
        </div>
        <div className={styles.project}>
          <ProjectCard />
        </div>
        <div className={styles.project}>
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
