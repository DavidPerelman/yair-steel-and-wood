import styles from "./projects.module.css";
import { getProjects } from "@/lib/data";
import CustomHead from "@/components/customHead/CustomHead";
import ProjectsContainer from "@/components/projectsContainer/ProjectsContainer";

const ProjectsPage = async () => {
  const data = await getProjects();
  const projects = JSON.parse(JSON.stringify(data));

  return (
    <div className={styles.projectsPage}>
      <CustomHead
        title="יאיר ברזל ועץ - פרויקטים"
        description="יאיר ברזל ועץ - פרויקטים"
      />
      <h1 className={styles.pageHeader}>הפרויקטים שלנו</h1>
      <div className={styles.pageHeader}></div>
      <ProjectsContainer projects={projects} link="/projects/" />
    </div>
  );
};

export default ProjectsPage;
