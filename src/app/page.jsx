import Video from "@/components/video/Video";
import ProjectsCarousel from "@/components/projectsCarousel/ProjectsCarousel";
import ReviewsContainer from "@/components/reviewsContainer/ReviewsContainer";
import FullScreenImage from "@/components/fullScreenImage/FullScreenImage";
import AboutContainer from "@/components/aboutContainer/AboutContainer";
import styles from "./page.module.css";

const Home = async () => {
  const resReviews = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/reviews`
  );
  const reviews = await resReviews.json();

  const resProjects = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects`
  );
  const projects = await resProjects.json();

  return (
    <>
      <section>
        <Video />
      </section>
      <section className={styles.carouselSection}>
        {projects && (
          <ProjectsCarousel projects={projects.projects} link="/projects/" />
        )}
      </section>
      <FullScreenImage />
      <section className={styles.section}>
        <AboutContainer />
      </section>
      <section className={styles.section}>
        {reviews && <ReviewsContainer reviewsData={reviews.reviews} />}
      </section>
    </>
  );
};

export default Home;
