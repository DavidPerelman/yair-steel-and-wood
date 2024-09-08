import Video from "@/components/video/Video";
import ProjectsContainer from "@/components/projectsContainer/ProjectsContainer";
import { getProjects } from "@/lib/data";
import ProjectsCarousel from "@/components/ProjectsCarousel/ProjectsCarousel";
import ReviewsContainer from "@/components/reviewsContainer/ReviewsContainer";
import FullScreenImage from "@/components/fullScreenImage/FullScreenImage";

const Home = async () => {
  const data = await getProjects();
  const projects = JSON.parse(JSON.stringify(data));

  return (
    <>
      {/* <div className={"homePageContainer"}> */}
      <Video />
      <ProjectsCarousel projects={projects} link="/projects/" />
      <FullScreenImage />
      <ReviewsContainer />
    </>
  );
};

export default Home;
