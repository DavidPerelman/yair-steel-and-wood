import styles from "./projects.module.css";
import { getDivisions, getProjects } from "@/lib/data";
import CustomHead from "@/components/customHead/CustomHead";
import ProjectsContainer from "@/components/projectsContainer/ProjectsContainer";

const ProjectsPage = async () => {
  // const projectsData = await getProjects();
  // const projects = JSON.parse(JSON.stringify(projectsData));
  // const divisionsData = await getDivisions();
  // const divisions = JSON.parse(JSON.stringify(divisionsData));

  return (
    <div className={styles.projectsPage}>
      <CustomHead
        title="יאיר ברזל ועץ - פרויקטים"
        description="יאיר ברזל ועץ - פרויקטים"
      />
      <div className={styles.pageHeader}></div>
      {/* <ProjectsContainer
        projects={projects}
        divisions={divisions}
        link="/projects/"
      /> */}
    </div>
  );
};

export default ProjectsPage;
