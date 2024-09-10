"use client";

import Link from "next/link";
import styles from "./projectsContainer.module.css";
import ProjectCard from "../projectCard/ProjectCard";
import { useState } from "react";
import Image from "next/image";
import FiltersContainer from "../filtersContainer/FiltersContainer";

const ProjectsContainer = ({ projects, divisions, link }) => {
  const MIN = 0;
  const MAX = 5000;

  const [values, setValues] = useState([MIN, MAX]);
  const [showItems, setShowItems] = useState(6);
  const [selectedDivisions, setSelectedDivisions] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [open, setOpen] = useState(false);

  const openFiltersClick = () => {
    setOpen((prev) => !prev);
  };

  const handleDivisionChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setSelectedDivisions([...selectedDivisions, value]);
      console.log(selectedDivisions);
    } else {
      setSelectedDivisions(
        selectedDivisions.filter((division) => division !== value)
      );
      console.log(selectedDivisions);
    }
  };

  const filterHandler = () => {
    const filteredProjects = projects.filter(
      (project) =>
        (selectedDivisions.length === 0 ||
          selectedDivisions.includes(project.division[0])) &&
        project.price >= values[0] &&
        project.price <= values[1]
    );

    setFilteredProjects(filteredProjects);
  };

  const handleShowMore = () => {
    setShowItems((prevShowItems) =>
      prevShowItems >= projects.length ? prevShowItems : prevShowItems + 4
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
    setSelectedDivisions([]);
    setValues([0, 5000]);
  };

  const filterLogoClick = () => {
    setOpen(true);
  };

  const displayedItems = filteredProjects.slice(0, showItems).map((project) => (
    <Link href={`${link}${project.slug}`} key={project.slug}>
      <ProjectCard project={project} />
    </Link>
  ));

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectsBoxesContainer}>
        <div className={styles.headers}>
          <h1 className={styles.pageHeader}>הפרויקטים שלנו</h1>
          <div className={styles.filtersShowBtn}>
            <Image
              onClick={filterLogoClick}
              className={styles.filterLogo}
              src="/filter.svg"
              width={30}
              height={30}
              alt="filter-logo"
              unoptimized
            />
          </div>
        </div>
        <div className={styles.boxContainer}>{displayedItems}</div>
        {showItems < filteredProjects.length ? (
          <button className={styles.showMoreBtn} onClick={handleShowMore}>
            <h2>טען עוד</h2>
          </button>
        ) : (
          <></>
        )}
      </div>
      <FiltersContainer
        open={open}
        openFiltersClick={openFiltersClick}
        divisions={divisions}
        updateFilters={handleDivisionChange}
        values={values}
        setValues={setValues}
        MIN={MIN}
        MAX={MAX}
        filterHandler={filterHandler}
        clearFilterHandler={clearFilterHandler}
      />
    </div>
  );
};

export default ProjectsContainer;
