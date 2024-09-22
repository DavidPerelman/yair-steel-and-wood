import styles from "./projects.module.css";
import CustomHead from "@/components/customHead/CustomHead";
import ProjectsContainer from "@/components/projectsContainer/ProjectsContainer";

const ProjectsPage = async () => {
  const resProjects = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects`
  );
  const projects = await resProjects.json();

  const resDivisions = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/divisions`
  );
  const divisions = await resDivisions.json();

  return (
    <div className={styles.projectsPage}>
      <CustomHead
        title="יאיר ברזל ועץ - חנות"
        description="יאיר ברזל ועץ - חנות"
      />
      {/* <div className={styles.pageHeader}>חנות</div> */}
      {projects && divisions && (
        <ProjectsContainer
          projects={projects}
          divisions={divisions}
          link="/projects/"
        />
      )}
    </div>
  );
};

export default ProjectsPage;
