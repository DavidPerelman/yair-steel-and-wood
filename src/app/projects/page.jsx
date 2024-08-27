import styles from "./projects.module.css";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const ProjectsPage = async () => {
  const posts = await getData();
  console.log(posts);

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
