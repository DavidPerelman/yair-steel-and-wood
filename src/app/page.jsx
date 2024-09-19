import Video from "@/components/video/Video";
import { getProjects, getReviews } from "@/lib/data";
import ProjectsCarousel from "@/components/projectsCarousel/ProjectsCarousel";
import ReviewsContainer from "@/components/reviewsContainer/ReviewsContainer";
import FullScreenImage from "@/components/fullScreenImage/FullScreenImage";
import AboutContainer from "@/components/aboutContainer/AboutContainer";
import styles from "./page.module.css";

const Home = async () => {
  const projectsData = await getProjects();
  const projects = JSON.parse(JSON.stringify(projectsData));
  const reviewsData = await getReviews();
  const reviews = JSON.parse(JSON.stringify(reviewsData));

  return (
    <>
      {/* <section>
        <Video />
      </section> */}
      <section className={styles.carouselSection}>
        <ProjectsCarousel projects={projects} link="/projects/" />
      </section>
      {/* <section className={styles.section} id={styles.banner}> */}
      <FullScreenImage />
      {/* </section> */}
      <section className={styles.section}>
        <AboutContainer />
      </section>
      <section className={styles.section}>
        <ReviewsContainer reviewsData={reviews} />
      </section>
    </>
  );
};

export default Home;
