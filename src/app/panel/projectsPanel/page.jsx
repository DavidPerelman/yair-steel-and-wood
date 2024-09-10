import styles from "./projectsPanel.module.css";
import CustomHead from "@/components/customHead/CustomHead";
import ProjectsContainer from "@/components/projectsContainer/ProjectsContainer";
import { getProjects } from "@/lib/data";

const AdminProjectsPage = async () => {
  // const data = await getProjects();
  // const projects = JSON.parse(JSON.stringify(data));

  return (
    <div className={styles.container}>
      <CustomHead
        title="יאיר ברזל ועץ - עריכת פרויקטים"
        description="יאיר ברזל ועץ - עריכת פרויקטים"
      />
      <h1 className={styles.pageHeader}>עריכת פרויקטים</h1>
      <div className={styles.pageHeader}></div>
      {/* <ProjectsContainer projects={projects} link="/panel/projectsPanel/" /> */}
    </div>
  );
};

export default AdminProjectsPage;
