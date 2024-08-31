import Video from "@/components/video/Video";
import ProjectsContainer from "@/components/projectsContainer/ProjectsContainer";
import { getProjects } from "@/lib/data";

const Home = async () => {
  const data = await getProjects();
  const projects = JSON.parse(JSON.stringify(data));

  return (
    <>
      <Video />
      <div className={"container"}>
        <h1 className="pageHeader">הפרויקטים שלנו</h1>
        <ProjectsContainer projects={projects} link="/projects/" />
      </div>
    </>
  );
};

export default Home;
