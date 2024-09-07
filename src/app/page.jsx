import Video from "@/components/video/Video";
import ProjectsContainer from "@/components/projectsContainer/ProjectsContainer";
import { getProjects } from "@/lib/data";
import ProjectsCarousel from "@/components/ProjectsCarousel/ProjectsCarousel";

const Home = async () => {
  const data = await getProjects();
  const projects = JSON.parse(JSON.stringify(data));

  return (
    <>
      {/* <div className={"homePageContainer"}> */}
      <Video />
      <ProjectsCarousel projects={projects} link="/projects/" />
    </>
  );
};

export default Home;
