import { getProjects } from "@/lib/data";
import styles from "./projects.module.css";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/projects", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const ProjectsPage = async () => {
  const posts = await getProjects();

  return (
    <div className={styles.container}>
      <h1>הפרויקטים שלנו</h1>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default ProjectsPage;
