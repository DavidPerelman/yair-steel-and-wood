import styles from "./projectsPanel.module.css";
import CustomHead from "@/components/customHead/CustomHead";
import ProjectsContainer from "@/components/projectsContainer/ProjectsContainer";
import { getDivisions, getProjects } from "@/lib/data";

const AdminProjectsPage = async () => {
  const projectsData = await getProjects();
  const projects = JSON.parse(JSON.stringify(projectsData));
  const divisionsData = await getDivisions();
  const divisions = JSON.parse(JSON.stringify(divisionsData));

  console.log(divisions);

  return (
    <div className={styles.container}>
      <CustomHead
        title="יאיר ברזל ועץ - עריכת פרויקטים"
        description="יאיר ברזל ועץ - עריכת פרויקטים"
      />
      <h1 className={styles.pageHeader}>עריכת פרויקטים</h1>
      <div className={styles.pageHeader}></div>

      <ProjectsContainer
        projects={projects}
        divisions={divisions}
        link="/panel/projectsPanel/"
      />
    </div>
  );
};

export default AdminProjectsPage;
