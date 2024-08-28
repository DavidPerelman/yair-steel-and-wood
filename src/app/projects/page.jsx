import ProjectCard from "@/components/projectCard/ProjectCard";
import styles from "./projects.module.css";

const ProjectsPage = async () => {
  return (
    <div className={styles.container}>
      <h1>הפרויקטים שלנו</h1>
      <div className={styles.projectsGrid}>
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
