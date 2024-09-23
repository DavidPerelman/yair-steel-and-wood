"use client";

import Video from "@/components/video/Video";
import ProjectsCarousel from "@/components/projectsCarousel/ProjectsCarousel";
import ReviewsContainer from "@/components/reviewsContainer/ReviewsContainer";
import FullScreenImage from "@/components/fullScreenImage/FullScreenImage";
import AboutContainer from "@/components/aboutContainer/AboutContainer";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Loading from "./loading";
import { callApiGet } from "@/lib/action";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const data = await callApiGet(
          `${process.env.NEXT_PUBLIC_API_URL}/api/projects`
        );
        if (data.projects) setProjects(data.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    const getReviews = async () => {
      try {
        const data = await callApiGet(
          `${process.env.NEXT_PUBLIC_API_URL}/api/reviews`
        );
        if (data.reviews) setReviews(data.reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    getProjects();
    getReviews();
  }, []);

  return (
    <>
      <section>
        <Video />
      </section>
      <section className={styles.carouselSection}>
        {projects.length > 0 ? (
          <ProjectsCarousel projects={projects} link="/projects/" />
        ) : (
          <>
            <Loading />
          </>
        )}
      </section>
      <FullScreenImage />
      <section className={styles.section}>
        <AboutContainer />
      </section>
      <section className={styles.section}>
        {reviews.length > 0 ? (
          <ReviewsContainer reviews={reviews} setReviews={setReviews} />
        ) : (
          <>
            <Loading />
          </>
        )}
      </section>
    </>
  );
};

export default Home;
