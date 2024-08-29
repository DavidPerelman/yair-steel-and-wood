import ProjectCard from "@/components/projectCard/ProjectCard";
import styles from "./projects.module.css";
import { getProjects } from "@/lib/data";
import CustomHead from "@/components/customHead/CustomHead";
import Link from "next/link";

const ProjectsPage = async () => {
  const projects = await getProjects();

  return (
    <div className={styles.projectsPage}>
      <CustomHead
        title="יאיר ברזל ועץ - פרויקטים"
        description="יאיר ברזל ועץ - פרויקטים"
      />
      <h1 className={styles.pageHeader}>הפרויקטים שלנו</h1>
      <div className={styles.boxContainer}>
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.slug}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
