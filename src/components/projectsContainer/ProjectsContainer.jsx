"use client";

import Link from "next/link";
import styles from "./projectsContainer.module.css";
import ProjectCard from "../projectCard/ProjectCard";
import { useEffect, useState } from "react";
import Checkbox from "../checkbox/Checkbox";

const ProjectsContainer = ({ projects, divisions, link }) => {
  const [showItems, setShowItems] = useState(6);
  const [divisionFilters, setDivisionFilters] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (filteredProjects.length === 0) {
      setFilteredProjects(projects);
    }
  }, [filteredProjects, projects]);

  const updateFilters = (e) => {
    const selectedDivision = e.target.value;
    const checked = e.target.checked;

    if (checked && selectedDivision.length > 0) {
      const inDivisionFilters = divisionFilters.includes(selectedDivision);
      if (!inDivisionFilters) {
        setDivisionFilters((divisionFilters) => [
          ...divisionFilters,
          selectedDivision,
        ]);
      }
    } else {
      setDivisionFilters((divisionFilters) =>
        divisionFilters.filter((value, i) => value !== selectedDivision)
      );
    }
  };

  const handleShowMore = () => {
    setShowItems((prevShowItems) =>
      prevShowItems >= projects.length ? prevShowItems : prevShowItems + 4
    );
  };

  const filterHandler = () => {
    setFilteredProjects(
      projects.filter((item) => divisionFilters.includes(item.division[0]))
    );
  };

  const clearCheckBoxes = () => {
    var clist = document.getElementsByTagName("input");
    for (var i = 0; i < clist.length; ++i) {
      clist[i].checked = false;
    }
  };

  const clearFilterHandler = () => {
    clearCheckBoxes();
    setFilteredProjects(projects);
  };

  const displayedItems = filteredProjects.slice(0, showItems).map((project) => (
    <Link href={`${link}${project.slug}`} key={project.slug}>
      <ProjectCard project={project} />
    </Link>
  ));

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectsBoxesContainer}>
        <h1 className={styles.pageHeader}>הפרויקטים שלנו</h1>
        <div className={styles.boxContainer}>{displayedItems}</div>
        {showItems < filteredProjects.length ? (
          <button className={styles.showMoreBtn} onClick={handleShowMore}>
            <h2>טען עוד</h2>
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.filters}>
        <div className={styles.divisionsFilters}>
          {divisions.map((division) => (
            <Checkbox
              key={division._id}
              label={division.title}
              id={division._id}
              updateFilters={updateFilters}
            />
          ))}
          <button onClick={filterHandler}>סינון</button>
          <button onClick={clearFilterHandler}>נקה סינון</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
