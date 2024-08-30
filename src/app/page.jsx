import Video from "@/components/video/Video";
import ProjectsContainer from "@/components/projectsContainer/ProjectsContainer";
import { getProjects } from "@/lib/data";

const Home = async () => {
  const projects = await getProjects();

  return (
    <>
      <Video />
      <div>
        <h1 className="pageHeader">הפרויקטים שלנו</h1>
        <ProjectsContainer projects={projects} link="/projects/" />
      </div>
    </>
  );
};

export default Home;
