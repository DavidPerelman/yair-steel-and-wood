import ProjectCard from "@/components/projectCard/ProjectCard";
import styles from "./projects.module.css";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const ProjectsPage = async () => {
  const projects = await getData();

  return (
    <div className={styles.projectsPage}>
      <h1>הפרויקטים שלנו</h1>
      <div className={styles.container}>
        {projects.map((project) => (
          <div className={styles.project} key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
