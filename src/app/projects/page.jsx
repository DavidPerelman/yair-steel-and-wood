import ProjectCard from "@/components/projectCard/ProjectCard";
import styles from "./projects.module.css";
import { getProjects } from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 3600 },
//   });

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const ProjectsPage = async () => {
  // FETCH DATA WITH AN API
  // const projects = await getData();

  // FETCH DATA WITHOUT AN API
  const projects = await getProjects();

  return (
    <div className={styles.projectsPage}>
      <h1>הפרויקטים שלנו</h1>
      <div className={styles.container}>
        {projects.map((project) => (
          <div className={styles.project} key={project.slug}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
