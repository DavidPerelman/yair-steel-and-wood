"use client";

import Video from "@/components/video/Video";
import ProjectsCarousel from "@/components/projectsCarousel/ProjectsCarousel";
import ReviewsContainer from "@/components/reviewsContainer/ReviewsContainer";
import FullScreenImage from "@/components/fullScreenImage/FullScreenImage";
import AboutContainer from "@/components/aboutContainer/AboutContainer";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Loading from "./loading";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const resProjects = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/projects`
        );
        if (!resProjects.ok)
          throw new Error(`HTTP error! status: ${resProjects.status}`);

        const data = await resProjects.json();
        if (data.projects) setProjects(data.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    const getReviews = async () => {
      try {
        const resReviews = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/reviews`
        );
        if (!resReviews.ok)
          throw new Error(`HTTP error! status: ${resReviews.status}`);

        const data = await resReviews.json();
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
        {reviews.length > 0 ? (
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
          <ReviewsContainer reviews={reviews} />
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
