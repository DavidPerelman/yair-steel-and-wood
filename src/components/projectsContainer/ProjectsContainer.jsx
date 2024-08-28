const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const ProjectsContainer = async () => {
  const projects = await getData();

  return (
    <main>
      <div>
        <h2>הפרויקטים שלנו</h2>
        <div>
          {projects.map((project) => (
            <div key={project.id}>
              <h1>{project.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsContainer;
