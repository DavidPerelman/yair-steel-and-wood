"use client";

import Link from "next/link";
import styles from "./projectsCarousel.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCard from "../projectCard/ProjectCard";

const ProjectsCarousel = ({ projects, link }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const projectsArray = projects.slice(0, 6).map((project) => (
    <Link href={`${link}${project.slug}`} key={project.slug}>
      <ProjectCard project={project} />
    </Link>
  ));

  return (
    <div className={styles.carousel}>
      <Link href="/projects">
        <h1 className={styles.pageHeader}>הפרויקטים שלנו</h1>
      </Link>
      <Carousel responsive={responsive} className={styles.ltr}>
        {projectsArray}
      </Carousel>
    </div>
  );
};

export default ProjectsCarousel;
